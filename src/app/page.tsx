import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { discColors } from "@/lib/disc-data"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-br from-red-500/10 to-orange-500/10 blur-3xl" />
          <div className="absolute top-20 -left-40 h-80 w-80 rounded-full bg-gradient-to-br from-blue-500/10 to-cyan-500/10 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 h-60 w-60 rounded-full bg-gradient-to-br from-green-500/10 to-emerald-500/10 blur-3xl" />
          <div className="absolute bottom-20 left-1/4 h-60 w-60 rounded-full bg-gradient-to-br from-yellow-500/10 to-amber-500/10 blur-3xl" />
        </div>

        <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white font-bold shadow-lg">
              D
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
              DISC Assessment
            </span>
          </div>
          <Link href="/assessment">
            <Button variant="outline" className="rounded-full px-6">
              Start Assessment
            </Button>
          </Link>
        </nav>

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:py-32">
          <div className="mx-auto max-w-4xl text-center">
            {/* Badge */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700 dark:border-indigo-800 dark:bg-indigo-950 dark:text-indigo-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-500"></span>
              </span>
              Personality Assessment for Students
            </div>

            {/* Main heading */}
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
              Discover Your{" "}
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                DISC Personality
              </span>
              <br />& Career Direction
            </h1>

            <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Take our comprehensive 30-question assessment to understand your behavioral style,
              unlock your strengths, and discover career paths that align with your natural tendencies.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/assessment">
                <Button
                  size="lg"
                  className="group relative overflow-hidden rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-6 text-lg font-semibold shadow-lg shadow-indigo-500/25 transition-all hover:shadow-xl hover:shadow-indigo-500/30"
                >
                  <span className="relative z-10">Start Assessment</span>
                  <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
                  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 transition-opacity group-hover:opacity-100" />
                </Button>
              </Link>
              <a href="#learn-more">
                <Button variant="ghost" size="lg" className="rounded-full px-8 py-6 text-lg">
                  Learn More
                </Button>
              </a>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-3 gap-8 border-t border-slate-200 dark:border-slate-800 pt-10">
              <div>
                <p className="text-3xl font-bold text-slate-900 dark:text-white">30</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">Questions</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-slate-900 dark:text-white">4</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">Personality Styles</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-slate-900 dark:text-white">12</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">Career Matches</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* DISC Types Section */}
      <section id="learn-more" className="py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl mb-4">
              The Four DISC Personality Styles
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Understanding these behavioral patterns helps you leverage your strengths and work effectively with others.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Dominance Card */}
            <Card className="group relative overflow-hidden border-0 bg-white dark:bg-slate-900 shadow-lg shadow-slate-200/50 dark:shadow-slate-950/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent" />
              <CardContent className="relative p-6">
                <div
                  className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl text-2xl font-bold text-white shadow-lg"
                  style={{ backgroundColor: discColors.D.primary }}
                >
                  D
                </div>
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">Dominance</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  <span className="font-medium text-red-600 dark:text-red-400">Results-oriented</span> individuals who are direct, decisive, and focused on achieving goals. They thrive under pressure.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-red-100 dark:bg-red-900/30 px-3 py-1 text-xs font-medium text-red-700 dark:text-red-300">Leader</span>
                  <span className="rounded-full bg-red-100 dark:bg-red-900/30 px-3 py-1 text-xs font-medium text-red-700 dark:text-red-300">Decisive</span>
                  <span className="rounded-full bg-red-100 dark:bg-red-900/30 px-3 py-1 text-xs font-medium text-red-700 dark:text-red-300">Direct</span>
                </div>
              </CardContent>
            </Card>

            {/* Influence Card */}
            <Card className="group relative overflow-hidden border-0 bg-white dark:bg-slate-900 shadow-lg shadow-slate-200/50 dark:shadow-slate-950/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent" />
              <CardContent className="relative p-6">
                <div
                  className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl text-2xl font-bold text-white shadow-lg"
                  style={{ backgroundColor: discColors.I.primary }}
                >
                  I
                </div>
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">Influence</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  <span className="font-medium text-amber-600 dark:text-amber-400">People-oriented</span> individuals who are enthusiastic, optimistic, and love collaboration. They excel at inspiring others.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-amber-100 dark:bg-amber-900/30 px-3 py-1 text-xs font-medium text-amber-700 dark:text-amber-300">Inspiring</span>
                  <span className="rounded-full bg-amber-100 dark:bg-amber-900/30 px-3 py-1 text-xs font-medium text-amber-700 dark:text-amber-300">Social</span>
                  <span className="rounded-full bg-amber-100 dark:bg-amber-900/30 px-3 py-1 text-xs font-medium text-amber-700 dark:text-amber-300">Creative</span>
                </div>
              </CardContent>
            </Card>

            {/* Steadiness Card */}
            <Card className="group relative overflow-hidden border-0 bg-white dark:bg-slate-900 shadow-lg shadow-slate-200/50 dark:shadow-slate-950/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent" />
              <CardContent className="relative p-6">
                <div
                  className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl text-2xl font-bold text-white shadow-lg"
                  style={{ backgroundColor: discColors.S.primary }}
                >
                  S
                </div>
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">Steadiness</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  <span className="font-medium text-emerald-600 dark:text-emerald-400">Stability-oriented</span> individuals who are patient, reliable, and team-focused. They create harmony and consistency.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-emerald-100 dark:bg-emerald-900/30 px-3 py-1 text-xs font-medium text-emerald-700 dark:text-emerald-300">Reliable</span>
                  <span className="rounded-full bg-emerald-100 dark:bg-emerald-900/30 px-3 py-1 text-xs font-medium text-emerald-700 dark:text-emerald-300">Patient</span>
                  <span className="rounded-full bg-emerald-100 dark:bg-emerald-900/30 px-3 py-1 text-xs font-medium text-emerald-700 dark:text-emerald-300">Supportive</span>
                </div>
              </CardContent>
            </Card>

            {/* Conscientiousness Card */}
            <Card className="group relative overflow-hidden border-0 bg-white dark:bg-slate-900 shadow-lg shadow-slate-200/50 dark:shadow-slate-950/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent" />
              <CardContent className="relative p-6">
                <div
                  className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl text-2xl font-bold text-white shadow-lg"
                  style={{ backgroundColor: discColors.C.primary }}
                >
                  C
                </div>
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">Conscientiousness</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  <span className="font-medium text-blue-600 dark:text-blue-400">Quality-oriented</span> individuals who are analytical, precise, and systematic. They ensure accuracy and high standards.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-xs font-medium text-blue-700 dark:text-blue-300">Analytical</span>
                  <span className="rounded-full bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-xs font-medium text-blue-700 dark:text-blue-300">Precise</span>
                  <span className="rounded-full bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-xs font-medium text-blue-700 dark:text-blue-300">Systematic</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl mb-4">
              How It Works
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Complete the assessment in three simple steps and receive your personalized results.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Step 1 */}
            <div className="relative">
              <div className="absolute left-12 top-20 hidden h-0.5 w-full bg-gradient-to-r from-indigo-500 to-purple-500 md:block" />
              <div className="relative flex flex-col items-center text-center">
                <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-3xl font-bold text-white shadow-lg shadow-indigo-500/30">
                  1
                </div>
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">Take the Assessment</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Answer 30 carefully crafted questions about your preferences and behaviors in various situations.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="absolute left-12 top-20 hidden h-0.5 w-full bg-gradient-to-r from-purple-500 to-pink-500 md:block" />
              <div className="relative flex flex-col items-center text-center">
                <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 text-3xl font-bold text-white shadow-lg shadow-purple-500/30">
                  2
                </div>
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">Get Your Profile</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Receive instant results with detailed insights about your personality type and behavioral tendencies.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative flex flex-col items-center text-center">
              <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-rose-600 text-3xl font-bold text-white shadow-lg shadow-pink-500/30">
                3
              </div>
              <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">Explore Careers</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Discover career paths that align with your strengths and download a comprehensive report.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <Link href="/assessment">
              <Button
                size="lg"
                className="rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-6 text-lg font-semibold shadow-lg shadow-indigo-500/25"
              >
                Begin Your Journey
                <span className="ml-2">→</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl mb-4">
              Who Is This For?
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Our DISC assessment is designed for students and educational professionals seeking career clarity.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-0 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/50 dark:to-purple-950/50 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-3xl shadow-lg">
                  🎓
                </div>
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">High School Students</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Discover your strengths before choosing college majors and future career paths.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/50 dark:to-pink-950/50 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 text-3xl shadow-lg">
                  📚
                </div>
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">College Students</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Align your career aspirations with your natural behavioral tendencies for better job fit.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-950/50 dark:to-rose-950/50 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-rose-600 text-3xl shadow-lg">
                  🧭
                </div>
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">Career Counselors</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Use data-driven insights to guide students toward fulfilling career choices.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 text-sm font-bold text-white">
                D
              </div>
              <span className="font-semibold text-slate-900 dark:text-white">DISC Assessment</span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              © 2025 DISC Personality Assessment. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
