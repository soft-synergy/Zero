import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import StoreHydration from '@/components/StoreHydration/StoreHydration'
import { PAGE_META } from '@/lib/quiz-config'
import './globals.css'

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-dm-sans',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
})

export const metadata: Metadata = {
  title: PAGE_META.title,
  description: PAGE_META.description,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
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
