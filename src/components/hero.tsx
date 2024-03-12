import { Button } from './ui/button'

export default function Hero() {
  return (
    <>
      <span className="font-semibold text-primary">Hi, my name is</span>
      <h1 className="mb-4 text-2xl font-semibold text-foreground">
        Nicolis Yuvienco.
      </h1>
      <h1 className="text-2xl font-semibold text-muted-foreground">
        I&apos;m a Full-Stack Web Developer.
      </h1>
      <p className="mb-12 font-semibold text-muted-foreground">
        I build websites and applications using the latest technologies.
      </p>
      <div className="flex flex-col">
        <Button className="mb-4" variant="outline">
          {'get in touch'.toUpperCase()}
        </Button>
        <Button variant="outline">{'view my work'.toUpperCase()}</Button>
      </div>
    </>
  )
}
