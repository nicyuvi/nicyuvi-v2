import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from '@/components/ui/table'
import Link from 'next/link'
import { AppWindow } from 'lucide-react'

type Link = {
  name: string
  href: string
}

type Project = {
  name: string
  techList: string[]
  link: Link
}

export default function Component() {
  const projects: Project[] = [
    {
      name: 'name',
      techList: ['tech one', 'tech two', 'tech three'],
      link: {
        name: 'google.com',
        href: 'https://google.com',
      },
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
                  <TableHead className="w-[150px]">Project</TableHead>
                  <TableHead>Built with</TableHead>
                  <TableHead>Link</TableHead>
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
                      <Link href={project.link.href} target="_blank">
                        {project.link.name}
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
