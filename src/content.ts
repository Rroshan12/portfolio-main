import RoshanImage from '$/profile/roshan1.jpg'
import RoshanImage2 from '$/profile/roshan2.jpg'
import RoshanImage3 from '$/profile/roshan3.jpeg'
import CursorIcon from '$/icons/cursor.svg'

import GithubIcon from '$/icons/github.svg'
import LinkedInIcon from '$/icons/linkedin.svg'
import ReactIcon from '$/icons/about/react.svg'
import AWSIcon from '$/icons/about/aws.svg'
import DotNetIcon from '$/icons/about/dotnet.svg'
import NodeJSIcon from '$/icons/about/nodejs.svg'
import RedHatIcon from '$/icons/about/redhat.svg'
import HouseBrokerImage from '$/projects/housebroker.png'
import Chatly from '$/projects/chatly.png'
import ListenItProImage from '$/projects/listenitpro.png'

export const CONTENT = {
  global: {
    person: {
      name: 'Roshan Poudel',
      taglines: [
        'Top .NET and React developer in Nepal - Cloud architect by day, code wizard by night.',
        'Leading React developer in Nepal - Transforming caffeine into digital symphonies.',
        'Best .NET developer in Nepal - Where AWS meets pixel-perfect React magic.',
        'Top dotnet developers in Nepal - Architecting cloud dreams, one commit at a time.',
        'Top react developers in Nepal - Debugging reality, one bug at a time.',
        'Making the cloud dance to my code rhythm - Leading developer in Nepal.',
        'From .NET to Node.js, I speak fluent binary - Top developer in Nepal.',
        'Red Hat Certified System Administrator, DevOps obsessed, cloud addicted - Leading developer in Nepal.'
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
      text: 'As one of the top .NET developers in Nepal and leading React developers in Nepal, I specialize in cloud architecture and modern web development. Roshan Poudel - AWS Solution Architect certified professional crafting scalable AWS solutions while building pixel-perfect React experiences. When I\'m not architecting cloud infrastructures or developing .NET applications, you\'ll find me optimizing Node.js performance or automating deployments as a Red Hat Certified System Administrator. Being among the best .NET developers in Nepal and top React developers in Nepal, I don\'t just write code—I orchestrate digital symphonies that drive business growth.',
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
    descriptor: 'Real Estate Property Listing API - Top .NET Development in Nepal',
    image: HouseBrokerImage, // Using the dedicated housebroker image
    link: 'https://github.com/Rroshan12/HouseBrokerAPI',
    color: '#059669',
    featured: true,
  },
  listenitpro: {
    name: 'ListenItPro NuGet Package',
    descriptor: '.NET Sql Server Table Listener - Leading .NET Development in Nepal',
    image: ListenItProImage, // Using the dedicated listenitpro image
    link: 'https://www.nuget.org/PACKAGES?q=ListenItPro&frameworks=&tfms=&includeComputedFrameworks=true&frameworkFilterMode=all&packagetype=&prerel=true&sortby=relevance',
    color: '#7C3AED',
    featured: true,
  },

   chatly: {
    name: 'Chatly-Omnichannel Chat Application Get Multiple Email and SMS',
    descriptor: 'Made with .NET 8, React Js, Grpc',
    image: Chatly, // Using the dedicated listenitpro image
    link: 'https://github.com/Rroshan12/ChatlyOmnichannel',
    color: '#7C3AED',
    featured: true,
  },
 
}
