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
      <div className="md:flex">
        <span className="text-muted-foreground">2023 - Present</span>
        <div>
          <Link
            href="https://notehub-app-six.vercel.app/"
            className="flex items-center"
          >
            <h2 className="mr-2 text-2xl">Full-Stack Web Developer</h2>
            <ExternalLink />
          </Link>
          <span className="mb-4 block text-xl text-muted-foreground">
            Indie Developer
          </span>
          <p className="rounded bg-primary p-2">
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
