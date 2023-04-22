import Image from "next/image";
import { Text, Heading } from "./Text";
import homepageMission from "/public/assets/images/homepage-mission.png";

export default function Mission() {
  return (
    <section className="pb-36 md:pb-52 lg:pb-[6.25rem] xl:pb-[7.8125rem]">
      <section className="w-full">
        <section className="mx-auto max-w-[510px] md:max-w-[1380px] relative px-5 md:px-8 md:text-right">
          <article className="lg:absolute lg:top-0 lg:right-0 lg:z-10">
            <Text
              size="overline"
              color="accent"
              className="relative left-14 md:-left-96"
            >
              Mission
            </Text>
            <Heading
              size="sectionXl"
              className="mb-10 md:mb-[3.125rem] mt-[-0.25rem] pr-8"
            >
              Our Mission
            </Heading>
          </article>
        </section>
        <section className="mx-auto flex flex-col-reverse lg:flex-row">
          <section className="mx-auto lg:mx-0 lg:w-1/2 pr-10 pl-5 md:px-8 lg:pl-0">
            <div className="relative">
              <div className="flex justify-end">
                <Image quality={100} src={homepageMission} alt="" />
              </div>
              <div
                className="relative md:absolute bottom-0 right-0 md:max-w-[548px] w-full min-h-[60px] md:min-h-[72px] p-[1.125rem] bg-academy-gold flex items-center
              after:content-[''] after:border-t-[3px] after:border-r-[3px] after:border-academy-green after:absolute after:w-[80%] md:after:w-[408px] after:h-[120%] after:top-[-3px] after:-right-5
              "
              >
                <Text
                  as="h3"
                  size="statement"
                  color="bright"
                  className="md:w-2/3"
                >
                  Study at your own pace
                </Text>
              </div>
              <div className="absolute w-full right-0 after:content-[''] after:border-b-[3px] after:border-r-[3px] after:border-academy-green after:absolute after:w-[25%] md:after:w-[130px] after:h-full after:top-0 after:-right-5 pt-6"></div>
            </div>
          </section>
          <section className="mx-auto md:mx-0 lg:w-1/2 px-5 md:px-8 lg:pr-0 mb-10 md:mb-[3.75rem] xl:mb-0 ">
            <div className="xl:flex justify-start">
              <div className="lg:pr-8 xl:w-[690px] flex justify-start flex-col lg:justify-start">
                <section className="flex lg:justify-start max-w-[690px] md:ml-24 lg:ml-0 lg:mt-[172px]">
                  <article className="max-w-[460px] md:max-w-[478px]">
                    <Heading size="sectionSub" className="mb-[1.875rem]">
                      To elevate industry standards and promote
                      <span className="text-academy-gold">
                        {" "}
                        continuous learning{" "}
                      </span>
                    </Heading>
                    <Text as="p" family="secondary" className="mb-8">
                      To help students, businesses, professionals, and aspiring
                      entrepreneurs evolve and grow in their personal and
                      professional lives by building a supportive and mutually
                      beneficial community of like-minded individuals.
                    </Text>
                  </article>
                </section>
              </div>
            </div>
          </section>
        </section>
      </section>
    </section>
  );
}
