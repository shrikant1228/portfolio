'use client'

import { useEffect } from 'react'

export function Loader({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete()
    }, 2000)

    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background">
      <div className="text-center">
        <div className="text-2xl font-mono text-primary">Loading...</div>
        <div className="mt-4 w-16 h-1 bg-primary/20 rounded-full overflow-hidden">
          <div className="h-full bg-primary animate-pulse" />
        </div>
      </div>
    </div>
  )
}