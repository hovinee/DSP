import Header from '@layout/header/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Noto_Sans_KR } from 'next/font/google'
import Footer from '@layout/footer/Footer'
import { headers } from 'next/headers'
import { detectDevice } from '@utils/method'
import clsx from 'clsx'
import DeviceProvider from '@contexts/DeviceProvider'
import AuthProvider from '@contexts/AuthProvider'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.labkid-industry.com/'),
  title: 'LaB KID Industry',
  description: '듀코젠 산업 메타버스 기반 랩키드 시리즈',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    images: '/images/main_banner.png',
  },
}

const notoSansKr = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['100', '400', '700', '900'],
  display: 'swap',
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const requestHeaders = headers()
  const userAgent = requestHeaders.get('user-agent')
  const deviceInfo = detectDevice(userAgent!)

  return (
    <html lang="en">
      <body className={clsx('flex flex-col bg-black', notoSansKr.className)}>
        <AuthProvider>
          <DeviceProvider deviceInfo={deviceInfo}>
            <Header />
            {children}
            <Footer />
          </DeviceProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
