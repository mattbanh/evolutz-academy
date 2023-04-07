import Image from "next/image";
import { Text } from "./Text";

export default function Differentiator() {
  const differentiators = [
    {
      icon: "/assets/icons/differentiator-growth-icon.svg",
      text: "Quarterly activities to facilitate additional growth, networking, and education.",
    },
    {
      icon: "/assets/icons/differentiator-branding-icon.svg",
      text: "Personal branding and photography packages to kickstart professional Linkedin presence.",
    },
    {
      icon: "/assets/icons/differentiator-person-icon.svg",
      text: "Personal one-on-one coaching packages available from our founder and other featured mentors.",
    },
  ];
  return (
    <section
      className="mb-20 py-12 px-5 md:px-8 
        bg-no-repeat bg-cover bg-[position:12%] lg:bg-[position:0px] bg-[url('/assets/images/homepage-differentiator.png')]"
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
          {differentiators.map((differentiator, i) => (
            <li key={i} className="flex flex-1 gap-6">
              <div className="w-full max-w-[3.25rem] lg:pt-1 flex items-center lg:items-start">
                <Image
                  width={50}
                  height={50}
                  src={differentiator.icon}
                  alt=""
                />
              </div>
              <Text as="p" family="secondary" size="list">
                {differentiator.text}
              </Text>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}
