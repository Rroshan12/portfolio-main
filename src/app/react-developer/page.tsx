import Container from '~/Global/Container'
import About from '~~/home/About'
import Projects from '~~/works/Projects'
import Certifications from '~~/home/Certifications'
import LatestVideo from '~~/home/LatestVideo'

export const metadata = {
  title: 'Top React Developer in Nepal - Roshan Poudel',
  description: 'Leading React developer in Nepal. Expert in React.js, Next.js, TypeScript, and modern frontend development. AWS Solution Architect certified professional.',
  keywords: 'top react developers in nepal, best React developer nepal, React development nepal, React.js nepal, Next.js nepal, TypeScript developer nepal, Roshan Poudel',
}

export default function ReactDeveloperPage() {
  return (
    <Container>
      <About delay={0.2} />
      <Certifications delay={0.4} />
      <Projects view="home" delay={0.3} />
      <LatestVideo delay={0.5} />
    </Container>
  )
}
