import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Hero() {
  return (
    <>
      <span className="font-semibold text-primary">Hi, my name is</span>
      <h1 className="mb-4 text-3xl font-bold text-foreground md:text-6xl">
        Nicolis Yuvienco.
      </h1>
      <h1 className="mb-2 text-3xl font-semibold text-muted-foreground md:text-5xl">
        I&apos;m a Full-Stack Engineer.
      </h1>
      <p className="mb-12 font-semibold text-muted-foreground">
        I build pixel-perfect websites and applications using the latest
        technologies.
      </p>
      <div className="flex flex-col">
        <Button className="mb-4" variant="outline">
          {'get in touch'.toUpperCase()}
        </Button>
        <Link href="#experience">
          <Button variant="outline" className="w-full">
            {'view my work'.toUpperCase()}
          </Button>
        </Link>
      </div>
    </>
  )
}
