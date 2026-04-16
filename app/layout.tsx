import type { Metadata } from 'next'
import StoreHydration from '@/components/StoreHydration/StoreHydration'
import { PAGE_META } from '@/lib/quiz-config'
import './globals.css'

// Using a system font stack instead of next/font/google to avoid build-time fetch errors (ETIMEDOUT)
const interVariable = "--font-dm-sans";
const interFallback = "Inter, 'DM Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";


export const metadata: Metadata = {
  title: PAGE_META.title,
  description: PAGE_META.description,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" style={{ [interVariable as any]: interFallback }}>
      <head>
        {/* Read lang from localStorage BEFORE React renders — eliminates lang flash on refresh */}
        <script dangerouslySetInnerHTML={{ __html: `
          try {
            var _s = JSON.parse(localStorage.getItem('quiz-lang') || '{}');
            if (_s.state && _s.state.lang) window.__QUIZ_LANG__ = _s.state.lang;
          } catch(e) {}
        `}} />
      </head>
      <body suppressHydrationWarning>
        <StoreHydration />
        {children}
      </body>
    </html>
  )
}
