'use client'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    })
  }

  return (
    <div className="flex flex-col items-center">
      <Image
        src={`/static/brand-logo.png`}
        alt="brand logo"
        width="40"
        height="40"
        className="w-auto transition-transform duration-300 hover:-translate-y-1"
        onClick={scrollToTop}
      />
      <div>
        <span className="mr-2">Nicolis Yuvienco</span>
        <span>{currentYear}</span>
      </div>
    </div>
  )
}
