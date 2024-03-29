import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <div className="flex flex-col items-center">
      <Link href="#hero">
        <Image
          src={`/static/brand-logo.png`}
          alt="brand logo"
          width="40"
          height="40"
          className="w-auto transition-transform duration-300 hover:-translate-y-1"
        />
      </Link>
      <div>
        <span className="mr-2">Nicolis Yuvienco</span>
        <span>{currentYear}</span>
      </div>
    </div>
  )
}
