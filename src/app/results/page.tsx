"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DISCBarChart, DISCRadarChart, ScoreCard } from "@/components/charts/disc-charts"
import {
    DISCScores,
    DISCType,
    discColors,
    personalityProfiles,
    careerRecommendations,
    getScoreLevel
} from "@/lib/disc-data"

export default function ResultsPage() {
    const router = useRouter()
    const [scores, setScores] = useState<DISCScores | null>(null)
    const [rankedTypes, setRankedTypes] = useState<DISCType[]>([])
    const [chartType, setChartType] = useState<'bar' | 'radar'>('bar')
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        // Load results from sessionStorage
        const storedScores = sessionStorage.getItem('discScores')
        const storedRankedTypes = sessionStorage.getItem('discRankedTypes')

        if (storedScores && storedRankedTypes) {
            setScores(JSON.parse(storedScores))
            setRankedTypes(JSON.parse(storedRankedTypes))
            setIsLoaded(true)
        } else {
            // Redirect to assessment if no results
            router.push('/assessment')
        }
    }, [router])

    if (!isLoaded || !scores) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
                    <p className="text-slate-600 dark:text-slate-400">Loading your results...</p>
                </div>
            </div>
        )
    }

    const primaryType = rankedTypes[0]
    const secondaryType = rankedTypes[1]
    const tertiaryType = rankedTypes[2]
    const primaryProfile = personalityProfiles[primaryType]

    // Get top 3 careers based on ranked types
    const topCareers = rankedTypes.slice(0, 3).map((type, index) => ({
        ...careerRecommendations[type][0],
        type,
        rank: index + 1,
    }))

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
            {/* Background decorative elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute -top-40 -right-40 h-80 w-80 rounded-full blur-3xl opacity-30"
                    style={{ backgroundColor: discColors[primaryType].primary }}
                />
                <div
                    className="absolute bottom-0 -left-40 h-80 w-80 rounded-full blur-3xl opacity-20"
                    style={{ backgroundColor: discColors[secondaryType].primary }}
                />
            </div>

            {/* Header */}
            <header className="relative z-10 border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg">
                <div className="mx-auto max-w-7xl px-6 py-4">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 text-sm font-bold text-white">
                                D
                            </div>
                            <span className="font-semibold text-slate-900 dark:text-white">DISC Assessment</span>
                        </Link>
                        <div className="flex items-center gap-3">
                            <Link href="/report">
                                <Button variant="outline" className="rounded-full">
                                    View Full Report
                                </Button>
                            </Link>
                            <Link href="/assessment">
                                <Button variant="ghost" className="rounded-full">
                                    Retake Assessment
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative z-10 mx-auto max-w-7xl px-6 py-12">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                        </span>
                        Assessment Complete
                    </div>

                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                        Your DISC Personality Profile
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Based on your responses, we&apos;ve identified your behavioral tendencies and career alignment.
                    </p>
                </div>

                {/* Primary Type Hero */}
                <Card className="border-0 shadow-2xl overflow-hidden mb-8">
                    <div
                        className="h-2"
                        style={{ background: `linear-gradient(to right, ${discColors[primaryType].primary}, ${discColors[secondaryType].primary})` }}
                    />
                    <CardContent className="p-8">
                        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
                            <div
                                className="flex h-24 w-24 items-center justify-center rounded-3xl text-4xl font-bold text-white shadow-xl"
                                style={{
                                    background: `linear-gradient(135deg, ${discColors[primaryType].primary}, ${discColors[primaryType].primary}dd)`
                                }}
                            >
                                {primaryType}
                            </div>
                            <div className="flex-1">
                                <div className="flex flex-wrap items-center gap-3 mb-2">
                                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                                        {primaryProfile.title}
                                    </h2>
                                    <Badge
                                        className="px-3 py-1"
                                        style={{
                                            backgroundColor: discColors[primaryType].light,
                                            color: discColors[primaryType].primary
                                        }}
                                    >
                                        Primary Type
                                    </Badge>
                                </div>
                                <p className="text-lg text-slate-600 dark:text-slate-400 mb-4">
                                    {primaryProfile.tagline}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    <Badge variant="outline" className="rounded-full">
                                        {primaryProfile.icon} {discColors[primaryType].name}
                                    </Badge>
                                    <Badge variant="outline" className="rounded-full">
                                        Score: {scores[primaryType]} ({getScoreLevel(scores[primaryType]).level})
                                    </Badge>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Score Cards Grid */}
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-12">
                    {(['D', 'I', 'S', 'C'] as const).map((type) => (
                        <ScoreCard key={type} type={type} score={scores[type]} />
                    ))}
                </div>

                {/* Charts Section */}
                <div className="grid gap-8 lg:grid-cols-2 mb-12">
                    {/* Chart Card */}
                    <Card className="border-0 shadow-xl">
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <CardTitle>Score Visualization</CardTitle>
                                <div className="flex gap-2">
                                    <Button
                                        variant={chartType === 'bar' ? 'default' : 'outline'}
                                        size="sm"
                                        onClick={() => setChartType('bar')}
                                        className="rounded-full"
                                    >
                                        Bar Chart
                                    </Button>
                                    <Button
                                        variant={chartType === 'radar' ? 'default' : 'outline'}
                                        size="sm"
                                        onClick={() => setChartType('radar')}
                                        className="rounded-full"
                                    >
                                        Radar Chart
                                    </Button>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            {chartType === 'bar' ? (
                                <DISCBarChart scores={scores} />
                            ) : (
                                <DISCRadarChart scores={scores} />
                            )}
                        </CardContent>
                    </Card>

                    {/* Score Table */}
                    <Card className="border-0 shadow-xl">
                        <CardHeader>
                            <CardTitle>Detailed Score Breakdown</CardTitle>
                            <CardDescription>Your scores across all DISC dimensions</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {rankedTypes.map((type, index) => {
                                    const level = getScoreLevel(scores[type])
                                    const percentage = (scores[type] / 30) * 100

                                    return (
                                        <div key={type} className="space-y-2">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-3">
                                                    <div
                                                        className="flex h-8 w-8 items-center justify-center rounded-lg text-sm font-bold text-white"
                                                        style={{ backgroundColor: discColors[type].primary }}
                                                    >
                                                        {type}
                                                    </div>
                                                    <div>
                                                        <span className="font-medium text-slate-900 dark:text-white">
                                                            {discColors[type].name}
                                                        </span>
                                                        {index === 0 && (
                                                            <Badge className="ml-2 text-xs" variant="outline">Primary</Badge>
                                                        )}
                                                        {index === 1 && (
                                                            <Badge className="ml-2 text-xs" variant="outline">Secondary</Badge>
                                                        )}
                                                        {index === 2 && (
                                                            <Badge className="ml-2 text-xs" variant="outline">Tertiary</Badge>
                                                        )}
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <span className="font-bold text-slate-900 dark:text-white">{scores[type]}</span>
                                                    <span className="text-sm text-slate-500 dark:text-slate-400"> / 30</span>
                                                    <p className="text-xs text-slate-500">{level.level}</p>
                                                </div>
                                            </div>
                                            <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                                                <div
                                                    className="h-full rounded-full transition-all duration-700 ease-out"
                                                    style={{
                                                        width: `${percentage}%`,
                                                        backgroundColor: discColors[type].primary
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Career Recommendations */}
                <div className="mb-12">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2">
                            Top Career Matches
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400">
                            Based on your DISC profile, here are careers that align with your natural tendencies
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3">
                        {topCareers.map((career, index) => (
                            <Card
                                key={index}
                                className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                            >
                                <CardContent className="p-6">
                                    <div className="flex items-start justify-between mb-4">
                                        <div
                                            className="flex h-14 w-14 items-center justify-center rounded-2xl text-2xl shadow-lg"
                                            style={{ backgroundColor: discColors[career.type].light }}
                                        >
                                            {career.icon}
                                        </div>
                                        <Badge
                                            className="rounded-full"
                                            style={{
                                                backgroundColor: discColors[career.type].light,
                                                color: discColors[career.type].primary
                                            }}
                                        >
                                            #{career.rank} Match
                                        </Badge>
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                                        {career.title}
                                    </h3>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                                        {career.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {career.skills.map((skill, skillIndex) => (
                                            <Badge
                                                key={skillIndex}
                                                variant="outline"
                                                className="rounded-full text-xs"
                                            >
                                                {skill}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Personality Summary */}
                <Card className="border-0 shadow-xl mb-12">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-3">
                            <span
                                className="flex h-10 w-10 items-center justify-center rounded-xl text-lg"
                                style={{
                                    backgroundColor: discColors[primaryType].light,
                                    color: discColors[primaryType].primary
                                }}
                            >
                                {primaryProfile.icon}
                            </span>
                            Personality Summary
                        </CardTitle>
                        <CardDescription>Understanding your {primaryProfile.title} profile</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                            {primaryProfile.description}
                        </p>

                        <div className="grid gap-6 md:grid-cols-2">
                            <div>
                                <h4 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                                    <span className="text-emerald-500">✦</span> Core Strengths
                                </h4>
                                <ul className="space-y-2">
                                    {primaryProfile.coreStrengths.slice(0, 4).map((strength, index) => (
                                        <li key={index} className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                                            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                            {strength}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                                    <span className="text-amber-500">✦</span> Development Areas
                                </h4>
                                <ul className="space-y-2">
                                    {primaryProfile.developmentAreas.slice(0, 4).map((area, index) => (
                                        <li key={index} className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                                            <div className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                                            {area}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* CTA Section */}
                <div className="text-center">
                    <Card className="border-0 bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-2xl">
                        <CardContent className="p-8">
                            <h3 className="text-2xl font-bold mb-3">
                                Ready for Your Complete Report?
                            </h3>
                            <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
                                Get a comprehensive PDF-style report with detailed personality insights,
                                career recommendations, and an action plan for personal growth.
                            </p>
                            <Link href="/report">
                                <Button
                                    size="lg"
                                    className="rounded-full bg-white text-indigo-600 hover:bg-indigo-50 px-8 py-6 text-lg font-semibold shadow-lg"
                                >
                                    View Full Report
                                    <span className="ml-2">→</span>
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* Footer */}
            <footer className="relative z-10 border-t border-slate-200 dark:border-slate-800 py-8 mt-12">
                <div className="mx-auto max-w-7xl px-6 text-center">
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                        © 2025 DISC Personality Assessment. Results are for guidance purposes only.
                    </p>
                </div>
            </footer>
        </div>
    )
}
