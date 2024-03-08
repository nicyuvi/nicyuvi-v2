import { ModeToggle } from "@/components/ui/mode-toggle";
import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  return (
    <nav className="flex justify-between items-center shadow-[rgba(0,0,0,0.2)_0px_5px_10px_0px] py-2">
      <Image src={`/brand-logo.png`} alt="brand logo" width="60" height="60" />
      <ul className="flex items-center">
        <li className="mr-4">
          <Link href="experience">Experience</Link>
        </li>
        <li className="mr-4">
          <Link href="projects">Projects</Link>
        </li>
        <li className="mr-4">
          <Link href="about">About</Link>
        </li>
        <li className="mr-4">
          <Link href="contact">Contact</Link>
        </li>
        <li>
          <ModeToggle />
        </li>
      </ul>
    </nav>
  );
}
