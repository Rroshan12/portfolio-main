import RoshanImage from '$/profile/roshan1.jpg'
import RoshanImage2 from '$/profile/roshan2.jpg'
import RoshanImage3 from '$/profile/roshan3.jpeg'
import CursorIcon from '$/icons/cursor.svg'

import GithubIcon from '$/icons/github.svg'
import LinkedInIcon from '$/icons/linkedin.svg'
import TelegramIcon from '$/icons/telegram.svg'
import ReactIcon from '$/icons/about/react.svg'
import AWSIcon from '$/icons/about/aws.svg'
import DotNetIcon from '$/icons/about/dotnet.svg'
import NodeJSIcon from '$/icons/about/nodejs.svg'
import RedHatIcon from '$/icons/about/redhat.svg'
import HouseBrokerImage from '$/projects/housebroker.png'
import ListenItProImage from '$/projects/listenitpro.png'

export const CONTENT = {
  global: {
    person: {
      name: 'Roshan Poudel',
      taglines: [
        'Cloud architect by day, code wizard by night.',
        'Transforming caffeine into digital symphonies.',
        'Where AWS meets pixel-perfect React magic.',
        'Architecting cloud dreams, one commit at a time.',
        'Debugging reality, one bug at a time.',
        'Making the cloud dance to my code rhythm.',
        'From .NET to Node.js, I speak fluent binary.',
        'Red Hat Certified System Administrator, DevOps obsessed, cloud addicted.'
      ],
      pictures: [RoshanImage, RoshanImage2, RoshanImage3],
      cursor: CursorIcon,
    },
    navigation: {
      github: {
        link: 'https://github.com/rroshan12',
        content: GithubIcon,
      },
      linkedin: {
        link: 'https://www.linkedin.com/in/roshan-poudel-a84145185/',
        content: LinkedInIcon,
      },
      cv: {
        link: '/cv',
        content: 'Resume',
        color: null,
        contrast: false,
      },
    },
  },
  homePage: {
    about: {
      text: 'Cloud architect by day, code wizard by night. I transform caffeine into scalable AWS solutions while crafting pixel-perfect React experiences. When I\'m not architecting cloud infrastructures or debugging .NET applications, you\'ll find me optimizing Node.js performance or automating deployments as a Red Hat Certified System Administrator. Because in this digital realm, I don\'t just write code—I orchestrate digital symphonies.',
      badges: [
        {text: 'AWS Solution Architect', icon: AWSIcon},
        {text: 'React', icon: ReactIcon},
        {text: '.NET', icon: DotNetIcon},
        {text: 'Node.js', icon: NodeJSIcon},
        {text: 'Red Hat Certified System Administrator', icon: RedHatIcon},
      ],
    },
  },
}

export const PROJECTS = {
  krispcall: {
    name: 'KrispCall App',
    descriptor: 'AI-Powered Communication Platform',
    image: HouseBrokerImage, // Using a placeholder image for fallback
    link: 'https://krispcall.com/',
    videoUrl: 'https://krispcall-website.sgp1.cdn.digitaloceanspaces.com/20250305_154834/krispcall-homepage-gif-a111.mp4',
    color: '#3B82F6',
    featured: true,
  },
  housebroker: {
    name: '.NET House Broker API',
    descriptor: 'Real Estate Property Listing API',
    image: HouseBrokerImage, // Using the dedicated housebroker image
    link: 'https://github.com/Rroshan12/HouseBrokerAPI',
    color: '#059669',
    featured: true,
  },
  listenitpro: {
    name: 'ListenItPro NuGet Package',
    descriptor: '.NET  Sql Server Table Listener',
    image: ListenItProImage, // Using the dedicated listenitpro image
    link: 'https://www.nuget.org/PACKAGES?q=ListenItPro&frameworks=&tfms=&includeComputedFrameworks=true&frameworkFilterMode=all&packagetype=&prerel=true&sortby=relevance',
    color: '#7C3AED',
    featured: true,
  },
 
}
