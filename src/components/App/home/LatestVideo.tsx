'use client'

import { cn } from '@/lib/utils'
import Block from '~/UI/Block'
import { SPAN } from '~/UI/Typography'
import Image from 'next/image'

export default function LatestVideo({ delay = 0 }: { delay?: number }) {
  const videos = [
    {
      title: 'Introduction',
      duration: '1:18',
      thumbnail: 'https://img.youtube.com/vi/80iejxs84GQ/maxresdefault.jpg',
      channelName: 'Byte Byte Code',
      channelUrl: 'https://www.youtube.com/@ByteByByte-c6t',
      videoUrl: 'https://www.youtube.com/watch?v=80iejxs84GQ',
      videoId: '80iejxs84GQ',
      description: 'Introduction to the Byte Byte Code channel - your full-stack hub for mastering modern web development with .NET, React, SQL, GraphQL, Azure, and more!',
      views: 'No views',
      uploadTime: '1 minute ago'
    },
    {
      title: 'Migrating Database',
      duration: '9:00',
      thumbnail: 'https://img.youtube.com/vi/Vbc2DToDqxQ/maxresdefault.jpg',
      channelName: 'Byte Byte Code',
      channelUrl: 'https://www.youtube.com/@ByteByByte-c6t',
      videoUrl: 'https://www.youtube.com/watch?v=Vbc2DToDqxQ',
      videoId: 'Vbc2DToDqxQ',
      description: 'Learn how to migrate databases using Entity Framework and .NET.',
      views: 'No views',
      uploadTime: '5 minutes ago'
    },
    {
      title: 'Generic Repository Theory',
      duration: '2:57',
      thumbnail: 'https://img.youtube.com/vi/NlggB1YUWwQ/maxresdefault.jpg',
      channelName: 'Byte Byte Code',
      channelUrl: 'https://www.youtube.com/@ByteByByte-c6t',
      videoUrl: 'https://www.youtube.com/watch?v=NlggB1YUWwQ',
      videoId: 'NlggB1YUWwQ',
      description: 'Learn about Generic Repository pattern theory and implementation concepts.',
      views: 'No views',
      uploadTime: '9 minutes ago'
    },
    {
      title: 'Implementing Generic Repository',
      duration: '16:38',
      thumbnail: 'https://img.youtube.com/vi/ivVZ7LcuufA/maxresdefault.jpg',
      channelName: 'Byte Byte Code',
      channelUrl: 'https://www.youtube.com/@ByteByByte-c6t',
      videoUrl: 'https://www.youtube.com/watch?v=ivVZ7LcuufA',
      videoId: 'Ni0VQYDCzLA',
      description: 'Practical implementation of Generic Repository pattern in .NET applications.',
      views: 'No views',
      uploadTime: '9 minutes ago'
    }
  ]

  const latestVideo = videos[0];
  
  console.log('Latest video data:', latestVideo);
  console.log('Video URL:', latestVideo.videoUrl);
  console.log('Channel URL:', latestVideo.channelUrl);

  return (
    <Block section="latest-video" delay={delay}>
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-white">
            Latest YouTube Video
          </h2>
          <p className="text-gray-400 text-sm">
            Check out my latest tutorial on Byte Byte Code
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className={cn(
            'relative group cursor-pointer',
            'p-6 rounded-2xl',
            'bg-gradient-to-br from-white/5 to-white/10',
            'border border-foreground/7',
            'transform hover:scale-[1.02]',
            'transition-all duration-500',
            'overflow-hidden'
          )}>
            {/* Embedded YouTube Video */}
            <div className="relative mb-4">
              <div className="aspect-video rounded-xl overflow-hidden bg-gray-800">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${latestVideo.videoId}`}
                  title="Introduction - Byte Byte Code"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ border: 'none' }}
                />
              </div>
            </div>

            {/* Video details */}
            <div className="space-y-3">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">
                    {latestVideo.title}
                  </h3>
                  <p className="text-sm text-gray-400 mt-1">
                    {latestVideo.description}
                  </p>
                </div>
              </div>

              {/* Channel info */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-red-600 to-red-700 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-white">{latestVideo.channelName}</p>
                  <p className="text-xs text-gray-400">{latestVideo.views} • {latestVideo.uploadTime}</p>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex gap-3 pt-2 relative z-10">
                <button 
                  type="button"
                  className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors duration-300 cursor-pointer"
                  onClick={() => {
                    console.log('Watch Now clicked:', latestVideo.videoUrl);
                    window.open(latestVideo.videoUrl, '_blank');
                  }}
                  style={{ position: 'relative', zIndex: 20 }}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  Watch Now
                </button>
                <button 
                  type="button"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors duration-300 cursor-pointer"
                  onClick={() => {
                    console.log('Visit Channel clicked:', latestVideo.channelUrl);
                    window.open(latestVideo.channelUrl, '_blank');
                  }}
                  style={{ position: 'relative', zIndex: 20 }}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  Visit Channel
                </button>
              </div>
            </div>

            {/* Hover effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </div>
        </div>

        {/* Additional video cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {videos.slice(1).map((video, index) => (
            <div
              key={index}
              className={cn(
                'relative group cursor-pointer',
                'p-4 rounded-xl',
                'bg-gradient-to-br from-white/5 to-white/10',
                'border border-foreground/7',
                'transform hover:scale-[1.02]',
                'transition-all duration-500',
                'overflow-hidden'
              )}
            >
              {/* Video thumbnail with play button */}
              <div className="relative mb-3">
                <div className="aspect-video rounded-lg overflow-hidden bg-gray-800 cursor-pointer group"
                     onClick={() => window.open(video.videoUrl, '_blank')}>
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    width={320}
                    height={180}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-red-600/90 rounded-full flex items-center justify-center group-hover:bg-red-500 transition-colors duration-300">
                      <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Duration badge */}
                <div className="absolute bottom-1 right-1 bg-black/80 text-white text-xs px-1 py-0.5 rounded">
                  {video.duration}
                </div>
              </div>

              {/* Video details */}
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors duration-300 line-clamp-2">
                  {video.title}
                </h4>
                <p className="text-xs text-gray-400 line-clamp-2">
                  {video.description}
                </p>
                
                {/* Watch button */}
                <button 
                  type="button"
                  className="inline-flex items-center gap-2 px-3 py-1 bg-red-600 hover:bg-red-700 text-white text-xs rounded-lg transition-colors duration-300 cursor-pointer"
                  onClick={() => {
                    console.log('Small card Watch clicked:', video.videoUrl);
                    window.open(video.videoUrl, '_blank');
                  }}
                  style={{ position: 'relative', zIndex: 10 }}
                >
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  Watch
                </button>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </Block>
  )
} 