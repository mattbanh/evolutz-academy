import Image from "next/image";
import { Text, Heading } from "./Text";
import HomepageAbout from "../assets/images/homepage-about.png";

export default function About() {
  return (
    <section className="py-20 md:py-[7.8125rem]">
      <div className="w-full">
        <div className="relative mx-auto flex flex-col lg:flex-row">
          <div className="mx-auto md:mx-0 lg:w-1/2 px-5 md:px-8 lg:pr-0 mb-10 md:mb-[3.75rem] xl:mb-0">
            {/* <div className="xl:max-w-[690px] "> */}
            <div className="lg:absolute">
              <Text size="overline" color="accent" className="ml-24 md:ml-52">
                About Us
              </Text>
              <Heading size="sectionXl" className="mt-[-0.25rem]">
                About
              </Heading>
              <Heading
                as="h3"
                size="sectionLg"
                className="mb-10 md:mb-[3.125rem] ml-16 md:ml-24 md:mt-[-0.625rem]"
              >
                Evolutz Academy
              </Heading>
            </div>
            <section className="flex justify-center max-w-[690px] lg:mt-[230px]">
              <article className="max-w-[470px]">
                <Heading
                  size="sectionSub"
                  className="mb-[1.875rem] pr-16 md:pr-24"
                >
                  Was founded in 2022 due to
                  <span className="text-academy-gold"> increased demand </span>
                  for
                  <span className="text-academy-gold"> personal branding</span>
                </Heading>
                <Text as="p" family="secondary">
                  The Academy provides affordable academic and professional
                  resources to a broad demographic. Course offerings focus on
                  personal/professional branding and development, corporate
                  growth, social media management, content creation, and more.
                </Text>
              </article>
            </section>
            {/* </div> */}
          </div>
          <div className="mx-auto lg:mx-0 lg:w-1/2 xl:pl-8 px-5 md:px-8 lg:px-0 lg:pt-16">
            <Image
              width={1000}
              src={HomepageAbout}
              alt=""
              className=" object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
