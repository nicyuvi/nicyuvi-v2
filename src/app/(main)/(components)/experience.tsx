import { ExternalLink } from 'lucide-react'
import Link from 'next/link'

export default function Experience() {
  // loop through array
  const techList = ['NodeJS', 'Tailwind CSS', 'Prisma', 'Python', 'Flask']
  return (
    <>
      <h2 className="mx-auto mb-4 max-w-sm border-b border-b-primary pb-2 text-center text-2xl">
        Experience
      </h2>
      <div className="justify-center md:flex">
        <span className="mr-4 w-1/2 text-right text-muted-foreground">
          2023 - Present
        </span>
        <div className="w-1/2">
          <Link
            href="https://notehub-app-six.vercel.app/"
            className="flex items-center"
          >
            <h2 className="mr-2 text-2xl">Full-Stack Web Developer</h2>
            <ExternalLink />
          </Link>
          <span className="mb-4 block text-muted-foreground">
            Indie Developer
          </span>
          <p className="mb-1 rounded bg-primary p-2">
            Working on Notehub: A collaborative, note taking web app
          </p>
          {techList.map((tech, index) => (
            <span key={index} className="mr-2 text-muted-foreground">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </>
  )
}
