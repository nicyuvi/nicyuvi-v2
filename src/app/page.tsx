import MobileNav from '@/components/mobile-nav'
import NavBar from '@/components/nav-bar'
import SideNav from '@/components/side-nav'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <>
      <header>
        <NavBar displayClass="hidden md:flex" />
        <MobileNav displayClass="md:hidden" />
      </header>
      <main className="mt-[62px]">
        <h2 className="text-accent">Website title</h2>
        <h2 className="text-accent-foreground">Website title</h2>
        <section>Hero</section>
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
