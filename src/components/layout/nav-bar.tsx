import { ModeToggle } from '@/components/ui/mode-toggle'
import Link from 'next/link'
import Image from 'next/image'
import { NAV_LINKS } from '@/lib/constants'

type NavBarProps = {
  displayClass: string
}

export default function NavBar({ displayClass }: NavBarProps) {
  return (
    <nav
      className={`${displayClass} fixed left-0 right-0 top-0 py-2 shadow-[rgba(0,0,0,0.2)_0px_5px_10px_0px] backdrop-blur`}
    >
      <div className="container flex justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src={`/brand-logo.png`}
            alt="brand logo"
            width="40"
            height="40"
            className="mr-2 h-auto w-auto"
          />
          <span className="font-bold">Nicolis Yuvienco</span>
        </Link>
        <ul className="flex items-center">
          {NAV_LINKS.map((link, index) => (
            <li key={index} className="mr-4">
              <Link href={`#${link}`}>{link}</Link>
            </li>
          ))}
          <li>
            <ModeToggle />
          </li>
        </ul>
      </div>
    </nav>
  )
}
