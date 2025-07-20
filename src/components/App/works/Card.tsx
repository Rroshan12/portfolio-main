'use client'

import {type StaticImageData} from 'next/image'

import {cn} from '@/lib/utils'

import Link from 'next/link'
import Image from 'next/image'
import {SPAN} from '~/UI/Typography'

type Props = {
  name: string
  descriptor: string
  image: StaticImageData
  link: string
  color: string
  videoUrl?: string
}

function Gradient({color, className}: {color?: string; className?: string}) {
  const dye = (color: string, opacity: number) => {
    if (!opacity) return color
    return color + opacity
  }

  const from = color || dye('#2A2A2A', 20)

  return (
    <div
      data-block="gradient"
      className={cn('absolute z-[-25] inset-0 size-full', className)}
      style={{
        background: `radial-gradient(circle at 30% 20%, ${dye(from, 40)} 0%, transparent 50%), linear-gradient(135deg, ${dye(from, 20)} 0%, ${dye(from, 10)} 50%, transparent 100%)`,
      }}
    />
  )
}

export default function Card({name, descriptor, image, link, color, videoUrl}: Props) {
  const isVideo = videoUrl || link.includes('.mp4') || link.includes('.webm') || link.includes('.mov')
  return (
    <Link 
      className={cn(
        'relative overflow-hidden group',
        'p-4 sm:p-3 flex flex-col',
        'bg-gradient-to-br from-white/5 to-white/10 rounded-2xl',
        'border border-foreground/7',
        'transform hover:rotate-1 hover:scale-[1.02]',
        'transition-all duration-500'
      )} 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer"
    >
      {/* Project image/video with enhanced hover effects */}
      <div className="relative overflow-hidden rounded-xl mb-4">
        {isVideo ? (
          <div className="relative">
            {/* Fallback image that shows when video fails */}
            <Image 
              quality={100} 
              src={image} 
              alt={`${name} — ${descriptor}`} 
              className={cn(
                'w-full h-auto transition-all duration-700',
                'opacity-80 group-hover:opacity-100',
                'group-hover:scale-110',
                'pointer-events-none'
              )} 
            />
            
            {/* Video overlay */}
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              preload="metadata"
              width="100%"
              height="auto"
              onError={(e) => {
                console.error('Video error:', e)
                // Hide video element if it fails
                const videoElement = e.target as HTMLVideoElement
                videoElement.style.display = 'none'
              }}
              onLoadStart={() => console.log('Video loading started for:', videoUrl)}
              onCanPlay={() => console.log('Video can play for:', videoUrl)}
              onLoadedData={() => console.log('Video data loaded for:', videoUrl)}
              className={cn(
                'absolute inset-0 w-full h-full object-cover transition-all duration-700',
                'opacity-80 group-hover:opacity-100',
                'group-hover:scale-110',
                'pointer-events-none'
              )}
              style={{
                width: '100%',
                height: 'auto',
                minWidth: '320px',
                maxWidth: '100%'
              }}
            >
              <source src={videoUrl} type="video/mp4" />
              <source src={videoUrl} type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
        ) : (
          <Image 
            quality={100} 
            src={image} 
            alt={`${name} — ${descriptor}`} 
            className={cn(
              'w-full h-auto transition-all duration-700',
              'opacity-80 group-hover:opacity-100',
              'group-hover:scale-110',
              'pointer-events-none'
            )} 
          />
        )}
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        

      </div>

      {/* Project info with modern styling */}
      <div className="flex-1 flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <div 
            className="size-3 rounded-full flex-shrink-0"
            style={{ backgroundColor: color }}
          />
          <SPAN className="text-sm font-medium text-gray-300 uppercase tracking-wider">
            {descriptor}
          </SPAN>
        </div>
        
        <h3 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">
          {name}
        </h3>
      </div>

      {/* Floating action indicator */}
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
        <div className="size-8 rounded-full bg-blue-600/90 backdrop-blur-md border border-blue-500 flex items-center justify-center shadow-xl">
          <svg className="size-4 text-white drop-shadow-xl" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </div>
      </div>

      {/* Enhanced gradient background */}
      <Gradient className="opacity-0 group-hover:opacity-100 duration-700" color={color} />
    </Link>
  )
}
