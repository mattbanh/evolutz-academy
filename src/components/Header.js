import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import evolutzAcademyLogo from "/public/assets/logo/evolutz-academy-logo.png";
import NavLink from "./NavLink";

export default function Header({ handleClick }) {
  const { pathname } = useRouter();
  const navMenu = [
    { title: "Home", path: "/" },
    { title: "About Course", path: "/about-course" },
    { title: "Contact Us", path: "/contact-us" },
  ];

  return (
    <header className="bg-white/30 backdrop-blur-sm py-[0.25rem] px-5 min-[860px]:px-8 z-10">
      <section className="flex justify-between max-w-[1180px] mx-auto">
        <Link href="/">
          <Image
            src={evolutzAcademyLogo}
            alt="evolutz academy logo"
            className="w-[4.375rem]"
          />
        </Link>
        <nav className="hidden min-[860px]:flex">
          <ul className="flex gap-8">
            {navMenu.map((navLink, i) => (
              <NavLink
                key={i}
                title={navLink.title}
                path={navLink.path}
                pathname={pathname}
              />
            ))}
          </ul>
        </nav>
        <div className="hidden min-[860px]:flex items-center gap-8">
          <a
            href="mailto:service@evolutz.com"
            className="text-xs font-medium hover:text-academy-hover ease-in-out duration-150"
          >
            SERVICE@EVOLUTZ.COM
          </a>
          <a
            href="https://evolutzacademy.teachable.com/"
            target="_blank"
            className="border-solid border-2 border-evolutz-black hover:border-academy-hover px-8 py-5 text-xs font-medium hover:text-academy-hover ease-in-out duration-150"
          >
            START LEARNING
          </a>
        </div>
        <div
          className="min-[860px]:hidden flex items-center"
          onClick={handleClick}
        >
          <div className="space-y-2 space">
            <div className="w-8 h-0.5 bg-gray-600"></div>
            <div className="w-8 h-0.5 bg-gray-600"></div>
            <div className="w-8 h-0.5 bg-gray-600"></div>
          </div>
        </div>
      </section>
    </header>
  );
}
