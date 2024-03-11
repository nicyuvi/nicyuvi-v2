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
        className={`${displayClass} fixed top-0 right-0 left-0 backdrop-blur shadow-[rgba(0,0,0,0.2)_0px_5px_10px_0px] py-2`}
      >
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image
              src={`/brand-logo.png`}
              alt="brand logo"
              width="40"
              height="40"
              className="mr-2 w-auto h-auto"
            />
            <h1 className="font-bold">Nicolis Yuvienco</h1>
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
