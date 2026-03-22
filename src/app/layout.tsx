import type { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'

import './globals.css'

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jp',
  weight: ['300', '400', '500', '700'],
})

export const metadata: Metadata = {
  title: 'ISHINOMAKI ART PROJECT',
  description:
    '石巻を拠点に、アート・リサーチ・地域をつなぐプロジェクト。展覧会、ワークショップ、アーティスト・イン・レジデンスなどの活動を行っています。',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={notoSansJP.variable} suppressHydrationWarning>
      <head>
        {/* テーマ初期化 */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t)document.documentElement.setAttribute('data-theme',t)}catch(e){}})()`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
