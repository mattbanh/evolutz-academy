import Image from "next/image";
import { Text, Heading } from "./Text";
import homepageBenefits from "../assets/images/homepage-benefits.png";

export default function Benefits() {
  return (
    <section className="px-5 mb-20 md:mb-[6.25rem] xl:mb-[7.1825rem]">
      <section className="xl:max-w-[1380px]">
        <div className="mx-auto xl:max-w-[1220px] max-w-[610px] flex flex-col gap-12 xl:flex-row xl:gap-0">
          <div className="xl:w-1/2">
            <Image width={1000} src={homepageBenefits} alt="" />
          </div>
          <article className="md:mx-auto py-8 pr-6 border-y border-r border-academy-gold md:w-[610px] xl:w-1/2">
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
              <ul class="list-['—'] mb-8 ml-4">
                <li className="text-academy-gold pl-5 mb-4">
                  <Text size="list" color="primary">
                    Exposure to potential jobs and employer opportunities
                    through Evolutz&apos;s network and contacts
                  </Text>
                </li>
                <li className="text-academy-gold pl-5 mb-4">
                  <Text size="list" color="primary">
                    Exclusive, custom, and authentic approach to students and
                    their needs
                  </Text>
                </li>
                <li className="text-academy-gold pl-5 mb-4">
                  <Text size="list" color="primary">
                    Efficient planning, response, and project management
                    development skills
                  </Text>
                </li>
              </ul>
              <button className="px-12 py-5 w-64 md:w-full bg-academy-blue">
                <Text size="button" color="bright">
                  Start Learning
                </Text>
              </button>
            </div>
          </article>
        </div>
      </section>
    </section>
    //    <Text
    //         as="li"
    //         className="pl-4 before:content-['—'] before:mr-4 indent-[-1rem]"
    //       >
    //         Exposure to potential jobs and employer opportunities through
    //         Evolutz&apos;s network and contacts
    //       </Text>
    // <section className="pb-36 md:pb-52 lg:pb-[6.25rem] xl:pb-[7.8125rem]">
    //   <section className="mx-auto w-full md:max-w-[1380px] ">
    //     <section className="mx-auto flex flex-col-reverse lg:flex-row">
    //       <section className="mx-auto lg:mx-0 lg:w-1/2 pr-10 pl-5 md:px-8 lg:pl-0">

    //       </section>
    //       <section className="mx-auto md:mx-0 lg:w-1/2 px-5 md:px-8 lg:pr-0 mb-10 md:mb-[3.75rem] xl:mb-0 ">
    //         <div className="xl:flex justify-start">
    //           <div className="lg:pr-8 xl:w-[690px] flex justify-start flex-col lg:justify-start">
    //             <section className="flex lg:justify-start max-w-[690px] md:ml-24 lg:ml-0 lg:mt-[172px]">
    //               <article className="max-w-[460px] md:max-w-[478px]">
    //                 <Text as="p" family="secondary" className="mb-8">
    //                   To help students, businesses, professionals, and aspiring
    //                   entrepreneurs evolve and grow in their personal and
    //                   professional lives by building a supportive and mutually
    //                   beneficial community of like-minded individuals.
    //                 </Text>
    //               </article>
    //             </section>
    //           </div>
    //         </div>
    //       </section>
    //     </section>
    //   </section>
    // </section>
  );
}
