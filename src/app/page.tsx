import MobileNav from '@/components/mobile-nav'
import NavBar from '@/components/nav-bar'
import SideNav from '@/components/side-nav'
import { Button } from '@/components/ui/button'
import Hero from '@/components/hero'

export default function Home() {
  return (
    <>
      <header className="container">
        <NavBar displayClass="hidden md:flex" />
        <MobileNav displayClass="md:hidden" />
      </header>
      <main className="container mt-[62px]">
        <section className="flex h-[calc(100vh_-_62px)] flex-col justify-center">
          <Hero />
        </section>
        <section id="#experience">Experience</section>
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
