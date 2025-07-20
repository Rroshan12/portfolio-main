import type {Metadata} from 'next'
import localFont from 'next/font/local'

export const metadata: Metadata = {
  title: {
    default: 'Roshan Poudels — Developer',
    template: '%s — Roshan Poudel',
  },
  description: 'Cloud architect & code wizard Roshan Poudel - AWS Solution Architect certified professional crafting digital symphonies with React, .NET, Node.js, and Red Hat technologies. Transforming caffeine into scalable cloud solutions.',
  keywords: 'Roshan Poudel, AWS Solution Architect, cloud architect, React developer, .NET developer, Node.js developer, Red Hat certified, cloud solutions, web development, software engineer, cloud infrastructure, digital transformation',
  icons: {
    icon: '/roshan1.jpg',
    shortcut: '/roshan1.jpg',
    apple: '/roshan1.jpg',
  },
  openGraph: {
    images: '/roshan1.jpg',
  },
}

export const sfProDisplay = localFont({
  variable: '--font-sf-pro-display',
  src: [
    {
      path: '../assets/fonts/SFProDisplay-Regular.woff2',
      weight: '400',
    },
    {
      path: '../assets/fonts/SFProDisplay-Semibold.woff2',
      weight: '600',
    },
  ],
})
