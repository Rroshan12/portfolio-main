export {metadata} from '@/lib/layout-config'
import {sfProDisplay} from '@/lib/layout-config'

import '@/app/globals.css'
import {cn} from '@/lib/utils'

import {SpeedInsights} from '@vercel/speed-insights/next'
import {Analytics as VercelAnalytics} from '@vercel/analytics/react'

import Header from '~/Global/Header'
import YandexMetrika from '~/Global/Analytics'
import GraphBackground from '~/Global/GraphBackground'
import Footer from '~/Global/Footer'
import StructuredData from '~/Global/StructuredData'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body className={cn(sfProDisplay.variable, 'space-y-16 sm:space-y-10', 'text-foreground', 'font-sans antialiased')}>
        <GraphBackground />
        <Header />
        {children}

        <Footer />

        {process.env.NODE_ENV === 'production' && (
          <>
            <SpeedInsights />
            <VercelAnalytics />
            <YandexMetrika />
          </>
        )}
      </body>
    </html>
  )
}
