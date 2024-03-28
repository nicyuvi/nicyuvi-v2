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

export default function Component() {
  return (
    <div className="flex flex-col gap-4 p-4 md:gap-8 md:p-6">
      <div className="container mx-auto">
        <div className="w-full max-w-6xl space-y-2">
          <div className="flex items-center gap-4">
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
                <TableRow>
                  <TableCell className="font-medium">Next.js</TableCell>
                  <TableCell>React</TableCell>
                  <TableCell>
                    <Link href="#">vercel.com</Link>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Shadcn</TableCell>
                  <TableCell>Web Components</TableCell>
                  <TableCell>
                    <Link href="#">shadcn.com</Link>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Hyper</TableCell>
                  <TableCell>Node.js</TableCell>
                  <TableCell>
                    <Link href="#">hyper.is</Link>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Comet</TableCell>
                  <TableCell>Design System</TableCell>
                  <TableCell>
                    <Link href="#">comet.vercel.com</Link>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Vercel</TableCell>
                  <TableCell>Cloud</TableCell>
                  <TableCell>
                    <Link href="#">vercel.com</Link>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  )
}
