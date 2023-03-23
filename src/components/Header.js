import Image from "next/image";
import Link from "next/link";
import evolutzAcademyLogo from "../assets/logo/evolutz-academy-logo.png";

export default function Header() {
  return (
    <header className="bg-white/10 py-[0.25rem] px-8">
      <section className="flex justify-between max-w-[1180px] mx-auto">
        <Link href="/">
          <Image
            width={70}
            src={evolutzAcademyLogo}
            alt="evolutz academy logo"
          />
        </Link>

        <nav className="hidden min-[860px]:flex">
          <ul className="flex gap-8">
            <li className="flex items-center">
              <Link href="/" className="text-xs font-medium">
                HOME
              </Link>
            </li>
            <li className="flex items-center">
              <Link href="/about-course" className="text-xs font-medium">
                ABOUT COURSE
              </Link>
            </li>
            <li className="flex items-center">
              <Link href="/about-course" className="text-xs font-medium">
                CONTACT US
              </Link>
            </li>
          </ul>
        </nav>
        <div className="hidden min-[860px]:flex items-center gap-8">
          <a href="mailto:service@evolutz.com" className="text-xs font-medium">
            SERVICE@EVOLUTZ.COM
          </a>
          <a
            href="https://evolutzacademy.teachable.com/"
            className="border-solid border-2 px-8 py-5 text-xs font-medium"
          >
            START LEARNING
          </a>
        </div>
        <div className="min-[860px]:hidden flex items-center">
          <div class="space-y-2">
            <div class="w-8 h-0.5 bg-gray-600"></div>
            <div class="w-8 h-0.5 bg-gray-600"></div>
            <div class="w-8 h-0.5 bg-gray-600"></div>
          </div>
        </div>
      </section>
    </header>
  );
}
