import Image from "next/image";
import { Text, Heading } from "./Text";
import HomepageAbout from "../assets/images/homepage-about.png";
import Link from "next/link";

export default function About() {
  return (
    <section className="py-20 md:pt-[6.25rem] pb-48 md:pb-52 lg:pb-[6.25rem] xl:py-[7.8125rem]">
      <section className="w-full">
        <section className="mx-auto max-w-[510px] md:max-w-[1380px] relative px-5 md:px-8">
          <article className="lg:absolute lg:top-0 lg:z-10">
            <Text
              size="overline"
              color="accent"
              className="relative left-20 md:left-52"
            >
              About Us
            </Text>
            <Heading size="sectionXl" className="mt-[-0.25rem]">
              About
            </Heading>
            <Heading
              as="h3"
              size="sectionLg"
              className="relative left-16 md:left-20 mb-10 md:mb-[3.125rem]  md:mt-[-0.625rem]"
            >
              Evolutz Academy
            </Heading>
          </article>
        </section>
        <section className="mx-auto flex flex-col lg:flex-row">
          <div className="mx-auto md:mx-0 lg:w-1/2 px-5 md:px-8 lg:pr-0 mb-10 md:mb-[3.75rem] xl:mb-0 ">
            <div className="xl:flex justify-end">
              <div className="lg:pr-6 xl:w-[690px] flex justify-start lg:justify-end">
                <section className="flex lg:justify-end max-w-[690px] md:ml-24 lg:ml-0 lg:mt-[230px]">
                  <article className="max-w-[470px]">
                    <Heading
                      size="sectionSub"
                      className="mb-[1.875rem] pr-16 md:pr-20"
                    >
                      Was founded in 2022 due to
                      <span className="text-academy-gold">
                        {" "}
                        increased demand{" "}
                      </span>
                      for
                      <span className="text-academy-gold">
                        {" "}
                        personal branding
                      </span>
                    </Heading>
                    <Text as="p" family="secondary" className="mb-8">
                      The Academy provides affordable academic and professional
                      resources to a broad demographic. Course offerings focus
                      on personal/professional branding and development,
                      corporate growth, social media management, content
                      creation, and more.
                    </Text>
                    <Link
                      href="/about-course"
                      className="flex justify-center md:justify-start"
                    >
                      <button className="px-12 py-5 bg-academy-blue">
                        <Text size="button" color="bright">
                          Learn More
                        </Text>
                      </button>
                    </Link>
                  </article>
                </section>
              </div>
            </div>
          </div>
          <div className="mx-auto lg:mx-0 lg:w-1/2 pl-10 pr-5 md:px-8 lg:pr-0 lg:pt-16">
            <div className="relative">
              <Image
                width={1000}
                src={HomepageAbout}
                alt=""
                className=" object-cover"
              />
              <div
                className="relative md:absolute bottom-0 left-0 md:w-[548px] min-h-[60px] md:min-h-[72px] p-[1.125rem] bg-academy-gold flex items-center
              after:content-[''] after:border-t-[3px] after:border-l-[3px] after:border-academy-green after:absolute after:w-[80%] md:after:w-[408px] after:h-[120%] after:top-[-3px] after:-left-5
              "
              >
                <Text
                  as="h3"
                  size="statement"
                  color="bright"
                  className="md:w-2/3"
                >
                  We&apos;ll provide knowledge that you can use in real life
                </Text>
              </div>
              <div className="absolute after:content-[''] after:border-b-[3px] after:border-l-[3px] after:border-academy-green after:absolute after:w-[25%] md:after:w-[130px] after:h-full after:top-0 after:-left-5">
                <div className="px-4 pt-4 pb-6 ">
                  <Text
                    as="p"
                    size="bodySub"
                    family="secondary"
                    className="md:w-2/3"
                  >
                    Our goal is to provide in-demand courses on key trends that
                    can apply to any industry.
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
}
