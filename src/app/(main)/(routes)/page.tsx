import MobileNav from '@/components/layout/mobile-nav'
import NavBar from '@/components/layout/nav-bar'
import SideNav from '@/components/layout/side-nav'
import Experience from './(components)/experience'
import Footer from './(components)/footer'
import Hero from './(components)/hero'
import Projects from './(components)/projects'

export default function Home() {
  return (
    <>
      <header>
        <NavBar displayClass="hidden md:block" />
        <MobileNav displayClass="md:hidden" />
      </header>
      <main className="container mb-10 mt-20">
        <section
          id="hero"
          className="flex h-[calc(100vh_-_4rem)] min-h-0 flex-col items-center md:flex-row"
        >
          <div className="md:w-3/5">
            <Hero />
          </div>
          <div className="w-full md:h-[calc(100vh_-_4rem)] md:w-2/5">
            {
              //<Model />
            }
          </div>
        </section>
        <section id="experience" className="pt-20">
          <Experience />
        </section>
        <section id="projects" className="pt-20">
          <Projects />
        </section>
      </main>
      <aside>
        <SideNav />
      </aside>
      <footer className="mb-6">
        <Footer />
      </footer>
    </>
  )
}
