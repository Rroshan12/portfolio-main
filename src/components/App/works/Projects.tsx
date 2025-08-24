'use client'

import {PROJECTS} from '@/content'
import {useState} from 'react'

import {cn} from '@/lib/utils'

import Block from '~/UI/Block'
import NavigationButton from '~/UI/NavigationButton'
import Card from '~~/works/Card'

export default function Projects({view, delay}: {view: 'home' | 'works'; delay?: number}) {
  const featuredProjects = Object.entries(PROJECTS).filter(([, project]) => (view === 'home' ? project.featured : true))
  
  // Group projects by primary language
  const projectsByLanguage = featuredProjects.reduce((acc, [key, project]) => {
    const language = project.primaryLanguage || 'Other'
    if (!acc[language]) {
      acc[language] = []
    }
    acc[language].push([key, project])
    return acc
  }, {} as Record<string, [string, any][]>)

  // Define language display names and colors
  const languageConfig = {
    '.NET': { name: '.NET Development', color: '#059669', icon: '💻' },
    'React': { name: 'React Development', color: '#61DAFB', icon: '⚛️' },
    'Node.js': { name: 'Node.js Development', color: '#339933', icon: '🔗' },
    'Other': { name: 'Other Projects', color: '#6B7280', icon: '🌐' }
  }

  // State for active tab
  const [activeTab, setActiveTab] = useState(Object.keys(projectsByLanguage)[0] || 'All')

  // Get all projects for "All" tab
  const allProjects = featuredProjects

  return (
    <Block section="works" heading={view === 'home' ? 'best works' : 'works'} className={cn('gap-6 sm:gap-4', view === 'works' && 'sm:gap-3.5')} delay={delay}>
      {/* Tab Navigation */}
      <div className="flex flex-col items-start mb-8">
        <div className="flex items-center gap-2">
          {/* All Projects Tab */}
          <button
            onClick={() => setActiveTab('All')}
            className={cn(
              'px-5 py-2.5 rounded-full font-medium transition-all duration-300',
              'relative overflow-hidden min-w-[110px] text-sm',
              'hover:scale-105 active:scale-95',
              'cursor-pointer',
              activeTab === 'All'
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40'
                : 'text-gray-400 hover:text-white hover:bg-white/10'
            )}
          >
            <span className="flex items-center justify-center gap-2">
              <span className="text-sm">✨</span>
              <span className="font-semibold">All</span>
            </span>
          </button>

          {/* Language-specific tabs */}
          {Object.entries(projectsByLanguage).map(([language, projects]) => {
            const config = languageConfig[language as keyof typeof languageConfig] || languageConfig.Other
            
            return (
              <button
                key={language}
                onClick={() => setActiveTab(language)}
                className={cn(
                  'px-5 py-2.5 rounded-full font-medium transition-all duration-300',
                  'relative overflow-hidden min-w-[110px] text-sm',
                  'hover:scale-105 active:scale-95',
                  'cursor-pointer',
                  activeTab === language
                    ? 'bg-white/10 text-white border border-white/20'
                    : 'text-gray-400 hover:text-white hover:border hover:border-white/20'
                )}
              >
                <span className="flex items-center justify-center gap-2">
                  <span className="text-lg">{config.icon}</span>
                  <span className="font-semibold">
                    {language === '.NET' ? '.NET' :
                     language === 'Node.js' ? 'Node.js' :
                     language === 'React' ? 'React' :
                     language}
                  </span>
                </span>
                {/* Removed active tab pulsing overlay */}
              </button>
            )
          })}
        </div>
      </div>

      {/* Tab Content */}
      <div className="min-h-[400px]">
        {/* All Projects Tab */}
        {activeTab === 'All' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {allProjects.map(([key, project], index) => (
              <div 
                key={key} 
                className="transform transition-all duration-300 hover:scale-105 hover:z-10"
              >
                <Card {...project} />
              </div>
            ))}
          </div>
        )}

        {/* Language-specific tabs */}
        {Object.entries(projectsByLanguage).map(([language, projects]) => {
          if (activeTab !== language) return null
          
          return (
            <div key={language} className="space-y-6">
              {/* Language section header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{languageConfig[language as keyof typeof languageConfig]?.icon || '🔧'}</span>
                  <h3 
                    className="text-xl font-bold text-white"
                    style={{ color: languageConfig[language as keyof typeof languageConfig]?.color || '#6B7280' }}
                  >
                    {languageConfig[language as keyof typeof languageConfig]?.name || language}
                  </h3>
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-current to-transparent opacity-30" />
              </div>

              {/* Projects grid for this language */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {projects.map(([key, project], index) => (
                  <div 
                    key={key} 
                    className="transform transition-all duration-300 hover:scale-105 hover:z-10"
                  >
                    <Card {...project} />
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>

      {/* Decorative elements */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      {view === 'home' && (
        <div className="flex justify-center items-center w-full py-8 mt-8">
          <NavigationButton href="/works" text="Explore More Works" />
        </div>
      )}
    </Block>
  )
}
