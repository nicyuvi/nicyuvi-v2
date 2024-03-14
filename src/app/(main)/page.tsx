import MobileNav from '@/components/layout/mobile-nav'
import NavBar from '@/components/layout/nav-bar'
import SideNav from '@/components/layout/side-nav'
import { Button } from '@/components/ui/button'
import Hero from './(components)/hero'
import Experience from './(components)/experience'

export default function Home() {
  return (
    <>
      <header>
        <NavBar displayClass="hidden md:block" />
        <MobileNav displayClass="md:hidden" />
      </header>
      <main className="container mt-[62px]">
        <section className="mx-auto flex h-[calc(100vh_-_62px)] flex-col justify-center">
          <Hero />
        </section>
        <section id="#experience" className="mb-4">
          <Experience />
        </section>
        <section id="#projecs">Projects</section>
        <section id="#about">About</section>
        <section id="#contact">Contact</section>
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
