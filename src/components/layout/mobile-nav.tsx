'use client'
import { ModeToggle } from '@/components/ui/mode-toggle'
import { NAV_LINKS } from '@/lib/constants'
import { Menu } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

type MobileNavProps = {
  displayClass: string
}

export default function MobileNav({ displayClass }: MobileNavProps) {
  const [active, setActive] = useState<boolean>(false)

  return (
    <>
      <nav
        className={`${displayClass} fixed left-0 right-0 top-0 z-10 h-16 py-2 shadow-[rgba(0,0,0,0.2)_0px_5px_10px_0px] backdrop-blur`}
      >
        <div className="container flex items-center justify-between">
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
          <i onClick={() => setActive(!active)} className="cursor-pointer">
            <Menu />
          </i>
        </div>
        <div className="flex justify-center">
          {active && (
            <ul>
              {NAV_LINKS.map((link, index) => (
                <li key={index} className="mb-4">
                  <Link href={`#${link}`}>{link}</Link>
                </li>
              ))}
              <li>
                <ModeToggle />
              </li>
            </ul>
          )}
        </div>
      </nav>
    </>
  )
}
