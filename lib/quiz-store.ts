'use client'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface QuizState {
  answers: Record<number, string | string[]>
  age: string
  gender: 'men' | 'women' | null
  weightUnit: string
  heightUnit: string
  currentStep: number
  direction: 'forward' | 'backward'
  _hydrated: boolean
  setAge: (age: string) => void
  setGender: (g: 'men' | 'women') => void
  setAnswer: (step: number, answer: string | string[]) => void
  setWeightUnit: (unit: string) => void
  setHeightUnit: (unit: string) => void
  setDirection: (d: 'forward' | 'backward') => void
  setCurrentStep: (step: number) => void
  setHydrated: (v: boolean) => void
  reset: () => void
}

export const useQuizStore = create<QuizState>()(
  persist(
    (set) => ({
      answers: {},
      age: '',
      gender: null,
      weightUnit: 'kg',
      heightUnit: 'cm',
      currentStep: 1,
      direction: 'forward',
      _hydrated: false,
      setAge: (age) => set({ age }),
      setGender: (gender) => set({ gender }),
      setAnswer: (step, answer) =>
        set((s) => ({ answers: { ...s.answers, [step]: answer } })),
      setWeightUnit: (weightUnit) => set({ weightUnit }),
      setHeightUnit: (heightUnit) => set({ heightUnit }),
      setDirection: (direction) => set({ direction }),
      setCurrentStep: (currentStep) => set({ currentStep }),
      setHydrated: (v) => set({ _hydrated: v }),
      reset: () => set({ answers: {}, age: '', gender: null, weightUnit: 'kg', heightUnit: 'cm', currentStep: 1, direction: 'forward' }),
    }),
    {
      name: 'quiz-state',
      skipHydration: true,
      onRehydrateStorage: () => (state) => {
        state?.setHydrated(true)
      },
    }
  )
)
