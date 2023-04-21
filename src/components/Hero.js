import { Text, Heading } from "./Text";

export default function Hero() {
  return (
    <section className="relative">
      <section
        className="bg-no-repeat md:bg-cover bg-[position:38%_-100px] md:bg-[position:37%_-20px] bg-[url('/assets/images/homepage-hero.webp')] 
        min-h-[683px] md:min-h-[800px] flex items-center mt-[-83px]"
      >
        <div className="w-full">
          <div
            className="relative max-w-[1084px] mx-auto  pl-6 pr-8 md:px-16 
            after:border-solid after:border-l-[3px] after:border-y-[3px] after:border-academy-green after:absolute after:-top-[3px] after:left-[21px] md:after:left-[61px] after:w-32 after:h-[calc(100%+6px)] after:z-0"
          >
            <article className="md:bg-[#F2F2F1]/95 relative z-10 pl-6 md:pr-6 py-6 max-w-[436px] md:max-w-[460px]">
              <span className="uppercase text-[0.8125rem] mb-[0.875rem] inline-block mb-">
                Evolutz Academy is
              </span>
              <Heading as="h1" size="page" className="mb-5">
                A <span className="text-academy-gold">Modern Way</span> of
                Learning
              </Heading>
              <p className="font-nunito text-sm mb-8">
                We do not look at personal development as a linear journey. We
                understand that it is complex and requires strategy and
                discipline to reach a particular destination.
              </p>
              <a href="https://evolutzacademy.teachable.com/" target="_blank">
                <Text
                  as="button"
                  size="button"
                  className="hover:text-academy-hover"
                >
                  Start Learning
                </Text>
                <span className="text-xl font-normal ml-2 text-academy-green leading-4">
                  ›
                </span>
              </a>
            </article>
          </div>
        </div>
      </section>
      <section className="bg-academy-gold py-12 md:absolute md:bottom-0 md:right-0 md:w-full md:max-w-[1100px]">
        <ul className="flex flex-col md:flex-row gap-10 md:gap-20 max-w-[210px] mx-auto md:mx-10">
          <li className="flex items-center gap-4 text-white leading-10">
            <span className="font-semibold text-[2.5rem]">01</span>
            <span className="font-medium text-[1.9375rem]">Register</span>
          </li>
          <li className="flex items-center gap-4 text-white leading-10">
            <span className="font-semibold text-[2.5rem]">02</span>
            <span className="font-medium text-[1.9375rem]">Study</span>
          </li>
          <li className="flex items-center gap-4 text-white leading-10">
            <span className="font-semibold text-[2.5rem]">03</span>
            <span className="font-medium text-[1.9375rem]">Succeed</span>
          </li>
        </ul>
      </section>
    </section>
  );
}
