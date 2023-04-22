import Image from "next/image";
import Link from "next/link";
import evolutzAcademyLogo from "/public/assets/logo/evolutz-academy-logo.png";

export default function Header({ handleClick, openMobileMenu }) {
  return (
    <section
      className={
        openMobileMenu
          ? "w-full h-full absolute z-50 top-0 left-0 flex bg-black/30 animate-fadein"
          : "hidden"
      }
    >
      <section
        className={
          openMobileMenu
            ? "flex flex-col gap-9 px-5 pt-[0.25rem] bg-mobile-menu h-screen w-2/3 relative animate-slidein"
            : "flex flex-col gap-9 px-5 pt-[0.25rem] bg-mobile-menu h-screen w-2/3 relative -translate-x-full transition duration-300"
        }
      >
        <div>
          <Link href="/" className="inline-block" onClick={handleClick}>
            <Image
              width={70}
              src={evolutzAcademyLogo}
              alt="evolutz academy logo"
            />
          </Link>
        </div>
        <nav className="flex px-2">
          <ul className="flex flex-col gap-8">
            <li>
              <Link
                href="/"
                className="text-xs font-medium"
                onClick={handleClick}
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                href="/about-course"
                className="text-xs font-medium"
                onClick={handleClick}
              >
                ABOUT COURSE
              </Link>
            </li>
            <li>
              <Link
                href="/contact-us"
                className="text-xs font-medium"
                onClick={handleClick}
              >
                CONTACT US
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-8">
          <a
            href="https://evolutzacademy.teachable.com/"
            target="_blank"
            className="border-solid border-2 border-evolutz-black px-6 py-5 text-xs font-medium"
          >
            START LEARNING
          </a>
        </div>
        <div className="absolute right-5 top-8 text-2xl" onClick={handleClick}>
          ✕
        </div>
      </section>
    </section>
  );
}
