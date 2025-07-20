import {PROJECTS} from '@/content'

import {cn} from '@/lib/utils'

import Block from '~/UI/Block'
import NavigationButton from '~/UI/NavigationButton'
import Card from '~~/works/Card'

export default function Projects({view, delay}: {view: 'home' | 'works'; delay?: number}) {
  const featuredProjects = Object.entries(PROJECTS).filter(([, project]) => (view === 'home' ? project.featured : true))
  
  return (
    <Block section="works" heading={view === 'home' ? 'best works' : 'works'} className={cn('gap-6 sm:gap-4', view === 'works' && 'sm:gap-3.5')} delay={delay}>
      {/* Creative grid layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-4">
        {featuredProjects.map(([key, project], index) => (
          <div 
            key={key} 
            className={cn(
              'transform transition-all duration-500 hover:scale-[1.02]',
              index % 2 === 0 ? 'lg:translate-y-8' : 'lg:-translate-y-8',
              'hover:z-10'
            )}
          >
            <Card {...project} />
          </div>
        ))}
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
