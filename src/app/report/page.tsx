"use client"

import { useEffect, useState, useRef } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DISCBarChart } from "@/components/charts/disc-charts"
import {
    DISCScores,
    DISCType,
    discColors,
    personalityProfiles,
    careerRecommendations,
    getScoreLevel
} from "@/lib/disc-data"

export default function ReportPage() {
    const router = useRouter()
    const reportRef = useRef<HTMLDivElement>(null)
    const [scores, setScores] = useState<DISCScores | null>(null)
    const [rankedTypes, setRankedTypes] = useState<DISCType[]>([])
    const [isLoaded, setIsLoaded] = useState(false)
    const [isPrinting, setIsPrinting] = useState(false)

    useEffect(() => {
        const storedScores = sessionStorage.getItem('discScores')
        const storedRankedTypes = sessionStorage.getItem('discRankedTypes')

        if (storedScores && storedRankedTypes) {
            setScores(JSON.parse(storedScores))
            setRankedTypes(JSON.parse(storedRankedTypes))
            setIsLoaded(true)
        } else {
            router.push('/assessment')
        }
    }, [router])

    const handlePrint = () => {
        setIsPrinting(true)
        setTimeout(() => {
            window.print()
            setIsPrinting(false)
        }, 100)
    }

    if (!isLoaded || !scores) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
                    <p className="text-slate-600 dark:text-slate-400">Loading your report...</p>
                </div>
            </div>
        )
    }

    const primaryType = rankedTypes[0]
    const secondaryType = rankedTypes[1]
    const tertiaryType = rankedTypes[2]
    const primaryProfile = personalityProfiles[primaryType]
    const secondaryProfile = personalityProfiles[secondaryType]

    const currentDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })

    // Get all career recommendations
    const allCareers = rankedTypes.slice(0, 3).flatMap((type) =>
        careerRecommendations[type].map(career => ({ ...career, type }))
    )

    return (
        <>
            {/* Print Styles */}
            <style jsx global>{`
        @media print {
          body {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .no-print {
            display: none !important;
          }
          .print-break {
            page-break-before: always;
          }
        }
      `}</style>

            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
                {/* Header - No Print */}
                <header className="no-print relative z-10 border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg sticky top-0">
                    <div className="mx-auto max-w-5xl px-6 py-4">
                        <div className="flex items-center justify-between">
                            <Link href="/" className="flex items-center gap-2">
                                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 text-sm font-bold text-white">
                                    D
                                </div>
                                <span className="font-semibold text-slate-900 dark:text-white">DISC Assessment</span>
                            </Link>
                            <div className="flex items-center gap-3">
                                <Button
                                    variant="outline"
                                    className="rounded-full gap-2"
                                    onClick={handlePrint}
                                    disabled={isPrinting}
                                >
                                    {isPrinting ? (
                                        <>
                                            <span className="animate-spin">⏳</span>
                                            Preparing...
                                        </>
                                    ) : (
                                        <>
                                            📄 Download PDF
                                        </>
                                    )}
                                </Button>
                                <Link href="/results">
                                    <Button variant="ghost" className="rounded-full">
                                        Back to Dashboard
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Report Content */}
                <div ref={reportRef} className="mx-auto max-w-5xl px-6 py-12">
                    {/* Report Header */}
                    <div className="text-center mb-12 pb-8 border-b border-slate-200 dark:border-slate-800">
                        <div className="inline-flex items-center justify-center gap-3 mb-6">
                            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-2xl font-bold text-white shadow-lg">
                                D
                            </div>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">
                            DISC Personality Assessment Report
                        </h1>
                        <p className="text-slate-600 dark:text-slate-400">
                            Comprehensive Behavioral Analysis & Career Guidance
                        </p>
                        <p className="text-sm text-slate-500 dark:text-slate-500 mt-4">
                            Generated on {currentDate}
                        </p>
                    </div>

                    {/* Profile Overview */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400">
                                1
                            </span>
                            Profile Overview
                        </h2>

                        <Card className="border-0 shadow-xl overflow-hidden">
                            <div
                                className="h-2"
                                style={{ background: `linear-gradient(to right, ${discColors[primaryType].primary}, ${discColors[secondaryType].primary}, ${discColors[tertiaryType].primary})` }}
                            />
                            <CardContent className="p-8">
                                <div className="grid md:grid-cols-3 gap-6">
                                    {/* Primary Type */}
                                    <div className="text-center">
                                        <div
                                            className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl text-3xl font-bold text-white shadow-lg"
                                            style={{ backgroundColor: discColors[primaryType].primary }}
                                        >
                                            {primaryType}
                                        </div>
                                        <Badge
                                            className="mb-2"
                                            style={{
                                                backgroundColor: discColors[primaryType].light,
                                                color: discColors[primaryType].primary
                                            }}
                                        >
                                            Primary Type
                                        </Badge>
                                        <h3 className="font-bold text-slate-900 dark:text-white">
                                            {primaryProfile.title}
                                        </h3>
                                        <p className="text-2xl font-bold" style={{ color: discColors[primaryType].primary }}>
                                            {scores[primaryType]} / 30
                                        </p>
                                        <p className="text-sm text-slate-500">{getScoreLevel(scores[primaryType]).level}</p>
                                    </div>

                                    {/* Secondary Type */}
                                    <div className="text-center">
                                        <div
                                            className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl text-3xl font-bold text-white shadow-lg"
                                            style={{ backgroundColor: discColors[secondaryType].primary }}
                                        >
                                            {secondaryType}
                                        </div>
                                        <Badge
                                            className="mb-2"
                                            style={{
                                                backgroundColor: discColors[secondaryType].light,
                                                color: discColors[secondaryType].primary
                                            }}
                                        >
                                            Secondary Type
                                        </Badge>
                                        <h3 className="font-bold text-slate-900 dark:text-white">
                                            {secondaryProfile.title}
                                        </h3>
                                        <p className="text-2xl font-bold" style={{ color: discColors[secondaryType].primary }}>
                                            {scores[secondaryType]} / 30
                                        </p>
                                        <p className="text-sm text-slate-500">{getScoreLevel(scores[secondaryType]).level}</p>
                                    </div>

                                    {/* Tertiary Type */}
                                    <div className="text-center">
                                        <div
                                            className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl text-3xl font-bold text-white shadow-lg"
                                            style={{ backgroundColor: discColors[tertiaryType].primary }}
                                        >
                                            {tertiaryType}
                                        </div>
                                        <Badge
                                            className="mb-2"
                                            style={{
                                                backgroundColor: discColors[tertiaryType].light,
                                                color: discColors[tertiaryType].primary
                                            }}
                                        >
                                            Tertiary Type
                                        </Badge>
                                        <h3 className="font-bold text-slate-900 dark:text-white">
                                            {personalityProfiles[tertiaryType].title}
                                        </h3>
                                        <p className="text-2xl font-bold" style={{ color: discColors[tertiaryType].primary }}>
                                            {scores[tertiaryType]} / 30
                                        </p>
                                        <p className="text-sm text-slate-500">{getScoreLevel(scores[tertiaryType]).level}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </section>

                    {/* Score Visualization */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400">
                                2
                            </span>
                            Score Visualization
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            <Card className="border-0 shadow-xl">
                                <CardHeader>
                                    <CardTitle>DISC Score Distribution</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <DISCBarChart scores={scores} />
                                </CardContent>
                            </Card>

                            <Card className="border-0 shadow-xl">
                                <CardHeader>
                                    <CardTitle>Score Breakdown</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <table className="w-full">
                                        <thead>
                                            <tr className="border-b border-slate-200 dark:border-slate-800">
                                                <th className="text-left py-3 font-semibold text-slate-900 dark:text-white">Type</th>
                                                <th className="text-center py-3 font-semibold text-slate-900 dark:text-white">Score</th>
                                                <th className="text-center py-3 font-semibold text-slate-900 dark:text-white">Level</th>
                                                <th className="text-right py-3 font-semibold text-slate-900 dark:text-white">Rank</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {rankedTypes.map((type, index) => (
                                                <tr key={type} className="border-b border-slate-100 dark:border-slate-800">
                                                    <td className="py-3">
                                                        <div className="flex items-center gap-3">
                                                            <div
                                                                className="h-8 w-8 rounded-lg flex items-center justify-center text-white font-bold text-sm"
                                                                style={{ backgroundColor: discColors[type].primary }}
                                                            >
                                                                {type}
                                                            </div>
                                                            <span className="text-slate-700 dark:text-slate-300">
                                                                {discColors[type].name}
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td className="text-center py-3 font-bold" style={{ color: discColors[type].primary }}>
                                                        {scores[type]} / 30
                                                    </td>
                                                    <td className="text-center py-3">
                                                        <Badge variant="outline">{getScoreLevel(scores[type]).level}</Badge>
                                                    </td>
                                                    <td className="text-right py-3 text-slate-500">
                                                        #{index + 1}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    {/* Personality Description */}
                    <section className="mb-12 print-break">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400">
                                3
                            </span>
                            Personality Description
                        </h2>

                        <Card className="border-0 shadow-xl">
                            <CardContent className="p-8">
                                <div className="flex items-center gap-4 mb-6">
                                    <div
                                        className="flex h-16 w-16 items-center justify-center rounded-2xl text-3xl font-bold text-white"
                                        style={{ backgroundColor: discColors[primaryType].primary }}
                                    >
                                        {primaryType}
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                                            {primaryProfile.title}
                                        </h3>
                                        <p className="text-slate-600 dark:text-slate-400">{primaryProfile.tagline}</p>
                                    </div>
                                </div>

                                <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-8 text-lg">
                                    {primaryProfile.description}
                                </p>

                                <div className="grid md:grid-cols-2 gap-8">
                                    {/* Core Strengths */}
                                    <div>
                                        <h4 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                                            <span className="text-emerald-500 text-xl">💪</span> Core Strengths
                                        </h4>
                                        <ul className="space-y-3">
                                            {primaryProfile.coreStrengths.map((strength, index) => (
                                                <li key={index} className="flex items-start gap-3">
                                                    <div className="mt-1.5 h-2 w-2 rounded-full bg-emerald-500 shrink-0" />
                                                    <span className="text-slate-600 dark:text-slate-400">{strength}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Natural Behaviors */}
                                    <div>
                                        <h4 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                                            <span className="text-blue-500 text-xl">🎯</span> Natural Behaviors
                                        </h4>
                                        <ul className="space-y-3">
                                            {primaryProfile.naturalBehaviors.map((behavior, index) => (
                                                <li key={index} className="flex items-start gap-3">
                                                    <div className="mt-1.5 h-2 w-2 rounded-full bg-blue-500 shrink-0" />
                                                    <span className="text-slate-600 dark:text-slate-400">{behavior}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </section>

                    {/* Communication & Stress */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400">
                                4
                            </span>
                            Communication & Stress Patterns
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            <Card className="border-0 shadow-xl">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <span className="text-xl">💬</span> Communication Style
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                        {primaryProfile.communicationStyle}
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="border-0 shadow-xl">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <span className="text-xl">⚠️</span> Stress Behavior
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                        {primaryProfile.stressBehavior}
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    {/* Development Areas */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400">
                                5
                            </span>
                            Development Areas
                        </h2>

                        <Card className="border-0 shadow-xl">
                            <CardContent className="p-8">
                                <p className="text-slate-600 dark:text-slate-400 mb-6">
                                    While your DISC profile highlights many strengths, focusing on these development areas
                                    will help you become more well-rounded and effective in various situations.
                                </p>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {primaryProfile.developmentAreas.map((area, index) => (
                                        <div
                                            key={index}
                                            className="flex items-start gap-3 p-4 rounded-xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800"
                                        >
                                            <span className="text-amber-500 text-lg">📌</span>
                                            <span className="text-slate-700 dark:text-slate-300">{area}</span>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </section>

                    {/* Career Recommendations */}
                    <section className="mb-12 print-break">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400">
                                6
                            </span>
                            Career Recommendations
                        </h2>

                        <p className="text-slate-600 dark:text-slate-400 mb-6">
                            Based on your DISC profile, the following careers align with your natural behavioral tendencies.
                            These are organized by your primary, secondary, and tertiary personality types.
                        </p>

                        {rankedTypes.slice(0, 3).map((type, typeIndex) => (
                            <div key={type} className="mb-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <div
                                        className="h-8 w-8 rounded-lg flex items-center justify-center text-white font-bold"
                                        style={{ backgroundColor: discColors[type].primary }}
                                    >
                                        {type}
                                    </div>
                                    <h3 className="font-bold text-slate-900 dark:text-white">
                                        {discColors[type].name} Careers
                                        <span className="ml-2 text-sm font-normal text-slate-500">
                                            ({typeIndex === 0 ? 'Primary' : typeIndex === 1 ? 'Secondary' : 'Tertiary'})
                                        </span>
                                    </h3>
                                </div>

                                <div className="grid md:grid-cols-3 gap-4">
                                    {careerRecommendations[type].map((career, index) => (
                                        <Card key={index} className="border shadow-sm">
                                            <CardContent className="p-5">
                                                <div className="flex items-center gap-3 mb-3">
                                                    <span className="text-2xl">{career.icon}</span>
                                                    <h4 className="font-semibold text-slate-900 dark:text-white">
                                                        {career.title}
                                                    </h4>
                                                </div>
                                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                                                    {career.description}
                                                </p>
                                                <div className="flex flex-wrap gap-1">
                                                    {career.skills.map((skill, skillIndex) => (
                                                        <Badge key={skillIndex} variant="outline" className="text-xs">
                                                            {skill}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </section>

                    {/* Action Plan */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400">
                                7
                            </span>
                            Action Plan for Growth
                        </h2>

                        <Card className="border-0 shadow-xl bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30">
                            <CardContent className="p-8">
                                <p className="text-slate-700 dark:text-slate-300 mb-6">
                                    Based on your {primaryProfile.title} profile, here&apos;s a personalized action plan to maximize
                                    your strengths and address development areas:
                                </p>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500 text-white font-bold">
                                            1
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 dark:text-white mb-1">
                                                Leverage Your Strengths
                                            </h4>
                                            <p className="text-slate-600 dark:text-slate-400">
                                                Your {discColors[primaryType].name.toLowerCase()} trait is your superpower.
                                                Seek opportunities where {primaryProfile.coreStrengths[0].toLowerCase()} and
                                                {" "}{primaryProfile.coreStrengths[1].toLowerCase()} are valued.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500 text-white font-bold">
                                            2
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 dark:text-white mb-1">
                                                Build Complementary Skills
                                            </h4>
                                            <p className="text-slate-600 dark:text-slate-400">
                                                Focus on developing skills from your secondary type ({discColors[secondaryType].name}).
                                                This will make you more versatile in team settings and leadership roles.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500 text-white font-bold">
                                            3
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 dark:text-white mb-1">
                                                Address Development Areas
                                            </h4>
                                            <p className="text-slate-600 dark:text-slate-400">
                                                Start with: &quot;{primaryProfile.developmentAreas[0]}&quot;.
                                                Set specific goals and seek feedback from mentors or peers.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-500 text-white font-bold">
                                            4
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 dark:text-white mb-1">
                                                Explore Career Paths
                                            </h4>
                                            <p className="text-slate-600 dark:text-slate-400">
                                                Research the recommended careers above. Connect with professionals in these fields
                                                through networking or informational interviews.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-pink-500 text-white font-bold">
                                            5
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 dark:text-white mb-1">
                                                Seek Ideal Environments
                                            </h4>
                                            <p className="text-slate-600 dark:text-slate-400">
                                                Look for work environments that are {primaryProfile.idealEnvironment.toLowerCase()}.
                                                This is where you&apos;ll naturally thrive.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </section>

                    {/* Footer */}
                    <div className="text-center pt-8 border-t border-slate-200 dark:border-slate-800">
                        <p className="text-sm text-slate-500 dark:text-slate-500 mb-4">
                            This report is generated based on your DISC assessment responses.
                            Results are for career guidance purposes and should be used alongside other career exploration tools.
                        </p>
                        <p className="text-xs text-slate-400">
                            © 2025 DISC Personality Assessment | Generated on {currentDate}
                        </p>
                    </div>

                    {/* Print CTA - No Print */}
                    <div className="no-print mt-12 text-center">
                        <Card className="border-0 bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-2xl">
                            <CardContent className="p-8">
                                <h3 className="text-2xl font-bold mb-3">
                                    Save Your Report
                                </h3>
                                <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
                                    Download this comprehensive report as a PDF to share with career counselors,
                                    keep for future reference, or include in your career portfolio.
                                </p>
                                <Button
                                    size="lg"
                                    className="rounded-full bg-white text-indigo-600 hover:bg-indigo-50 px-8 py-6 text-lg font-semibold shadow-lg"
                                    onClick={handlePrint}
                                >
                                    📄 Download PDF
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    )
}
