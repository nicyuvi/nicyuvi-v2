import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { SiGithub } from '@icons-pack/react-simple-icons'
import { AppWindow, ArrowLeft, ExternalLink } from 'lucide-react'
import Link from 'next/link'

type Project = {
  name: string
  techList: string[]
  link: string
  github: string
}

const projects: Project[] = [
  {
    name: 'Happy Pets Landing Page',
    techList: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://happypetslandingpage.netlify.app/',
    github: 'https://github.com/nicyuvi/happy-pets-landing-page',
  },
  {
    name: "A Surfer's Life Blog",
    techList: ['HTML', 'CSS'],
    link: 'https://surferslife.netlify.app/',
    github: 'https://github.com/nicyuvi/surfers-life-blog',
  },
  {
    name: 'JavaScript Drumset',
    techList: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://myjsdrumset.netlify.app/',
    github:
      'https://github.com/nicyuvi/my-javascript-30/tree/main/01-js-drumkit',
  },
  {
    name: 'Cozy Cabins Landing Page',
    techList: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://cozycabinretreat.netlify.app/',
    github: 'https://github.com/nicyuvi/cozy-cabin-landing-page',
  },
  {
    name: 'Interactive Pricing Component',
    techList: ['React'],
    link: 'https://interactive-pricing-component-yuvi.netlify.app/',
    github: 'https://github.com/nicyuvi/interactive-pricing-component-solution',
  },
  {
    name: 'Promotional HTML Email Template',
    techList: ['HTML', 'CSS'],
    link: 'https://promotional-email-template.netlify.app/',
    github: 'https://github.com/nicyuvi/promotional-email-template',
  },
]

export default function Component() {
  return (
    <>
      <div className="flex items-center text-primary">
        <Link href="/" className="group flex cursor-pointer items-center">
          <ArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
          <span>back</span>
        </Link>
      </div>

      <div className="mb-8 flex items-center gap-4">
        <AppWindow />
        <h1 className="text-4xl font-bold leading-none">All Projects</h1>
      </div>
      <div className="overflow-hidden rounded-lg border shadow-sm">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-1/3">Project</TableHead>
              <TableHead className="w-1/3">Built with</TableHead>
              <TableHead className="w-1/6">Link</TableHead>
              <TableHead className="w-1/6">Github</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {projects.map((project, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{project.name}</TableCell>
                <TableCell>
                  {project.techList.map((tech, index) => (
                    <span key={index} className="mr-2">
                      {tech}
                    </span>
                  ))}
                </TableCell>
                <TableCell>
                  <Link href={project.link} target="_blank">
                    <ExternalLink />
                  </Link>
                </TableCell>
                <TableCell>
                  <Link href={project.github} target="_blank">
                    <SiGithub />
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  )
}
