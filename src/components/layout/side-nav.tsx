import {
  SiCodepen,
  SiGithub,
  SiLinkedin,
  SiTwitter,
} from '@icons-pack/react-simple-icons'
import Link from 'next/link'

export default function SideNav() {
  return (
    <nav className="fixed right-4 top-1/2">
      <ul className="flex flex-col gap-4">
        <li className="cursor-pointer transition duration-300 hover:-translate-y-1 hover:text-primary">
          <Link href="https://github.com/nicyuvi" target="_blank">
            <SiGithub />
          </Link>
        </li>
        <li>
          <SiLinkedin />
        </li>
        <li>
          <SiCodepen />
        </li>
        <li>
          <SiTwitter />
        </li>
      </ul>
    </nav>
  )
}
