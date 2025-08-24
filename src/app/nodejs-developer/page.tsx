import Container from '~/Global/Container'
import About from '~~/home/About'
import Projects from '~~/works/Projects'
import Certifications from '~~/home/Certifications'
import LatestVideo from '~~/home/LatestVideo'

export const metadata = {
  title: 'Top Node.js Developer in Nepal - Roshan Poudel',
  description: 'Leading Node.js developer in Nepal. Expert in Node.js, Express.js, MongoDB, and backend development. AWS Solution Architect certified professional.',
  keywords: 'top nodejs developers in nepal, best Node.js developer nepal, Node.js development nepal, Express.js nepal, MongoDB developer nepal, backend developer nepal, Roshan Poudel',
}

export default function NodeJsDeveloperPage() {
  return (
    <Container>
      <About delay={0.2} />
      <Certifications delay={0.4} />
      <Projects view="home" delay={0.3} />
      <LatestVideo delay={0.5} />
    </Container>
  )
}
