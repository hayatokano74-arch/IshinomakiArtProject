import type { Metadata } from 'next'

import './globals.css'

export const metadata: Metadata = {
  title: 'サイト名',
  description: 'サイトの説明',
}

export function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
