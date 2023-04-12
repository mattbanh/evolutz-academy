import Image from "next/image";
import { Text, Heading } from "./Text";
import homepageBenefits from "/public/assets/images/homepage-benefits.png";

export default function Benefits() {
  const benefits = [
    "Exposure to potential jobs and employer opportunities through Evolutz's network and contacts",
    "Exclusive, custom, and authentic approach to students and their needs",
    "Efficient planning, response, and project managementdevelopment skills",
  ];

  return (
    <section className="px-5 mb-20 md:mb-[6.25rem] xl:mb-[7.1825rem]">
      <section className="mx-auto xl:max-w-[1380px]">
        <div className="mx-auto xl:mx-0 xl:max-w-[1220px] max-w-[610px] flex flex-col gap-12 xl:flex-row xl:gap-0">
          <div className="xl:w-1/2">
            <Image src={homepageBenefits} alt="" />
          </div>
          <article className="md:mx-auto py-8 pr-6 md:pr-0 border-y border-r border-academy-gold md:w-[610px] xl:w-1/2">
            <div className="mx-auto mb-4 md:text-center max-w-[440px]">
              <Text
                size="overline"
                color="accent"
                className="relative left-16 md:left-8"
              >
                We Offer
              </Text>
              <Heading size="sectionXl" className="mt-[-0.25rem]">
                Benefits
              </Heading>
            </div>
            <div
              className="mx-auto relative flex flex-col justify-center min-h-[400px] py-12 md:py-0 pl-6 md:pl-12 max-w-[460px] border-t-[3px] border-l-[3px] border-academy-green
                    after:absolute after:bottom-0 after:left-0 after:w-1/2 after:border-b-[3px] after:border-academy-green"
            >
              <ul className="list-['—'] mb-8 ml-4">
                {benefits.map((benefit, i) => (
                  <li key={i} className="text-academy-gold pl-5 mb-4">
                    <Text size="list" color="primary">
                      {benefit}
                    </Text>
                  </li>
                ))}
              </ul>
              <a href="https://evolutzacademy.teachable.com/" target="_blank">
                <button className="px-12 py-5 w-full bg-academy-blue">
                  <Text size="button" color="bright">
                    Start Learning
                  </Text>
                </button>
              </a>
            </div>
          </article>
        </div>
      </section>
    </section>
  );
}
