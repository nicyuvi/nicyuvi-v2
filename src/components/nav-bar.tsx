import { ModeToggle } from "@/components/ui/mode-toggle";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex justify-between">
      <i>brand</i>
      <ul className="flex">
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
