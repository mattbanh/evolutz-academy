import { useState } from "react";
import Head from "next/head";
import { Text, Heading } from "@/components/Text";
import SocialLink from "@/components/SocialLink";
import Input from "@/components/Input";
import { validateEmail, sendInquiry } from "@/lib/utils";
import linkedinIcon from "/public/assets/icons/linkedin-icon-blue.png";
import instagramIcon from "/public/assets/icons/instagram-icon-blue.png";
import websiteIcon from "/public/assets/icons/website-icon-blue.png";

const emailAPI = process.env.NEXT_PUBLIC_CONSULTATION_EMAIL_API;

const socials = [
  {
    href: "https://www.instagram.com/evolutzacademy/",
    text: "Instagram",
    icon: instagramIcon,
  },
  {
    href: "https://www.linkedin.com/company/evolutz-academy/",
    text: "LinkedIn",
    icon: linkedinIcon,
  },
  {
    href: "https://evolutzacademy.teachable.com/",
    text: "Course Website",
    icon: websiteIcon,
  },
];

export default function AboutCourse() {
  const [values, setValues] = useState({ name: "", email: "", inquiry: "" });
  const [isError, setIsError] = useState(false);
  const [isEmail, setIsEmail] = useState(true);
  const [successfulSubmit, setSuccessfulSubmit] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (event.target.name === "email") {
      setIsEmail(true);
    }

    setValues({
      ...values,
      [name]: value,
    });
  };

  const formValidation = (values) => {
    const { name, email, inquiry } = values;

    if (!validateEmail(email)) {
      setIsEmail(false);
      return false;
    }

    if (!name || !email || !inquiry) {
      return false;
    }

    return true;
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formValidation(values)) {
      sendInquiry(values, emailAPI)
        .then((response) => {
          if (response.status === 200) {
            setSuccessfulSubmit(true);
          }
        })
        .catch((err) => console.log(err));
    } else {
      setIsError(true);
    }
  };

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
                {socials.map((socialsInfo, i) => (
                  <SocialLink
                    key={i}
                    href={socialsInfo.href}
                    icon={socialsInfo.icon}
                    text={socialsInfo.text}
                  />
                ))}
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
            <section className="relative max-w-[415px] min-h-[452px] pl-6 py-8 border-t-[3px] border-l-[3px] border-academy-gold after:absolute after:bottom-0 after:left-0 after:border-b-[3px] after:border-academy-gold after:w-1/3">
              <form
                className="flex flex-col"
                onSubmit={submitHandler}
                noValidate
              >
                <div className="relative flex flex-col">
                  <Input
                    name={"name"}
                    label={"Enter Your Name"}
                    type={"text"}
                    onChange={handleInputChange}
                    value={values["name"]}
                  />
                  {isError && !values["name"] && (
                    <span className="text-red-600 text-xs absolute bottom-3">
                      This field is required
                    </span>
                  )}
                </div>
                <div className="relative flex flex-col">
                  <Input
                    name={"email"}
                    label={"Enter Your Email"}
                    type={"email"}
                    onChange={handleInputChange}
                    value={values["email"]}
                  />
                  {!isEmail && (
                    <span className="text-red-600 text-xs absolute bottom-3">
                      Please enter a valid email address (ex. name@example.com)
                    </span>
                  )}
                </div>
                <div className="relative flex flex-col">
                  <label
                    htmlFor="inquiry"
                    className="mb-1 text-sm font-light font-nunito uppercase text-academy-blue"
                  >
                    Reason for Inquiry
                  </label>
                  <textarea
                    name="inquiry"
                    rows="4"
                    id="inquiry"
                    className="mb-8 px-2 border-b-[1px] border-academy-blue text-evolutz-black focus:outline-none font-nunito font-light resize-none"
                    onChange={handleInputChange}
                    value={values["inquiry"]}
                  ></textarea>
                  {isError && !values["inquiry"] && (
                    <span className="text-red-600 text-xs absolute bottom-3">
                      This field is required
                    </span>
                  )}
                </div>
                <button
                  type="submit"
                  className="px-2 py-5 bg-academy-blue hover:bg-academy-hover ease-in-out duration-150"
                >
                  <Text size="button" color="bright">
                    Contact Us for a Consultation
                  </Text>
                </button>
              </form>
              {successfulSubmit && (
                <section className="absolute top-0 left-0 h-full w-full flex justify-center items-center bg-white/95">
                  <Text as="p" family="secondary" className="font-bold">
                    We have received your inquiry. Thank you!
                  </Text>
                </section>
              )}
            </section>
          </section>
        </div>
      </section>
    </>
  );
}
