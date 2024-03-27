import { Code, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

type FeaturedProjectProps = {
  projectLink: string
  githubLink: string
  image: string
  title: string
  description: string
  techList: string[]
  inverted?: boolean
}

export default function FeaturedProject({
  projectLink,
  githubLink,
  image,
  title,
  description,
  techList,
  inverted,
}: FeaturedProjectProps) {
  return (
    <>
      <div className="sm:flex">
        <Link href={projectLink} target="_blank" className="sm:mr-8 sm:w-1/2">
          <Image
            src={image}
            alt="doer thumbnail"
            width="500"
            height="500"
            className="rounded"
          />
        </Link>
        <div className="sm:w-1/2">
          <span className="block text-right text-primary">
            Featured Project
          </span>
          <h3 className="mb-2 text-right text-2xl">{title}</h3>
          <p className="mb-1 rounded bg-primary p-2 text-right">
            {description}
          </p>
          <div className="mb-1 text-right">
            {techList.map((tech, index) => (
              <span
                key={index}
                className="ml-2 inline-block text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex justify-end">
            <Link href={githubLink} target="_blank">
              <Code className="mr-2" />
            </Link>
            <Link href={projectLink} target="_blank">
              <ExternalLink />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
