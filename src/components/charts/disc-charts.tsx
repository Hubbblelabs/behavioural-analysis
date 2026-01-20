"use client"

import { DISCScores, discColors } from "@/lib/disc-data"
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Cell,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    Radar,
} from "recharts"

interface DISCChartProps {
    scores: DISCScores
    type?: "bar" | "radar"
}

export function DISCBarChart({ scores }: DISCChartProps) {
    const data = [
        {
            name: "Dominance",
            value: scores.D,
            color: discColors.D.primary,
            shortName: "D"
        },
        {
            name: "Influence",
            value: scores.I,
            color: discColors.I.primary,
            shortName: "I"
        },
        {
            name: "Steadiness",
            value: scores.S,
            color: discColors.S.primary,
            shortName: "S"
        },
        {
            name: "Conscientiousness",
            value: scores.C,
            color: discColors.C.primary,
            shortName: "C"
        },
    ]

    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis
                    dataKey="shortName"
                    className="text-sm fill-muted-foreground"
                    tick={{ fill: 'currentColor' }}
                />
                <YAxis
                    domain={[0, 30]}
                    className="text-sm fill-muted-foreground"
                    tick={{ fill: 'currentColor' }}
                />
                <Tooltip
                    contentStyle={{
                        backgroundColor: 'hsl(var(--card))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px',
                        color: 'hsl(var(--foreground))',
                    }}
                    formatter={(value: number, name: string) => [value, name]}
                    labelFormatter={(label) => {
                        const item = data.find(d => d.shortName === label)
                        return item?.name || label
                    }}
                />
                <Bar dataKey="value" radius={[8, 8, 0, 0]} maxBarSize={80}>
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                </Bar>
            </BarChart>
        </ResponsiveContainer>
    )
}

export function DISCRadarChart({ scores }: DISCChartProps) {
    const data = [
        { subject: "Dominance", value: scores.D, fullMark: 30 },
        { subject: "Influence", value: scores.I, fullMark: 30 },
        { subject: "Steadiness", value: scores.S, fullMark: 30 },
        { subject: "Conscientiousness", value: scores.C, fullMark: 30 },
    ]

    return (
        <ResponsiveContainer width="100%" height={350}>
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                <PolarGrid className="stroke-muted" />
                <PolarAngleAxis
                    dataKey="subject"
                    className="text-xs fill-muted-foreground"
                    tick={{ fill: 'currentColor', fontSize: 12 }}
                />
                <PolarRadiusAxis
                    angle={30}
                    domain={[0, 30]}
                    className="text-xs fill-muted-foreground"
                    tick={{ fill: 'currentColor' }}
                />
                <Radar
                    name="DISC Profile"
                    dataKey="value"
                    stroke="hsl(var(--primary))"
                    fill="hsl(var(--primary))"
                    fillOpacity={0.3}
                    strokeWidth={2}
                />
                <Tooltip
                    contentStyle={{
                        backgroundColor: 'hsl(var(--card))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px',
                        color: 'hsl(var(--foreground))',
                    }}
                />
            </RadarChart>
        </ResponsiveContainer>
    )
}

interface ScoreCardProps {
    type: 'D' | 'I' | 'S' | 'C'
    score: number
    maxScore?: number
}

export function ScoreCard({ type, score, maxScore = 30 }: ScoreCardProps) {
    const config = discColors[type]
    const percentage = (score / maxScore) * 100

    let level: string
    let levelColor: string

    if (score <= 7) {
        level = "Low"
        levelColor = "text-muted-foreground"
    } else if (score <= 14) {
        level = "Moderate"
        levelColor = "text-amber-500"
    } else {
        level = "High"
        levelColor = "text-emerald-500"
    }

    return (
        <div className="relative overflow-hidden rounded-xl border bg-card p-5 shadow-sm">
            <div className="flex items-start justify-between">
                <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">{config.name}</p>
                    <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-bold" style={{ color: config.primary }}>
                            {score}
                        </span>
                        <span className="text-sm text-muted-foreground">/ {maxScore}</span>
                    </div>
                    <p className={`text-sm font-medium ${levelColor}`}>{level}</p>
                </div>
                <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl text-2xl"
                    style={{ backgroundColor: config.light }}
                >
                    {type}
                </div>
            </div>

            {/* Progress indicator */}
            <div className="mt-4">
                <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
                    <div
                        className="h-full rounded-full transition-all duration-700 ease-out"
                        style={{
                            width: `${percentage}%`,
                            backgroundColor: config.primary
                        }}
                    />
                </div>
            </div>

            {/* Decorative gradient */}
            <div
                className="absolute -right-8 -top-8 h-24 w-24 rounded-full opacity-10"
                style={{ backgroundColor: config.primary }}
            />
        </div>
    )
}
