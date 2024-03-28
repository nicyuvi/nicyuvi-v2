import {
  SiGithub,
  SiLinkedin,
  SiCodepen,
  SiTwitter,
} from '@icons-pack/react-simple-icons'

export default function SideNav() {
  return (
    <nav className="fixed right-0 top-1/2">
      <ul>
        <li>
          <SiGithub />
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
