import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Roshan Poudel - Top .NET & React Developer in Nepal',
    short_name: 'Roshan Poudel',
    description: 'Leading .NET and React developer in Nepal. AWS Solution Architect certified professional.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/roshan1.jpg',
        sizes: 'any',
        type: 'image/jpeg',
      },
    ],
  }
} 