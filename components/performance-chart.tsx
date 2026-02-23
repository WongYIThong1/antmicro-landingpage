"use client"

import { TrendingUp, Cloud } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"
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

export const description = "A cloud performance multiple line chart"

const chartData = [
    { time: "T-4", wpm: 1800, rpm: 1200 },
    { time: "T-3", wpm: 1000, rpm: 2400 },
    { time: "T-2", wpm: 2200, rpm: 1500 },
    { time: "T-1", wpm: 1400, rpm: 2100 },
    { time: "Now", wpm: 829, rpm: 2000 },
]

const chartConfig = {
    wpm: {
        label: "WPM",
        color: "#3b82f6",
    },
    rpm: {
        label: "RPM",
        color: "#10b981",
    },
} satisfies ChartConfig

export function PerformanceChart() {
    const [wpm, setWpm] = React.useState(829)
    const [rpm, setRpm] = React.useState(2042)

    React.useEffect(() => {
        const interval = setInterval(() => {
            setWpm(829 + Math.floor(Math.random() * 40 - 20))
            setRpm(2000 + Math.floor(Math.random() * 100 - 50))
        }, 2000)
        return () => clearInterval(interval)
    }, [])

    return (
        <Card className="flex h-full flex-col bg-transparent border-none shadow-none text-white w-full">
            <CardContent className="pt-4 flex-1">
                <ChartContainer config={chartConfig} className="aspect-[4/3] w-full max-h-[300px]">
                    <LineChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                            left: 12,
                            right: 12,
                            top: 10,
                            bottom: 10
                        }}
                    >
                        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                        <Line
                            dataKey="wpm"
                            type="monotone"
                            stroke={chartConfig.wpm.color}
                            strokeWidth={2}
                            dot={false}
                        />
                        <Line
                            dataKey="rpm"
                            type="monotone"
                            stroke={chartConfig.rpm.color}
                            strokeWidth={2}
                            dot={false}
                        />
                    </LineChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="pt-4">
                <div className="flex w-full flex-col gap-2 text-sm text-white/70">
                    <div className="flex items-center gap-2 leading-none font-medium text-white">
                        System Status: Active <TrendingUp className="h-4 w-4 text-green-400" />
                    </div>
                    <div className="leading-none opacity-60 text-xs">
                        Run SQL security testing at massive cloud scale with ultra-fast request throughput.
                    </div>
                </div>
            </CardFooter>
        </Card>
    )
}
