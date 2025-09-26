#!/usr/bin/env bash
set -euo pipefail

DEFAULT_UPSTREAM_URL="https://github.com/ShinoharaHaruna/MyFrontendTemplate.git"

usage() {
  cat <<EOF
Usage: ./scripts/setup-fork.sh --repo-owner <owner> --repo-name <name> [options]

Required arguments:
  --repo-owner <owner>       GitHub owner (user or org) of your fork
  --repo-name <name>         Repository name of your fork

Optional arguments:
  --package-name <name>      npm package name (defaults to repo-name lowercased)
  --project-title <title>    Project title used in README (defaults to title-cased repo-name)
  --origin-url <url>         Custom git origin URL (defaults to git@github.com:<owner>/<name>.git)
  --upstream-url <url>       Upstream template URL (defaults to ${DEFAULT_UPSTREAM_URL})
  --skip-remote              Skip git remote configuration
  -h, --help                 Show this help message

Examples:
  ./scripts/setup-fork.sh --repo-owner yourname --repo-name awesome-template
  ./scripts/setup-fork.sh --repo-owner yourname --repo-name awesome-template \\
    --project-title "Awesome Template" --skip-remote
EOF
}

require_cmd() {
  if ! command -v "$1" >/dev/null 2>&1; then
    echo "Error: required command '$1' is not available" >&2
    exit 1
  fi
}

REPO_OWNER=""
REPO_NAME=""
PACKAGE_NAME=""
PROJECT_TITLE=""
ORIGIN_URL=""
UPSTREAM_URL="${DEFAULT_UPSTREAM_URL}"
SKIP_REMOTE="0"

while [[ $# -gt 0 ]]; do
  case "$1" in
  --repo-owner)
    REPO_OWNER="$2"
    shift 2
    ;;
  --repo-name)
    REPO_NAME="$2"
    shift 2
    ;;
  --package-name)
    PACKAGE_NAME="$2"
    shift 2
    ;;
  --project-title)
    PROJECT_TITLE="$2"
    shift 2
    ;;
  --origin-url)
    ORIGIN_URL="$2"
    shift 2
    ;;
  --upstream-url)
    UPSTREAM_URL="$2"
    shift 2
    ;;
  --skip-remote)
    SKIP_REMOTE="1"
    shift
    ;;
  -h | --help)
    usage
    exit 0
    ;;
  *)
    echo "Unknown argument: $1" >&2
    usage
    exit 1
    ;;
  esac
done

if [[ -z "$REPO_OWNER" || -z "$REPO_NAME" ]]; then
  echo "Error: --repo-owner and --repo-name are required" >&2
  usage
  exit 1
fi

if [[ ! -f "README.md" ]]; then
  echo "Error: run this script from the repository root (README.md not found)" >&2
  exit 1
fi

require_cmd perl
if [[ "$SKIP_REMOTE" != "1" ]]; then
  require_cmd git
fi

if [[ -z "$PACKAGE_NAME" ]]; then
  PACKAGE_NAME=$(echo "$REPO_NAME" | tr '[:upper:]' '[:lower:]' | tr ' ' '-' | tr '_' '-')
fi

if [[ -z "$PROJECT_TITLE" ]]; then
  if command -v python3 >/dev/null 2>&1; then
    PROJECT_TITLE=$(
      python3 - "$REPO_NAME" <<'PY'
import string
import sys
raw = sys.argv[1].replace('-', ' ').replace('_', ' ')
print(string.capwords(raw))
PY
    )
  else
    PROJECT_TITLE=${REPO_NAME//[-_]/ }
    PROJECT_TITLE=${PROJECT_TITLE^}
  fi
fi

if [[ -z "$ORIGIN_URL" ]]; then
  ORIGIN_URL="git@github.com:${REPO_OWNER}/${REPO_NAME}.git"
fi

GITHUB_BASE="https://github.com/${REPO_OWNER}/${REPO_NAME}"
CLONE_URL="${GITHUB_BASE}.git"

# Update package name
perl -0pi -e "s/\"name\":\s*\"[^\"]+\"/\"name\": \"${PACKAGE_NAME}\"/" package.json

FILES=(README.md README_cn.md)

# Update README titles
perl -0pi -e "s/^# My Frontend Template/# ${PROJECT_TITLE}/" "${FILES[@]}"

# Update repo slugs and URLs in docs
perl -0pi -e "s|https://github.com/ShinoharaHaruna/MyFrontendTemplate|${GITHUB_BASE}|g" "${FILES[@]}"
perl -0pi -e "s|git clone https://github.com/ShinoharaHaruna/MyFrontendTemplate.git|git clone ${CLONE_URL}|g" "${FILES[@]}"
perl -0pi -e "s|ShinoharaHaruna/MyFrontendTemplate|${REPO_OWNER}/${REPO_NAME}|g" "${FILES[@]}"
perl -0pi -e "s|cd MyFrontendTemplate|cd ${REPO_NAME}|g" "${FILES[@]}"

if [[ "$SKIP_REMOTE" != "1" ]]; then
  if git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
    if git remote get-url origin >/dev/null 2>&1; then
      git remote set-url origin "$ORIGIN_URL"
      echo "Updated git remote 'origin' -> ${ORIGIN_URL}"
    else
      git remote add origin "$ORIGIN_URL"
      echo "Added git remote 'origin' -> ${ORIGIN_URL}"
    fi

    if git remote get-url upstream >/dev/null 2>&1; then
      git remote set-url upstream "$UPSTREAM_URL"
      echo "Updated git remote 'upstream' -> ${UPSTREAM_URL}"
    else
      git remote add upstream "$UPSTREAM_URL"
      echo "Added git remote 'upstream' -> ${UPSTREAM_URL}"
    fi
  else
    echo "Warning: git repository not detected, skipping remote configuration" >&2
  fi
fi

cat <<EOF

Done! Updated metadata for '${PROJECT_TITLE}'.
- package.json name -> ${PACKAGE_NAME}
- README files now point to ${GITHUB_BASE}
- Clone instructions use ${CLONE_URL}
EOF

if [[ "$SKIP_REMOTE" != "1" ]]; then
  cat <<EOF
Next steps:
- git fetch upstream && git merge upstream/main   # keep your fork up-to-date
EOF
fi
