import Image from "next/image";
import { Text, Heading } from "./Text";
import homepageFounder from "../assets/images/homepage-founder.png";

export default function Testimonials() {
  return (
    <section className="px-5 mb-20 md:mb-[6.25rem] xl:mb-[7.1825rem]">
      <section className="mx-auto xl:max-w-[1380px]">
        <article className="mb-12">
          <Text
            size="overline"
            color="accent"
            className="relative left-32 md:left-72"
          >
            Our Students
          </Text>
          <Heading size="sectionXl" className="mt-[-0.25rem]">
            Testimonials
          </Heading>
        </article>
        <section className="flex flex-col items-center xl:flex-row xl:justify-center xl:items-stretch gap-8 xl:gap-12">
          <article className="px-6 py-8 max-w-[570px] flex-1 border border-academy-gold">
            <h3 className="mb-1 font-nunito font-bold text-[1.1875rem] md:text-2xl text-academy-blue">
              Michael Gips, JD, CPP, CSyP, CAE
            </h3>
            <h4 className="mb-6 font-nunito italic md:text-[1.25rem] text-evolutz-black">
              Founder, Security Expert, Attorney & Content Specialist
            </h4>
            <Text as="p" family="secondary" className="leading-7">
              Suzanna has become a significant force and presence in both the
              security and branding fields, commanding a tremendous amount of
              influence. She has shaken the old guard of security out of their
              slumber by innovating an approach to brand management in security
              and other fields that these industries sorely need. Indefatigable
              and always authentic, Suzanna brings insight and enthusiasm into
              every one of her engagements. She has personally helped me extend
              my audience on LinkedIn by imparting the lesser-known benefits of
              a wider reach, explaining the algorithms behind the platform, and
              by providing general branding advice that keeps me up with this
              fast-evolving field.
            </Text>
          </article>
          <article className="px-6 py-8 max-w-[570px] border flex-1 border-academy-gold">
            <h3 className="mb-1 font-nunito font-bold text-[1.1875rem] md:text-2xl text-academy-blue">
              Ashley Mejia
            </h3>
            <h4 className="mb-6 font-nunito italic md:text-[1.25rem] text-evolutz-black">
              Research Fellow | University of Central Florida
            </h4>
            <Text as="p" family="secondary" className="leading-7">
              I invited Suzanna to guest speak for my criminal justice
              pre-professional fraternity, American Criminal Justice
              Association–Lambda Alpha Epsilon, at the University of Central
              Florida. Suzanna kindly advised my members, who are Freshman –
              Senior Undergraduate students, to partake in internships to
              strengthen their skills and emphasise the importance of networking
              with other professionals in our desired field. In addition,
              Suzanna encouraged my members to never give up on our goals and to
              absolutely try our best to work hard for what we want. Suzanna is
              one of the most enthusiastic and dedicated people that I have met,
              and she truly strives to assist others in succeeding in their
              career endeavours. I highly recommend conversating with Suzanna
              and collaborating with Evolutz!
            </Text>
          </article>
        </section>
      </section>
    </section>
  );
}
