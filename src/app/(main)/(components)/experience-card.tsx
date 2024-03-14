import { ExternalLink } from 'lucide-react'
import Link from 'next/link'

type ExperienceCardProps = {
  dates: string
  company: string
  role: string
  description: string
  techList: string[]
}

export default function ExperienceCard({
  dates,
  company,
  role,
  description,
  techList,
}: ExperienceCardProps) {
  return (
    <>
      <h2 className="mx-auto mb-4 max-w-sm border-b border-b-primary pb-2 text-center text-2xl">
        Experience
      </h2>
      <div className="justify-center sm:flex">
        <span className="mr-4 text-right text-muted-foreground sm:w-1/2">
          {dates}
        </span>
        <div className="sm:w-1/2">
          <Link
            href="https://notehub-app-six.vercel.app/"
            className="flex items-center"
          >
            <h2 className="mr-2 text-2xl">{company}</h2>
            <ExternalLink />
          </Link>
          <span className="mb-4 block text-muted-foreground">{role}</span>
          <p className="mb-1 rounded bg-primary p-2">{description}</p>
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
