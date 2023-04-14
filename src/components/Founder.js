import { useState, useEffect } from "react";
import Image from "next/image";
import { Text, Heading } from "./Text";
import homepageFounder from "/public/assets/images/homepage-founder.png";
import CounterSection from "./CounterSection";

export default function Founder() {
  return (
    <>
      <section className="mb-36 lg:mb-28">
        <section className="w-full">
          <section className="mx-auto max-w-[510px] md:max-w-[1380px] relative px-5 md:px-8">
            <article className="lg:absolute lg:top-0 lg:z-10">
              <Text
                size="overline"
                color="accent"
                className="relative left-20 md:left-52"
              >
                Founder
              </Text>
              <Heading size="sectionXl" className="mt-[-0.25rem]">
                About
              </Heading>
              <Heading
                as="h3"
                size="sectionLg"
                className="relative left-16 md:left-20 mb-10 md:mb-[3.125rem]  md:mt-[-0.625rem]"
              >
                The Founder
              </Heading>
            </article>
          </section>
          <section className="mx-auto flex flex-col lg:flex-row">
            <section className="mx-auto md:mx-0 lg:w-1/2 px-5 md:px-8 lg:pr-0 mb-10 md:mb-[3.75rem] lg:mb-0 ">
              <div className="xl:flex justify-end">
                <div className="lg:pr-6 xl:w-[690px] flex justify-start lg:justify-end">
                  <section className="flex lg:justify-end max-w-[690px] md:ml-24 lg:ml-0 lg:mt-[230px]">
                    <article className="max-w-[470px]">
                      <Heading
                        size="sectionSub"
                        className="mb-[1.875rem] pr-16 md:pr-20"
                      >
                        Suzanna Alsayed
                      </Heading>
                      <Text as="p" family="secondary" className="mb-8">
                        Suzanna Alsayed is the Founder and CEO of Evolutz Inc.
                        Her aim is to elevate industry branding standards and
                        help companies and professionals gain a competitive
                        edge, expand their client reach, and increase revenue.
                      </Text>
                      <Text as="p" family="secondary" className="mb-8">
                        Named #2 in 2020 for the IFSEC Global Top Influencers in
                        Security & Fire in the “Commercial Security Association
                        Figures/Academics/Thought Leaders” category
                      </Text>
                      <Text as="p" family="secondary">
                        Top 30 under 30 Alumni for York University (2022)
                      </Text>
                    </article>
                  </section>
                </div>
              </div>
            </section>
            <section className="mx-auto lg:mx-0 lg:w-1/2 pl-10 pr-5 md:px-8 lg:pr-0">
              <div className="relative">
                <Image
                  src={homepageFounder}
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
                <div className="absolute after:content-[''] after:border-b-[3px] after:border-l-[3px] after:border-academy-green after:absolute after:w-[25%] md:after:w-[130px] after:h-full after:top-0 after:-left-5">
                  <div className="px-4 pt-4 pb-6 ">
                    <Text as="p" size="bodySub" family="secondary">
                      Top 25 Influencers by International Security Journal (2021
                      & 2022)
                    </Text>
                  </div>
                </div>
              </div>
            </section>
          </section>
        </section>
      </section>
      <CounterSection />
    </>
  );
}
