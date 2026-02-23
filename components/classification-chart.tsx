"use client"

import {
    TrendingUp,
    ShoppingCart,
    Gamepad2,
    GraduationCap,
    DollarSign,
    Users,
    Play,
    FileText,
    MessagesSquare,
    Dices,
    Lock,
    Briefcase
} from "lucide-react"
import { Pie, PieChart, Label } from "recharts"
import * as React from "react"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
    type ChartConfig,
} from "@/components/ui/chart"

export const description = "AI Website Classification Donut Chart"

const chartData = [
    { category: "shopping", value: 150, fill: "var(--color-shopping)" },
    { category: "gaming", value: 120, fill: "var(--color-gaming)" },
    { category: "education", value: 100, fill: "var(--color-education)" },
    { category: "finance", value: 80, fill: "var(--color-finance)" },
    { category: "socialMedia", value: 180, fill: "var(--color-socialMedia)" },
    { category: "streaming", value: 140, fill: "var(--color-streaming)" },
    { category: "blogs", value: 70, fill: "var(--color-blogs)" },
    { category: "forums", value: 60, fill: "var(--color-forums)" },
    { category: "gambling", value: 40, fill: "var(--color-gambling)" },
    { category: "adult", value: 30, fill: "var(--color-adult)" },
    { category: "services", value: 30, fill: "var(--color-services)" },
]

const chartConfig = {
    value: {
        label: "Sites",
    },
    shopping: { label: "Shopping", color: "#3b82f6", icon: ShoppingCart },
    gaming: { label: "Gaming", color: "#8b5cf6", icon: Gamepad2 },
    education: { label: "Education", color: "#10b981", icon: GraduationCap },
    finance: { label: "Finance", color: "#0ea5e9", icon: DollarSign },
    socialMedia: { label: "Social Media", color: "#ec4899", icon: Users },
    streaming: { label: "Streaming", color: "#14b8a6", icon: Play },
    blogs: { label: "Blogs", color: "#f59e0b", icon: FileText },
    forums: { label: "Forums", color: "#a855f7", icon: MessagesSquare },
    gambling: { label: "Gambling", color: "#f97316", icon: Dices },
    adult: { label: "Adult", color: "#ef4444", icon: Lock },
    services: { label: "Services", color: "#06b6d4", icon: Briefcase },
} satisfies ChartConfig

export function ClassificationChart() {
    const totalValue = React.useMemo(() => {
        return chartData.reduce((acc, curr) => acc + curr.value, 0)
    }, [])

    return (
        <Card className="flex h-full flex-col bg-transparent border-none shadow-none text-white w-full">
            <CardContent className="flex flex-1 flex-row items-center justify-between pb-0">
                <ChartContainer
                    config={chartConfig}
                    className="aspect-square max-h-[350px] flex-1"
                >
                    <PieChart>
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Pie
                            data={chartData}
                            dataKey="value"
                            nameKey="category"
                            innerRadius={70}
                            strokeWidth={5}
                        />
                    </PieChart>
                </ChartContainer>

                <div className="flex flex-col gap-2 ml-4">
                    {chartData.map((item) => {
                        const percentage = ((item.value / totalValue) * 100).toFixed(1);
                        const config = (chartConfig as any)[item.category];
                        const Icon = config?.icon;
                        return (
                            <div key={item.category} className="flex items-center gap-2 text-xs font-medium">
                                <div
                                    className="size-2 rounded-full shrink-0"
                                    style={{ backgroundColor: config?.color }}
                                />
                                {Icon && <Icon className="size-3.5 text-white/50 shrink-0" />}
                                <span className="text-white/70 whitespace-nowrap">{config?.label}:</span>
                                <span className="text-white ml-auto">{percentage}%</span>
                            </div>
                        );
                    })}
                </div>
            </CardContent>
            <CardFooter className="pt-4">
                <div className="flex w-full flex-col gap-2 text-sm text-white/70">
                    <div className="flex items-center gap-2 leading-none font-medium text-white">
                        Real-time AI Classification <TrendingUp className="h-4 w-4 text-green-400" />
                    </div>
                    <div className="leading-none opacity-60 text-xs">
                        Automatically analyzes the target and identifies the website type
                    </div>
                </div>
            </CardFooter>
        </Card>
    )
}
