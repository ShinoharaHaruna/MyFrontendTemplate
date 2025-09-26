import { useEffect, useState } from "react"
import { Bell, Calendar, CheckCircle2, MessageCircle } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"

const teamMembers = [
  { name: "李嘉", role: "Design Lead", initials: "JL" },
  { name: "Chen Wei", role: "Product", initials: "CW" },
  { name: "Amy Wong", role: "Frontend", initials: "AW" },
]

const timeline = [
  {
    title: "Landing 页面动效确认",
    detail: "交互稿已同步，等待前端排期确认。",
    time: "今天 10:24",
    icon: CheckCircle2,
  },
  {
    title: "Marketing 提交反馈",
    detail: "需要突出新春活动信息，Hero 区域加入口号。",
    time: "昨天 18:05",
    icon: MessageCircle,
  },
  {
    title: "排期提醒",
    detail: "周五下午 3 点与后端联调，准备接口验收清单。",
    time: "周一 09:30",
    icon: Calendar,
  },
]

function App() {
  // Dark mode toggle state handling
  // 暗色模式开关的状态处理
  const [dark, setDark] = useState<boolean>(false)

  useEffect(() => {
    // Initialize from localStorage or system preference
    // 从本地存储或系统偏好初始化暗色模式
    const stored = localStorage.getItem("theme.dark")
    if (stored === "true") {
      setDark(true)
      document.documentElement.classList.add("dark")
      return
    }
    if (stored === "false") {
      setDark(false)
      document.documentElement.classList.remove("dark")
      return
    }
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
    if (prefersDark) {
      setDark(true)
      document.documentElement.classList.add("dark")
    }
  }, [])

  useEffect(() => {
    // Sync preference with <html> classList and persist it
    // 将偏好同步到 <html> 的 classList 并持久化
    if (dark) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme.dark", "true")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme.dark", "false")
    }
  }, [dark])

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-8">
        <header className="flex flex-col gap-6 border-b pb-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-3">
            <Badge variant="secondary" className="w-fit">
              Design Ops
            </Badge>
            <div className="space-y-1">
              <h1 className="text-3xl font-semibold tracking-tight">Shadcn UI 工作台</h1>
              <p className="text-muted-foreground max-w-xl">
                用官方组件快速搭建演示页，展示项目概览、团队状态以及日常协作记录。
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="flex items-center gap-3 rounded-lg border px-4 py-2 shadow-sm">
              <span className="text-sm font-medium">Dark Mode</span>
              <Switch
                checked={dark}
                onCheckedChange={setDark}
                aria-label="Toggle dark mode"
              />
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" className="hidden sm:inline-flex">
                <Bell className="size-4" />
              </Button>
              <Button>新建简报</Button>
            </div>
          </div>
        </header>

        <Tabs defaultValue="overview" className="flex-1 py-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="updates">Updates</TabsTrigger>
              <TabsTrigger value="activity">Activity</TabsTrigger>
            </TabsList>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Input placeholder="Search tasks… 搜索任务" className="sm:w-64" />
              <Button variant="ghost" className="justify-start sm:w-auto">
                <Calendar className="mr-2 size-4" />
                本周排期
              </Button>
            </div>
          </div>

          <TabsContent value="overview" className="mt-6 space-y-6">
            <div className="grid gap-6 lg:grid-cols-[1.7fr_1fr]">
              <Card>
                <CardHeader className="flex flex-col gap-2">
                  <Badge variant="outline" className="w-fit">Sprint #12</Badge>
                  <CardTitle>Landing Page Reboot</CardTitle>
                  <CardDescription>
                    整理设计规范、交付动效稿，并协调前后端排期，确保新版上线顺利。
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-6 md:grid-cols-2">
                  <div className="rounded-lg border p-4">
                    <p className="text-sm text-muted-foreground">完成度 Progress</p>
                    <div className="mt-3 flex items-center gap-2 text-2xl font-semibold">
                      78%
                      <CheckCircle2 className="size-5 text-primary" />
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">剩余 3 项待审核</p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <p className="text-sm text-muted-foreground">下一个里程碑 Next Milestone</p>
                    <div className="mt-3 flex items-center gap-2 font-semibold">
                      设计验收 • Thu 16:00
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">已邀请后端与 QA 一同参与</p>
                  </div>
                </CardContent>
                <CardFooter className="gap-3">
                  <Button variant="outline">查看文件库</Button>
                  <Button>同步到 Notion</Button>
                </CardFooter>
              </Card>

              <div className="grid gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>核心团队 Team</CardTitle>
                    <CardDescription>最近 24 小时内 3 人已查看最新进度。</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {teamMembers.map((member) => (
                      <div
                        key={member.name}
                        className="flex items-center justify-between gap-4"
                      >
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarImage alt={member.name} src={`https://avatar.vercel.sh/${member.initials}`} />
                            <AvatarFallback>{member.initials}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium leading-none">{member.name}</p>
                            <p className="text-xs text-muted-foreground">{member.role}</p>
                          </div>
                        </div>
                        <Button size="sm" variant="ghost" className="text-muted-foreground">
                          发送提醒
                        </Button>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card className="border-dashed">
                  <CardHeader>
                    <CardTitle>下一次碰头</CardTitle>
                    <CardDescription>周三上午 10:00 • Google Meet</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-3">
                      <Calendar className="size-4" />
                      制定首屏动画节奏与加载策略
                    </div>
                    <div className="flex items-center gap-3">
                      <MessageCircle className="size-4" />
                      整理上线 FAQ，确认客服文案
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="secondary" className="w-full">
                      加入会议
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="updates" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>发布更新 Broadcast Update</CardTitle>
                <CardDescription>记录关键沟通内容，自动同步到项目群。</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input placeholder="标题 Title" />
                <Textarea rows={6} placeholder="写下需要同步的要点…" />
              </CardContent>
              <CardFooter className="justify-end gap-3">
                <Button variant="ghost">保存草稿</Button>
                <Button>发送</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="activity" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>最近动态 Activity Feed</CardTitle>
                <CardDescription>关注跨团队协作的关键事件。</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {timeline.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <div key={item.title} className="space-y-2">
                      <div className="flex items-start gap-3">
                        <div className="rounded-full border p-2 text-primary">
                          <Icon className="size-4" />
                        </div>
                        <div className="space-y-1">
                          <p className="font-medium leading-tight">{item.title}</p>
                          <p className="text-sm text-muted-foreground">{item.detail}</p>
                          <p className="text-xs text-muted-foreground">{item.time}</p>
                        </div>
                      </div>
                      {index < timeline.length - 1 ? <Separator /> : null}
                    </div>
                  )
                })}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default App
