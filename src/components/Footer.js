import Image from "next/image";
import Link from "next/link";
import { Text, Heading } from "./Text";
import evolutzAcademyLogo from "/public/assets/logo/evolutz-academy-logo-white.png";
import linkedinIcon from "/public/assets/icons/linkedin-icon.png";
import instagramIcon from "/public/assets/icons/instagram-icon.png";
import websiteIcon from "/public/assets/icons/website-icon.png";

export default function Footer() {
  return (
    <footer className="bg-academy-blue px-5 min-[860px]:px-8 py-8 min-h-[214px]">
      <section className="flex flex-col md:flex-row max-w-[1180px] mx-auto mb-8">
        <div className="w-full md:w-1/2 lg:w-[40%] flex">
          <Link href="/" className="w-2/3 md:w-[45%]">
            <Image
              width={70}
              src={evolutzAcademyLogo}
              alt="evolutz academy logo"
            />
          </Link>
          <div className="pb-4 md:pt-4 flex flex-col gap-1">
            <nav className="flex flex-col gap-4">
              <Heading as="h6" size="footer" color="bright">
                Links
              </Heading>
              <ul className="flex flex-col gap-1">
                <li className="flex items-center">
                  <Link href="/about-course">
                    <Text size="footer" color="bright">
                      About Course
                    </Text>
                  </Link>
                </li>
                <li className="flex items-center">
                  <Link href="/contact-us">
                    <Text size="footer" color="bright">
                      Contact Us
                    </Text>
                  </Link>
                </li>
              </ul>
            </nav>
            <nav className="flex flex-col gap-4 lg:hidden">
              <ul className="flex flex-col gap-1">
                <li className="flex items-center">
                  <Link href="/privacy policy">
                    <Text size="footer" color="bright">
                      Privacy Policy
                    </Text>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-[45%] flex">
          <section className="w-2/3 lg:w-1/2 flex flex-col gap-4 py-4">
            <Heading as="h6" size="footer" color="bright">
              Contact Us
            </Heading>
            <div className="flex flex-col gap-4">
              <a href="mailto:service@evolutz.com">
                <Text size="footer" color="bright" className="uppercase">
                  service@evolutz.com
                </Text>
              </a>
              <Link href="/contact-us">
                <button className="border border-white py-2 px-6 md:px-8">
                  <span className="uppercase text-white font-semibold text-xs">
                    Request a Call
                  </span>
                </button>
              </Link>
            </div>
          </section>
          <section className="flex flex-col gap-4 py-4">
            <Heading as="h6" size="footer" color="bright">
              Social Media
            </Heading>
            <div className="flex gap-2">
              <a
                href="https://www.linkedin.com/company/evolutz-academy/"
                target="_blank"
              >
                <Image src={linkedinIcon} alt="" />
              </a>
              <a
                href="https://www.instagram.com/evolutzacademy/"
                target="_blank"
              >
                <Image src={instagramIcon} alt="" />
              </a>
              <a href="https://evolutzacademy.teachable.com/" target="_blank">
                <Image src={websiteIcon} alt="" />
              </a>
            </div>
          </section>
        </div>
        <nav className="hidden lg:flex lg:flex-col gap-4 py-4">
          <Heading as="h6" size="footer" color="bright">
            More Links
          </Heading>
          <ul className="flex flex-col gap-1">
            <li className="flex items-center">
              <Link href="/privacy-policy">
                <Text size="footer" color="bright">
                  Privacy Policy
                </Text>
              </Link>
            </li>
          </ul>
        </nav>
      </section>
      <div className="mx-auto max-w-[1180px] flex justify-center">
        <Text size="footer" color="bright">
          © All rights reserved
        </Text>
      </div>
    </footer>
  );
}
