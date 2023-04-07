import Image from "next/image";
import { Text, Heading } from "./Text";
import founder from "/public/assets/images/about-hero.png";

export default function AboutHero() {
  return (
    <section className="mb-36 lg:mb-28  px-5 md:px-8">
      <section className="mx-auto xl:max-w-[1280px] flex flex-col lg:flex-row">
        <section className="lg:w-1/2 lg:pr-6 mb-12 md:mb-8 lg:mb-0">
          <article className="mb-8">
            <Text
              size="overline"
              color="accent"
              className="relative left-20 md:left-40"
            >
              About
            </Text>
            <Heading as="h1" size="aboutPage">
              About Course
            </Heading>
          </article>
          <section className="flex w-full lg:justify-end">
            <article className="mx-auto lg:mx-0 max-w-[530px]">
              <Heading size="sectionSub" className="mb-6 pr-16 md:pr-20">
                Evolutz Academy Course for students
              </Heading>
              <Text as="p" family="secondary">
                While attending a reputable institution and performing well
                academically are certainly foundational to future success,
                learning how to market yourself to prospective employers is now
                instrumental to differentiate yourself from other candidates.
                Evolutz Academy acknowledges that there is no single solution to
                this dilemma; a one-size-fits-all approach to professional
                development will usually fail to meet your expectations.
                <br /> <br />
                Nevertheless, the modules of this course will provide you with a
                wide array of (tried and tested) materials to help you navigate
                the daunting (but also exciting) journey of carving out your
                professional path. Some of our suggestions will seem obvious
                and/or repetitive, while others will truly inspire you.
              </Text>
            </article>
          </section>
        </section>
        <section className="mx-auto lg:w-1/2 pl-5 md:px-8 lg:pl-16 lg:pr-0">
          <div className="relative">
            <Image
              priority
              src={founder}
              alt="Suzanna Alsayed, the founder of Evolutz Academy"
            />
            <div
              className="relative w-full md:absolute bottom-0 left-0 md:max-w-[548px] min-h-[60px] md:min-h-[72px] p-[1.125rem] bg-academy-gold flex items-center
              after:content-[''] after:border-t-[3px] after:border-l-[3px] after:border-academy-green after:absolute after:w-[80%] md:after:w-[408px] after:h-[120%] after:top-[-3px] after:-left-5
              "
            >
              <Text
                as="h3"
                size="statement"
                color="bright"
                className="md:w-2/3"
              >
                Suzanna Alsayed
              </Text>
            </div>
            <div className="max-w-[548px] absolute after:content-[''] after:border-b-[3px] after:border-l-[3px] after:border-academy-green after:absolute after:w-[25%] md:after:w-[130px] after:h-full after:top-0 after:-left-5">
              <div className="px-4 pt-4 pb-6 ">
                <Text as="p" size="bodySub" family="secondary">
                  “The only person you should compare yourself to is the person
                  you used to be in the past. Keep growing”
                </Text>
              </div>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
}
