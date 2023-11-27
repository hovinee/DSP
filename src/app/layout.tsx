import Header from '@layout/header/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Noto_Sans_KR } from 'next/font/google'
import Footer from '@layout/footer/Footer'

export const metadata: Metadata = {
  title: 'LaB KID Industry',
  description: '듀코젠 산업 메타버스 기반 랩키드 시리즈',
  icons: {
    icon: '/favicon.ico',
  },
}

const notoSansKr = Noto_Sans_KR({
  // preload: true, 기본값
  subsets: ['latin'], // 또는 preload: false
  weight: ['100', '400', '700', '900'], // 가변 폰트가 아닌 경우, 사용할 fontWeight 배열
  display: 'swap',
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`flex flex-col bg-black ${notoSansKr.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
