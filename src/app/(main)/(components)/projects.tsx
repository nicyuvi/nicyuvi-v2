import SectionHeader from '@/components/ui/section-header'
import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const techList = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'Open Weather API',
  'Inspirational Quotes API',
]

export default function Projects() {
  return (
    <>
      <SectionHeader>Some of My Projects</SectionHeader>
      <div className="sm:flex">
        <Link
          href="https://doer.netlify.app/"
          target="_blank"
          className="sm:mr-8 sm:w-1/2"
        >
          <Image
            src={`/static/doer-img.png`}
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
          <h3 className="mb-2 text-right text-2xl">Doer</h3>
          <p className="mb-1 rounded bg-primary p-2 text-right">
            Doer is a productivity based web application that helps you stay
            focused and on task. This web app contains several features such as
            a personalized welcome bar, todo-list, notes widget, and a pomodoro
            timer. The welcome bar uses the Open Weather API and Inspirational
            Quotes API to display data and the entire app uses the browsers
            local storage to save user data.
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
            <Link href="https://github.com/nicyuvi" target="_blank">
              <Github className="mr-2" />
            </Link>
            <Link href="https://doer.netlify.app/" target="_blank">
              <ExternalLink />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
