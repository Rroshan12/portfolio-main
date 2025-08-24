import Container from '~/Global/Container'
import About from '~~/home/About'
import Projects from '~~/works/Projects'
import Certifications from '~~/home/Certifications'
import LatestVideo from '~~/home/LatestVideo'

export const metadata = {
  title: 'Top .NET Developer in Nepal - Roshan Poudel',
  description: 'Leading .NET developer in Nepal. Expert in ASP.NET Core, C#, Entity Framework, and .NET development services. AWS Solution Architect certified professional.',
  keywords: 'top dotnet developers in nepal, best .NET developer nepal, .NET development nepal, ASP.NET Core nepal, C# developer nepal, Roshan Poudel',
}

export default function DotNetDeveloperPage() {
  return (
    <Container>
      <About delay={0.2} />
      <Certifications delay={0.4} />
      <Projects view="home" delay={0.3} />
      <LatestVideo delay={0.5} />
    </Container>
  )
}
