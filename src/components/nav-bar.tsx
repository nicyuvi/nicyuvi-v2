import { ModeToggle } from "@/components/ui/mode-toggle";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/lib/constants";

type NavBarProps = {
  displayClass: string;
};

export default function NavBar({ displayClass }: NavBarProps) {
  console.log(NAV_LINKS);
  return (
    <nav
      className={`${displayClass} fixed top-0 right-0 left-0 backdrop-blur justify-between items-center shadow-[rgba(0,0,0,0.2)_0px_5px_10px_0px] py-2`}
    >
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
    </nav>
  );
}
