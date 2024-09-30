import Link from 'next/link'

export default function Hero() {
  return (
    <div>
      <h1 className="text-2xl">
        <Link href="#experience" className="hover:text-primary">
          I produce clean, efficient, and developer friendly front end web dev
          code.
        </Link>
      </h1>
      <h1>
        You can check out my side interests{' '}
        <Link
          href="https://yuviwebdesign.com"
          target="_blank"
          className="hover:text-primary"
        >
          here.
        </Link>
      </h1>
    </div>
  )
}
