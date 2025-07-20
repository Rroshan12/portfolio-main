import Container from '~/Global/Container'
import About from '~~/home/About'
import Projects from '~~/works/Projects'
import Certifications from '~~/home/Certifications'

export default function HomePage() {
  return (
    <Container>
      <About delay={0.2} />
      <Certifications delay={0.4} />
      <Projects view="home" delay={0.3} />

    </Container>
  )
}
