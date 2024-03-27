import MobileNav from '@/components/layout/mobile-nav'
import NavBar from '@/components/layout/nav-bar'
import SideNav from '@/components/layout/side-nav'
import { Button } from '@/components/ui/button'
import Hero from './(components)/hero'
import Experience from './(components)/experience'
import Model from './(components)/model'

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
            <Model />
          </div>
        </section>
        <section id="experience" className="mb-4 pt-16">
          <Experience />
        </section>
        <section id="projecs">Projects</section>
        <section id="about">About</section>
        <section id="contact">Contact</section>
      </main>
      <aside>
        <SideNav />
      </aside>
      <footer>
        <p>footer</p>
      </footer>
      <Button>test</Button>
      <Button variant="secondary">secondary</Button>
      <Button variant="outline">outline</Button>
    </>
  )
}
