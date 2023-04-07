import Image from "next/image";
import Input from "./Input";
import { Text, Heading } from "./Text";
import consultation from "/public/assets/images/about-consultation.jpg";

export default function Consultation() {
  const formDetails = [
    { name: "name", label: "Enter Your Name", type: "text" },
    { name: "phone", label: "Enter Your Phone Number", type: "tel" },
    { name: "email", label: "Enter Your Email", type: "email" },
    { name: "inquiry", label: "How can we help you?", type: "text" },
  ];

  return (
    <section className="px-5 mb-20 md:mb-[6.25rem] xl:mb-[7.1825rem]">
      <section className="mx-auto xl:max-w-[1380px]">
        <article className="mb-8">
          <Text
            size="overline"
            color="accent"
            className="relative left-60 md:left-[30rem]"
          >
            Consultation
          </Text>
          <Heading as="h2" size="section">
            Free Consultation
          </Heading>
        </article>
        <div className="mx-auto max-w-[560px] xl:max-w-[1120px] ">
          <div className="mb-9">
            <Heading as="h3" size="sectionSub" className="mb-6">
              Still thinking? Request a
              <span className="text-academy-gold"> free consultation</span>
            </Heading>
          </div>
          <section className="flex flex-col gap-10 xl:flex-row md:gap-0">
            <article className="px-4 py-8 md:p-12 xl:w-1/2 border border-academy-gold">
              <form className="flex flex-col">
                {formDetails.map((formInput, i) => (
                  <Input
                    key={i}
                    name={formInput.name}
                    label={formInput.label}
                    type={formInput.type}
                  />
                ))}
                <div className="flex justify-center">
                  <button type="submit" className="px-10 py-5 bg-academy-blue">
                    <Text size="button" color="bright">
                      Request Consultation
                    </Text>
                  </button>
                </div>
              </form>
            </article>
            <div className="md:px-10 md:pt-10 xl:py-0 xl:pl-8 xl:pr-0">
              <Image
                src={consultation}
                alt=""
                className="mx-auto object-contain"
              />
            </div>
          </section>
        </div>
      </section>
    </section>
  );
}
