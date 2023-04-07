import { Text, Heading } from "@/components/Text";
import Input from "@/components/Input";
import Head from "next/head";
import Image from "next/image";
import linkedinIcon from "/public/assets/icons/linkedin-icon-blue.png";
import instagramIcon from "/public/assets/icons/instagram-icon-blue.png";
import websiteIcon from "/public/assets/icons/website-icon-blue.png";

export default function AboutCourse() {
  return (
    <>
      <Head>
        <title>Evolutz Academy | Contact Us</title>
        <meta name="description" content="Our contact information" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="px-5 md:px-8 mb-20 md:mb-[6.25rem] xl:mb-[7.1825rem]">
        <div className="mx-auto max-w-[415px] lg:max-w-[1180px] flex flex-col gap-16 md:gap-20 lg:flex-row lg:gap-0">
          <section className="lg:w-1/2">
            <Heading
              size="contactPage"
              family="secondary"
              color="primary"
              className="mb-5 md:mb-8"
            >
              Our <span className="text-academy-gold">social media</span>
            </Heading>
            <section className="relative max-w-[415px] pl-6 pt-8 pb-10 border-t-[3px] border-l-[3px] border-academy-gold after:absolute after:bottom-0 after:left-0 after:border-b-[3px] after:border-academy-gold after:w-1/3">
              <span className="inline-block mb-5 font-nunito text-sm uppercase">
                Email:{" "}
                <a href="mailto:service@evolutz.com" className="font-light">
                  service@evolutz.com
                </a>
              </span>
              <div className="flex flex-col gap-3">
                <div className="flex gap-2 items-center">
                  <a
                    href="https://www.instagram.com/evolutzacademy/"
                    target="_blank"
                  >
                    <Image src={instagramIcon} alt="" />
                  </a>
                  <a
                    href="https://www.instagram.com/evolutzacademy/"
                    target="_blank"
                    className="font-nunito font-light text-sm uppercase"
                  >
                    Instagram
                  </a>
                </div>
                <div className="flex gap-2 items-center">
                  <a
                    href="https://www.linkedin.com/company/evolutz-academy/"
                    target="_blank"
                  >
                    <Image src={linkedinIcon} alt="" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/evolutz-academy/"
                    target="_blank"
                    className="font-nunito font-light text-sm uppercase"
                  >
                    LinkedIn
                  </a>
                </div>
                <div className="flex gap-2 items-center">
                  <a
                    href="https://evolutzacademy.teachable.com/"
                    target="_blank"
                  >
                    <Image src={websiteIcon} alt="" />
                  </a>
                  <a
                    href="https://evolutzacademy.teachable.com/"
                    target="_blank"
                    className="font-nunito font-light text-sm uppercase"
                  >
                    Teachable
                  </a>
                </div>
              </div>
            </section>
          </section>
          <section className="lg:w-1/2">
            <Heading
              size="contactPage"
              family="secondary"
              color="primary"
              className="mb-5 md:mb-8"
            >
              Request <span className="text-academy-gold">a consultation</span>
            </Heading>
            <section className="relative max-w-[415px] pl-6 py-8 border-t-[3px] border-l-[3px] border-academy-gold after:absolute after:bottom-0 after:left-0 after:border-b-[3px] after:border-academy-gold after:w-1/3">
              <form className="flex flex-col">
                <Input name={"name"} label={"Enter Your Name"} type={"text"} />
                <Input
                  name={"email"}
                  label={"Enter Your Email"}
                  type={"email"}
                />
                <button type="submit" className="px-2 py-5 bg-academy-blue">
                  <Text size="button" color="bright">
                    Contact Us for a Consultation
                  </Text>
                </button>
              </form>
            </section>
          </section>
        </div>
      </section>
    </>
  );
}
