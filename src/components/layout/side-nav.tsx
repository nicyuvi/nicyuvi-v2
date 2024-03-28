import {
  SiCodepen,
  SiGithub,
  SiLinkedin,
  SiTwitter,
} from '@icons-pack/react-simple-icons'
import Link from 'next/link'

type SocialIcon = {
  link: string
  icon: React.ReactNode
}

const socialIcons: SocialIcon[] = [
  {
    link: 'https://github.com/nicyuvi',
    icon: <SiGithub />,
  },
  {
    link: 'https://linkedin.com/in/nicyuvi',
    icon: <SiLinkedin />,
  },
  {
    link: 'https://codepen.io/nicyuvi/pens/',
    icon: <SiCodepen />,
  },
  {
    link: 'https://twitter.com/nicyuvi',
    icon: <SiTwitter />,
  },
]

export default function SideNav() {
  return (
    <nav className="fixed right-4 top-1/2">
      <ul className="flex flex-col gap-4">
        {socialIcons.map((socialIcon, index) => (
          <li
            key={index}
            className="cursor-pointer transition duration-300 hover:-translate-y-1 hover:text-primary"
          >
            <Link href={socialIcon.link} target="_blank">
              {socialIcon.icon}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
