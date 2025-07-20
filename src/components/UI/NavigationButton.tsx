import {cn} from '@/lib/utils'

import Button from '~/UI/Button'
import {SPAN} from '~/UI/Typography'

type Props = {
  href: string
  target?: '_self' | '_blank'
  text: string
  className?: string
}

export default function NavigationButton({href, target = '_self', text, className}: Props) {
  return (
    <Button 
      as="link" 
      href={href} 
      target={target} 
      variant="secondary" 
      className={cn(
        'w-auto rounded-2xl py-4 px-6',
        'bg-gradient-to-r from-blue-500/10 to-purple-500/10',
        'transform hover:scale-105 transition-all duration-300',
        'cursor-pointer',
        className
      )}
    >
      <SPAN className="text-foreground font-semibold text-lg group-hover:scale-[1.04] duration-300">
        {text}
      </SPAN>
    </Button>
  )
}
