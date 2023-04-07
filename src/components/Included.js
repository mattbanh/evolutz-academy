import Image from "next/image";
import { Text, Heading } from "./Text";
import included from "/public/assets/images/about-included.png";

export default function Included() {
  const includedItems = [
    "Short and concise courses that you can immediately apply to your current brand (can be completed at your own pace!)",
    "Online materials (PDF)",
    "Online agendas and calendars",
    "Notebooks/Agendas (for purchase)",
    "Course completion certificate (provided at the end of the course",
  ];

  return (
    <section className="px-5 mb-20 md:mb-[6.25rem] xl:mb-[7.1825rem]">
      <section className="mx-auto xl:max-w-[1380px]">
        <article className="mb-8">
          <Text
            size="overline"
            color="accent"
            className="relative left-9 md:left-14"
          >
            Included
          </Text>
          <Heading as="h2" size="section">
            What’s Included
          </Heading>
        </article>
        <div className="mx-auto max-w-[560px] xl:max-w-[1120px] ">
          <div className="md:max-w-[560px] mb-9">
            <Heading as="h3" size="sectionSub" className="mb-6">
              As part of
              <span className="text-academy-gold"> course registration </span>,
              you will receive the following
            </Heading>
          </div>
          <section className="flex flex-col gap-10 xl:flex-row xl:gap-0">
            <div
              className="flex justify-end relative py-6 pl-6 xl:w-1/2 before:absolute before:left-0 before:top-0 before:h-full before:w-4/5 before:border-academy-green before:border-t-[3px] before:border-l-[3px]
                after:absolute after:bottom-0 after:left-0 after:w-1/5 after:border-b-[3px] after:border-academy-green"
            >
              <Image src={included} alt="" className="object-contain" />
            </div>
            <article className="md:mx-auto p-12 xl:w-1/2 border border-academy-gold ">
              <ul className="list-['—'] mb-12 ml-4 flex flex-col gap-6 md:gap-8">
                {includedItems.map((item, i) => (
                  <li key={i} className="text-academy-gold pl-5">
                    <Text size="list" color="primary" family="secondary">
                      {item}
                    </Text>
                  </li>
                ))}
              </ul>
              <div className="flex justify-center">
                <a href="https://evolutzacademy.teachable.com/" target="_blank">
                  <button className="px-12 py-5 w-[270px] bg-academy-blue">
                    <Text size="button" color="bright">
                      Buy Course
                    </Text>
                  </button>
                </a>
              </div>
            </article>
          </section>
        </div>
      </section>
    </section>
  );
}
