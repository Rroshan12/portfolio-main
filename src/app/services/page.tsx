import Container from '~/Global/Container'
import { PROJECTS } from '@/content'

export const metadata = {
  title: 'Top .NET & React Developer in Nepal - Roshan Poudel Services',
  description: 'Leading .NET and React developer in Nepal. Expert AWS Solution Architect providing cloud architecture, React development, .NET applications, and Node.js solutions in Nepal.',
  keywords: 'top dotnet developers in nepal, top react developers in nepal, best .NET developer nepal, best React developer nepal, Roshan Poudel',
}

export default function ServicesPage() {
  return (
    <Container>
      <div className="space-y-12">
        {/* Hero Section */}
        <section className="text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold">
            Top .NET & React Developer in Nepal
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Roshan Poudel - Leading cloud architect and full-stack developer specializing in .NET, React, and AWS solutions in Nepal.
          </p>
        </section>

        {/* Services Section */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-center">Development Services</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* .NET Development */}
            <div className="p-6 border rounded-lg space-y-4">
              <h3 className="text-2xl font-semibold">.NET Development</h3>
              <p className="text-muted-foreground">
                As one of the top .NET developers in Nepal, I specialize in building scalable, enterprise-grade applications using the latest .NET technologies. From API development to full-stack applications, I deliver robust solutions that drive business growth.
              </p>
              <ul className="space-y-2 text-sm">
                <li>• ASP.NET Core Web APIs</li>
                <li>• .NET Microservices Architecture</li>
                <li>• Entity Framework & SQL Server</li>
                <li>• Azure Cloud Integration</li>
                <li>• Performance Optimization</li>
              </ul>
            </div>

            {/* React Development */}
            <div className="p-6 border rounded-lg space-y-4">
              <h3 className="text-2xl font-semibold">React Development</h3>
              <p className="text-muted-foreground">
                Leading React developer in Nepal with expertise in modern frontend development. I create responsive, performant web applications using React, Next.js, and cutting-edge frontend technologies.
              </p>
              <ul className="space-y-2 text-sm">
                <li>• React.js & Next.js Applications</li>
                <li>• TypeScript Development</li>
                <li>• State Management (Redux, Zustand)</li>
                <li>• Responsive UI/UX Design</li>
                <li>• Performance Optimization</li>
              </ul>
            </div>

            {/* Cloud Architecture */}
            <div className="p-6 border rounded-lg space-y-4">
              <h3 className="text-2xl font-semibold">AWS Cloud Architecture</h3>
              <p className="text-muted-foreground">
                AWS Solution Architect certified professional providing comprehensive cloud solutions. I design, implement, and maintain scalable cloud infrastructures that support business growth and digital transformation.
              </p>
              <ul className="space-y-2 text-sm">
                <li>• AWS Infrastructure Design</li>
                <li>• Serverless Architecture</li>
                <li>• DevOps & CI/CD Pipelines</li>
                <li>• Security & Compliance</li>
                <li>• Cost Optimization</li>
              </ul>
            </div>

            {/* Full Stack Development */}
            <div className="p-6 border rounded-lg space-y-4">
              <h3 className="text-2xl font-semibold">Full Stack Development</h3>
              <p className="text-muted-foreground">
                Complete end-to-end development solutions combining frontend, backend, and cloud technologies. I deliver comprehensive applications that meet modern business requirements and user expectations.
              </p>
              <ul className="space-y-2 text-sm">
                <li>• Full Stack Web Applications</li>
                <li>• Database Design & Optimization</li>
                <li>• API Development & Integration</li>
                <li>• Testing & Quality Assurance</li>
                <li>• Deployment & Maintenance</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-center">Featured Projects</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(PROJECTS).map(([key, project]) => (
              <div key={key} className="p-6 border rounded-lg space-y-4">
                <h3 className="text-xl font-semibold">{project.name}</h3>
                <p className="text-muted-foreground">{project.descriptor}</p>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors"
                >
                  View Project
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="text-center space-y-6 p-8 bg-muted rounded-lg">
          <h2 className="text-3xl font-bold">Ready to Start Your Project?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            As one of the top .NET developers in Nepal and leading React developers in Nepal, I'm ready to help you build exceptional digital solutions. Let's discuss your project requirements.
          </p>
          <div className="flex justify-center gap-4">
            <a 
              href="https://www.linkedin.com/in/roshan-poudel-a84145185/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors"
            >
              Contact on LinkedIn
            </a>
            <a 
              href="https://github.com/rroshan12"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-primary text-primary rounded hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              View GitHub
            </a>
          </div>
        </section>
      </div>
    </Container>
  )
} 