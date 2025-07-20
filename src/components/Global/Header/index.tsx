import {CONTENT} from '@/content'
import {WEBSITE_BOX} from '~/Global/Container'

import {cn} from '@/lib/utils'

import Image from 'next/image'
import {SPAN} from '~/UI/Typography'
import Button from '~/UI/Button'
import Profile from '~/Global/Header/Profile'

export default function Header() {
  const {navigation} = CONTENT.global

  return (
    <header className={cn(WEBSITE_BOX, 'mt-20 xl:mt-16 sm:mt-3', 'flex sm:flex-col items-center sm:items-start justify-between sm:gap-4.5')}>
      <Profile />

      <div className="flex gap-1.25 sm:w-full">
        {Object.entries(navigation).map(([key, item]) => (
          <Button
            as="link"
            href={item.link}
            variant="primary"
            className={cn(
              'max-h-10',
              'last:pt-1.75 sm:last:pt-1.25 sm:last:w-full',
              key === 'cv' ? 'bg-green-500/20 hover:bg-green-500/30' : 
              'bg-blue-500/20 hover:bg-blue-500/30'
            )}
            target="_blank"
            {...(key !== 'cv' && {
              rel: 'noopener noreferrer',
            })}
            key={key}
          >
            {typeof item.content === 'string' ? (
              <SPAN className={cn(
                'px-1.5 sm:px-2.25 sm:py-[1.5px] group-hover:scale-[1.04] duration-300',
                key === 'cv' ? 'text-green-300 group-hover:text-green-200' : 
                'text-blue-300 group-hover:text-blue-200'
              )}>
                {item.content}
              </SPAN>
            ) : (
              <Image 
                className="size-5.5 sm:min-w-5.5 aspect-square group-hover:scale-[1.1] duration-300 filter brightness-0 invert" 
                src={item.content} 
                alt={`bozzhik ${key} icon`} 
              />
            )}
          </Button>
        ))}
      </div>
    </header>
  )
}
