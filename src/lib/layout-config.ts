import type {Metadata} from 'next'
import localFont from 'next/font/local'

export const metadata: Metadata = {
  title: {
    default: 'Roshan Poudel - Top .NET & React Developer in Nepal | AWS Solution Architect',
    template: '%s | Roshan Poudel - Top Developer in Nepal',
  },
  description: 'Roshan Poudel - Leading .NET and React developer in Nepal. AWS Solution Architect certified professional specializing in cloud architecture, React development, .NET applications, and Node.js solutions. Expert in Red Hat technologies and cloud infrastructure.',
  keywords: [
    'Roshan Poudel',
    'top dotnet developers in nepal',
    'top react developers in nepal', 
    'best .NET developer nepal',
    'best React developer nepal',
    'AWS Solution Architect nepal',
    'cloud architect nepal',
    'React developer nepal',
    '.NET developer nepal',
    'Node.js developer nepal',
    'Red Hat certified nepal',
    'cloud solutions nepal',
    'web development nepal',
    'software engineer nepal',
    'cloud infrastructure nepal',
    'digital transformation nepal',
    'full stack developer nepal',
    'backend developer nepal',
    'frontend developer nepal',
    'devops engineer nepal'
  ].join(', '),
  authors: [{ name: 'Roshan Poudel' }],
  creator: 'Roshan Poudel',
  publisher: 'Roshan Poudel',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification code
  },
  alternates: {
    canonical: 'https://roshanpoudel.com', // Replace with your actual domain
  },
  icons: {
    icon: '/roshan1.jpg',
    shortcut: '/roshan1.jpg',
    apple: '/roshan1.jpg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://roshanpoudel.com', // Replace with your actual domain
    title: 'Roshan Poudel - Top .NET & React Developer in Nepal | AWS Solution Architect',
    description: 'Leading .NET and React developer in Nepal. AWS Solution Architect certified professional specializing in cloud architecture and modern web development.',
    siteName: 'Roshan Poudel Portfolio',
    images: [
      {
        url: '/roshan1.jpg',
        width: 1200,
        height: 630,
        alt: 'Roshan Poudel - Top Developer in Nepal',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roshan Poudel - Top .NET & React Developer in Nepal',
    description: 'Leading .NET and React developer in Nepal. AWS Solution Architect certified professional.',
    images: ['/roshan1.jpg'],
    creator: '@roshanpoudel', // Replace with your Twitter handle
  },
  other: {
    'geo.region': 'NP',
    'geo.placename': 'Nepal',
    'geo.position': '27.7172;85.3240', // Kathmandu coordinates
    'ICBM': '27.7172, 85.3240',
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
