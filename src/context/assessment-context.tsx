"use client"

import React, { createContext, useContext, useState, ReactNode } from 'react'
import { DISCScores, DISCType, calculateScores, getRankedTypes } from '@/lib/disc-data'

interface StudentInfo {
    name: string
    email: string
    institution: string
    course: string
}

interface AssessmentContextType {
    // Student info
    studentInfo: StudentInfo
    setStudentInfo: (info: StudentInfo) => void

    // Assessment answers
    answers: Record<number, DISCType>
    setAnswer: (questionId: number, answer: DISCType) => void
    clearAnswers: () => void

    // Calculated results
    scores: DISCScores | null
    rankedTypes: DISCType[]

    // Assessment state
    isComplete: boolean
    calculateResults: () => void
    resetAssessment: () => void
}

const AssessmentContext = createContext<AssessmentContextType | undefined>(undefined)

export function AssessmentProvider({ children }: { children: ReactNode }) {
    const [studentInfo, setStudentInfo] = useState<StudentInfo>({
        name: '',
        email: '',
        institution: '',
        course: '',
    })

    const [answers, setAnswers] = useState<Record<number, DISCType>>({})
    const [scores, setScores] = useState<DISCScores | null>(null)
    const [rankedTypes, setRankedTypes] = useState<DISCType[]>([])
    const [isComplete, setIsComplete] = useState(false)

    const setAnswer = (questionId: number, answer: DISCType) => {
        setAnswers(prev => ({ ...prev, [questionId]: answer }))
    }

    const clearAnswers = () => {
        setAnswers({})
        setScores(null)
        setRankedTypes([])
        setIsComplete(false)
    }

    const calculateResults = () => {
        if (Object.keys(answers).length === 30) {
            const calculatedScores = calculateScores(answers)
            const ranked = getRankedTypes(calculatedScores)

            setScores(calculatedScores)
            setRankedTypes(ranked)
            setIsComplete(true)
        }
    }

    const resetAssessment = () => {
        setStudentInfo({ name: '', email: '', institution: '', course: '' })
        clearAnswers()
    }

    return (
        <AssessmentContext.Provider
            value={{
                studentInfo,
                setStudentInfo,
                answers,
                setAnswer,
                clearAnswers,
                scores,
                rankedTypes,
                isComplete,
                calculateResults,
                resetAssessment,
            }}
        >
            {children}
        </AssessmentContext.Provider>
    )
}

export function useAssessment() {
    const context = useContext(AssessmentContext)
    if (context === undefined) {
        throw new Error('useAssessment must be used within an AssessmentProvider')
    }
    return context
}
