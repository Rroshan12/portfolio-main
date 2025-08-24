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
  
  // Check if the link is a GitHub repository
  const isGitHubRepo = link.includes('github.com')
  
  return (
    <div className="relative group h-full">
      <Link 
        className={cn(
          'relative overflow-hidden group',
          'p-3 flex flex-col h-full',
          'bg-gradient-to-br from-white/5 to-white/10 rounded-xl',
          'border transition-all duration-300',
          'transform hover:rotate-1 hover:scale-[1.02]',
          'transition-all duration-300',
          'cursor-pointer'
        )} 
        style={{
          borderColor: `${color}20` // Very light opacity of the project color
        }}
        href={link} 
        target="_blank" 
        rel="noopener noreferrer"
      >
        {/* Project image/video with enhanced hover effects */}
        <div className="relative overflow-hidden rounded-lg mb-3 flex-shrink-0">
          {isVideo ? (
            <div className="relative">
              {/* Fallback image that shows when video fails */}
              <Image 
                quality={100} 
                src={image} 
                alt={`${name} — ${descriptor}`} 
                className={cn(
                  'w-full h-32 object-cover transition-all duration-500',
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
                height="128"
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
                  'absolute inset-0 w-full h-32 object-cover transition-all duration-500',
                  'opacity-80 group-hover:opacity-100',
                  'group-hover:scale-110',
                  'pointer-events-none'
                )}
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
                'w-full h-32 object-cover transition-all duration-500',
                'opacity-80 group-hover:opacity-100',
                'group-hover:scale-110',
                'pointer-events-none'
              )} 
            />
          )}
          
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          

        </div>

        {/* Project info with modern styling */}
        <div className="flex-1 flex flex-col gap-2 min-h-0">
          <div className="flex items-center gap-2">
            <div 
              className="size-2 rounded-full flex-shrink-0"
              style={{ backgroundColor: color }}
            />
            <SPAN className="text-xs font-medium text-gray-300 uppercase tracking-wider">
              {descriptor}
            </SPAN>
          </div>
          
          <h3 className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors duration-300 line-clamp-2 flex-1 overflow-hidden">
            {name}
          </h3>
        </div>

        {/* Floating action indicator */}
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
          <div className="size-6 rounded-full bg-blue-600/90 backdrop-blur-md border border-blue-500 flex items-center justify-center shadow-lg">
            <svg className="size-3 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </div>
        </div>

        {/* Enhanced gradient background */}
        <Gradient className="opacity-0 group-hover:opacity-100 duration-500" color={color} />
      </Link>

      {/* GitHub Source Code Icon - Positioned at bottom right */}
      {isGitHubRepo && (
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            'absolute bottom-2 right-2',
            'size-8 rounded-full',
            'bg-gradient-to-br from-gray-800/90 to-gray-900/90',
            'border border-gray-600/50',
            'backdrop-blur-md shadow-lg',
            'flex items-center justify-center',
            'hover:scale-110 hover:bg-gradient-to-br hover:from-gray-700/90 hover:to-gray-800/90',
            'hover:border-gray-500/70',
            'transition-all duration-300 ease-out',
            'cursor-pointer',
            'z-10'
          )}
        >
          <svg 
            className="size-4 text-white drop-shadow-lg" 
            fill="currentColor" 
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </Link>
      )}
    </div>
  )
}
