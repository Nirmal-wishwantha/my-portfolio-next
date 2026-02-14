import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Experience } from "@/components/sections/experience"
import { Projects } from "@/components/sections/projects"
import { TechStack } from "@/components/sections/tech-stack"
import { Contact } from "@/components/sections/contact"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background relative selection:bg-primary/20 selection:text-primary">
      <Header />

      <Hero />
      <About />
      <TechStack />
      <Experience />
      <Projects />
      <Contact />

      <Footer />
    </main>
  )
}
