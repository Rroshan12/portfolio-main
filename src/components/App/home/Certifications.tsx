'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import Block from '~/UI/Block'
import { SPAN } from '~/UI/Typography'
import Image from 'next/image'


export default function Certifications({ delay = 0 }: { delay?: number }) {

  const certifications = [
    {
      name: 'AWS Solutions Architect',
      issuer: 'Amazon Web Services',
      imageUrl: 'https://media.licdn.com/dms/image/v2/D5622AQF-chw1mMdc_Q/feedshare-shrink_1280/B56ZaFMBeDGQAw-/0/1745991244832?e=1755734400&v=beta&t=OiFGXWJSxQqbELH6zdbZCaZ5Ht8QEH6gITlRo4V91eQ',
      description: 'Cloud architecture and AWS services expertise',
      color: '#FF9900',
      link: 'https://aws.amazon.com/certification/'
    },
    {
      name: 'Red Hat Certified System Administrator',
      issuer: 'Red Hat',
      imageUrl: 'https://media.licdn.com/dms/image/v2/D4D2DAQErPiJ5g4-Wqg/profile-treasury-image-shrink_160_160/profile-treasury-image-shrink_160_160/0/1700582657002?e=1753614000&v=beta&t=sUjyoZKSz4I2af-keTVq6mEp2tLWpxF6X8WHld1QywI',
      description: 'Linux system administration and DevOps skills',
      color: '#EE0000',
      link: 'https://www.redhat.com/en/services/certification'
    }
  ]

  return (
    <Block delay={delay} section="certifications">
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-white">
            Professional Certifications
          </h2>
          <p className="text-gray-400 text-sm">
            Validated expertise in cloud and system administration
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={cn(
                'relative group cursor-pointer',
                'p-6 rounded-2xl',
                'bg-gradient-to-br from-white/5 to-white/10',
                'border border-foreground/7',
                'transform hover:scale-[1.02] hover:rotate-1',
                'transition-all duration-500',
                'overflow-hidden'
              )}
              onClick={() => cert.link && window.open(cert.link, '_blank')}
            >
              {/* Animated background gradient */}
              <div 
                className={cn(
                  'absolute inset-0 opacity-0 group-hover:opacity-100',
                  'transition-opacity duration-700',
                  'bg-gradient-to-br from-transparent via-white/5 to-transparent'
                )}
                style={{
                  background: `radial-gradient(circle at 30% 20%, ${cert.color}20 0%, transparent 50%), linear-gradient(135deg, ${cert.color}10 0%, ${cert.color}05 50%, transparent 100%)`
                }}
              />

              {/* Certification content */}
              <div className="relative z-10 flex flex-col items-center gap-4 text-center">
                {/* Certification image */}
                <div className="relative flex-shrink-0">
                  <div className="w-24 h-24 rounded-xl overflow-hidden bg-white/10 backdrop-blur-sm">
                    <Image
                      src={cert.imageUrl}
                      alt={cert.name}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Glowing effect */}
                  <div 
                    className={cn(
                      'absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100',
                      'transition-opacity duration-500',
                      'bg-gradient-to-r from-transparent via-white/20 to-transparent'
                    )}
                    style={{ boxShadow: `0 0 30px ${cert.color}40` }}
                  />
                </div>

                {/* Certification details */}
                <div className="space-y-2">
                  <div className="flex items-center justify-center gap-2">
                    <div 
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: cert.color }}
                    />
                    <SPAN className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                      {cert.issuer}
                    </SPAN>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">
                    {cert.name}
                  </h3>
                  
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Hover indicator */}
                  <div className="flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-xs text-blue-400">View Certificate</span>
                    <svg className="w-3 h-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div 
                  className="px-2 py-1 rounded-full text-xs font-medium backdrop-blur-md"
                  style={{ 
                    backgroundColor: `${cert.color}20`,
                    border: `1px solid ${cert.color}40`
                  }}
                >
                  <span style={{ color: cert.color }}>Certified</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Block>
  )
} 