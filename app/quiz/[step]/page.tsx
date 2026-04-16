'use client'

import { useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'

export default function LegacyQuizStepRedirect() {
  const router = useRouter()
  const params = useParams()
  const step = Array.isArray(params.step) ? params.step[0] : params.step

  useEffect(() => {
    router.replace(`/en/quiz/${step}`)
  }, [router, step])

  return null
}
