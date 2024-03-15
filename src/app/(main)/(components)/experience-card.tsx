import { ExternalLink } from 'lucide-react'
import Link from 'next/link'

type ExperienceCardProps = {
  dates: string
  company: string
  role: string
  description: string
  techList: string[]
  link?: string
}

export default function ExperienceCard({
  dates,
  company,
  role,
  description,
  techList,
  link,
}: ExperienceCardProps) {
  return (
    <>
      <div className="items-end justify-center sm:grid sm:grid-cols-2">
        <span className="mr-4 inline-block text-right align-baseline text-muted-foreground">
          {dates}
        </span>
        <Link
          href={link || '/'}
          target={link ? '_blank' : '_self'}
          className="flex items-center"
        >
          <h2 className="mr-2 text-2xl">{company}</h2>
          <ExternalLink />
        </Link>
        <div />
        <div>
          <span className="mb-4 block text-muted-foreground">{role}</span>
          <p className="mb-1 rounded bg-primary p-2">{description}</p>
          {techList.map((tech, index) => (
            <span
              key={index}
              className="mr-2 inline-block text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </>
  )
}
