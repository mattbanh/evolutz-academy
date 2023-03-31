import Image from "next/image";
import { Text } from "./Text";
import personIcon from "../assets/icons/differentiator-person-icon.svg";
import brandingIcon from "../assets/icons/differentiator-branding-icon.svg";
import growthIcon from "../assets/icons/differentiator-growth-icon.svg";

export default function Differentiator() {
  return (
    <section
      className="mb-20 py-12 px-5 md:px-8 
        bg-no-repeat bg-cover bg-[position:12%] lg:bg-[position:0px] bg-[url('../assets/images/homepage-differentiator.png')]"
    >
      <section className="mx-auto max-w-[510px] md:max-w-[1380px] relative">
        <article>
          <Text size="overline" color="accentSub" className="relative left-16">
            Differentiator
          </Text>
          <h2 className="mt-[-0.25rem] uppercase max-[767px]:text-[1.75rem] font-semibold min-[820px]:text-[4rem] max-[820px]:text-[7.8vw] leading-[2.125rem] md:leading-[4.875rem]">
            Our Differentiator
          </h2>
        </article>
      </section>
      <section className="mx-auto max-w-md lg:max-w-[1380px]">
        <ul className="mx-auto flex flex-col lg:flex-row gap-9 xl:gap-[80px] py-12 lg:max-w-[1180px]">
          <li className="flex gap-6">
            <div className="w-full max-w-[3.25rem] lg:pt-3 flex items-center lg:items-start">
              <Image src={growthIcon} alt="" />
            </div>
            <Text as="p" family="secondary" size="list">
              Quarterly activities to facilitate additional growth, networking,
              and education.
            </Text>
          </li>
          <li className="flex gap-6">
            <div className="w-full max-w-[3.25rem] lg:pt-1 flex items-center lg:items-start">
              <Image src={brandingIcon} alt="" />
            </div>
            <Text as="p" family="secondary" size="list">
              Personal branding and photography packages to kickstart
              professional Linkedin presence.
            </Text>
          </li>
          <li className="flex gap-6">
            <div className="w-full max-w-[3.25rem] lg:pt-1 flex items-center lg:items-start">
              <Image src={personIcon} alt="" />
            </div>
            <Text as="p" family="secondary" size="list">
              Personal one-on-one coaching packages available from our founder
              and other featured mentors.
            </Text>
          </li>
        </ul>
      </section>
    </section>
  );
}
