import Contact from './(components)/contact'
import Experience from './(components)/experience'
import Hero from './(components)/hero'
import Model from './(components)/model'
import Projects from './(components)/projects'

export default function Home() {
  return (
    <>
      <section className="flex h-[calc(100vh_-_4rem)] min-h-0 flex-col items-center md:flex-row">
        <div className="md:w-3/5">
          <Hero />
        </div>
        <div className="w-full md:h-[calc(100vh_-_4rem)] md:w-2/5">
          <Model />
        </div>
      </section>
      <section id="experience" className="pt-20">
        <Experience />
      </section>
      <section id="projects" className="pt-20">
        <Projects />
      </section>
      <section id="contact" className="pt-20">
        <Contact />
      </section>
    </>
  )
}
