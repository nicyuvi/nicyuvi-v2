import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { AppWindow, Code, ExternalLink } from 'lucide-react'
import Link from 'next/link'

type Project = {
  name: string
  techList: string[]
  link: string
  github: string
}

export default function Component() {
  const projects: Project[] = [
    {
      name: 'Happy Pets Landing Page',
      techList: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://happypetslandingpage.netlify.app/',
      github: 'https://github.com/nicyuvi/happy-pets-landing-page',
    },
  ]
  return (
    <div className="flex flex-col gap-4 p-4 md:gap-8 md:p-6">
      <div className="container mx-auto">
        <div className="w-full max-w-6xl space-y-2">
          <div className="mb-8 flex items-center gap-4">
            <AppWindow />
            <h1 className="text-2xl font-bold leading-none">All Projects</h1>
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
                    <TableCell className="font-medium">
                      {project.name}
                    </TableCell>
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
                        <Code />
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  )
}
