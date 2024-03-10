import { ModeToggle } from "@/components/ui/mode-toggle";
import Link from "next/link";
import Image from "next/image";

type NavBarProps = {
  displayClass: string;
};

export default function NavBar({ displayClass }: NavBarProps) {
  return (
    <nav
      className={`${displayClass} justify-between items-center shadow-[rgba(0,0,0,0.2)_0px_5px_10px_0px] py-2`}
    >
      <Link href="/" className="flex items-center">
        <Image
          src={`/brand-logo.png`}
          alt="brand logo"
          width="40"
          height="40"
          className="mr-2"
        />
        <h1 className="font-bold">Nicolis Yuvienco</h1>
      </Link>
      <ul className="flex items-center">
        <li className="mr-4">
          <Link href="#experience">Experience</Link>
        </li>
        <li className="mr-4">
          <Link href="#projects">Projects</Link>
        </li>
        <li className="mr-4">
          <Link href="#about">About</Link>
        </li>
        <li className="mr-4">
          <Link href="#contact">Contact</Link>
        </li>
        <li>
          <ModeToggle />
        </li>
      </ul>
    </nav>
  );
}
