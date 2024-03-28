import MobileNav from '@/components/layout/mobile-nav'
import NavBar from '@/components/layout/nav-bar'
import SideNav from '@/components/layout/side-nav'
import { Button } from '@/components/ui/button'
import Experience from './(components)/experience'
import Hero from './(components)/hero'
import Model from './(components)/model'
import Projects from './(components)/projects'

export default function Home() {
  return (
    <>
      <header>
        <NavBar displayClass="hidden md:block" />
        <MobileNav displayClass="md:hidden" />
      </header>
      <main className="container mt-20">
        <section className="flex h-[calc(100vh_-_4rem)] min-h-0 flex-col items-center md:flex-row">
          <div className="md:w-3/5">
            <Hero />
          </div>
          <div className="w-full md:h-[calc(100vh_-_4rem)] md:w-2/5">
            {
              //<Model />
            }
          </div>
        </section>
        <section id="experience" className="mb-4 pt-20">
          <Experience />
        </section>
        <section id="projects" className="mb-4 pt-20">
          <Projects />
        </section>
      </main>
      <aside>
        <SideNav />
      </aside>
      <footer>
        <p>footer</p>
      </footer>
    </>
  )
}
