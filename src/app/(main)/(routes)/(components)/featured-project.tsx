import { Code, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { SiGithub } from '@icons-pack/react-simple-icons'

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
        <Link
          href={projectLink}
          target="_blank"
          className={`${inverted && 'order-1 !mr-0'} sm:mr-8 sm:w-1/2`}
        >
          <Image
            src={image}
            alt="doer thumbnail"
            width="500"
            height="500"
            className="w-auto rounded"
          />
        </Link>
        <div className={`${inverted && 'mr-8'} sm:w-1/2`}>
          <span
            className={`${inverted && '!text-left'} block text-right text-primary`}
          >
            Featured Project
          </span>
          <h3
            className={`${inverted && '!text-left'} mb-2 text-right text-2xl`}
          >
            {title}
          </h3>
          <p
            className={`${inverted && '!text-left'} mb-1 rounded bg-primary p-2 text-right`}
          >
            {description}
          </p>
          <div className={`${inverted && '!text-left'} mb-1 text-right`}>
            {techList.map((tech, index) => (
              <span
                key={index}
                className="ml-2 inline-block text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className={`${inverted && '!justify-start'} flex justify-end`}>
            <Link href={githubLink} target="_blank">
              <SiGithub className="mr-2" />
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
