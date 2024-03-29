import SectionHeader from '@/components/ui/section-header'
import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  return (
    <>
      <SectionHeader>About Me</SectionHeader>
      <div className="flex flex-col sm:flex-row">
        <div className="sm:mr-8 sm:w-1/2">
          <p className="mb-4">
            Hello! I&apos;m Nicolis, a Full-Stack Engineer based in Los Angeles,
            CA.
          </p>
          <p className="mb-4">
            I graduated from{' '}
            <strong className="transform-color duration-200 hover:text-[#FFC72A]">
              California State University, Long Beach
            </strong>{' '}
            with a B.A. in Geography and a concentration in Information Systems.
            Since then, I have been learning the latest web technologies and
            practices to become a detail oriented software engineer who is
            passionate about writing{' '}
            <strong className="transform-color duration-200 hover:text-primary">
              clean code with beautiful design
            </strong>
            . I love to channel my creativity through front-end web development
            and design by building anything from simple landing pages to
            progressive web applications.
          </p>
          <p className="mb-4">
            <strong className="transform-color duration-200 hover:text-primary">
              When I&apos;m not developing
            </strong>
            , I&apos;m probably surfing, hiking, or playing with my cat.
          </p>
        </div>
        <div className="mb-4 sm:w-1/2">
          <Image
            src={`/static/profile-img.jpg`}
            alt="profile"
            width="500"
            height="500"
            className="w-auto"
          />
        </div>
      </div>
      <SectionHeader>Tools I Use</SectionHeader>
      <ul className="list-disc">
        <li>
          Custom Built PC:
          <Link
            href="https://pcpartpicker.com/user/nicyuvi/saved/N7qZcf"
            target="_blank"
            className="ml-2 hover:text-primary"
          >
            Specs HERE
          </Link>
        </li>
        <li>
          Laptop: Lenovo X1 Carbon (6th gen) Intel Core i7-8550U, 16gb RAM, 1tb
          NVMe-PCIe SSD
        </li>
        <li>Chair: Hyken Ergonomic Mesh Swivel Task Chair</li>
        <li>Desk: 48&quot; plain black wooden desk</li>
        <li>Monitor mounts: HUANUO Dual Monitor Stand</li>
        <li>Monitors: Sceptre 27&quot; 240Hz // Samsung 24&quot; 60Hz</li>
        <li>
          Keyboard: Keychron K6 65% // Cherry MX Red switches // lubed and tuned
        </li>
        <li>Mouse: Logitech G305 Lightspeed Wireless</li>
        <li>Mousepad: Logitech G240</li>
        <li>Mic: Hyper X Quadcast RGB</li>
      </ul>
    </>
  )
}
