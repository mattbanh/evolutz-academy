import Image from "next/image";
import { Text, Heading } from "./Text";
import background from "/public/assets/images/evolutz-background.png";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Michael Gips, JD, CPP, CSyP, CAE",
      title: "Founder, Security Expert, Attorney & Content Specialist",
      text: "Suzanna has become a significant force and presence in both the security and branding fields, commanding a tremendous amount of influence. She has shaken the old guard of security out of their slumber by innovating an approach to brand management in security and other fields that these industries sorely need. Indefatigable and always authentic, Suzanna brings insight and enthusiasm into every one of her engagements. She has personally helped me extend my audience on LinkedIn by imparting the lesser-known benefits of a wider reach, explaining the algorithms behind the platform, and by providing general branding advice that keeps me up with this fast-evolving field.",
    },
    {
      name: "Ashley Mejia",
      title: "Research Fellow | University of Central Florida",
      text: "I invited Suzanna to guest speak for my criminal justice pre-professional fraternity, American Criminal Justice Association–Lambda Alpha Epsilon, at the University of Central Florida. Suzanna kindly advised my members, who are Freshman – Senior Undergraduate students, to partake in internships to strengthen their skills and emphasise the importance of networking with other professionals in our desired field. In addition, Suzanna encouraged my members to never give up on our goals and to absolutely try our best to work hard for what we want. Suzanna is one of the most enthusiastic and dedicated people that I have met, and she truly strives to assist others in succeeding in their career endeavours. I highly recommend conversating with Suzanna and collaborating with Evolutz!",
    },
    {
      name: "Matt Vallis",
      title:
        "Consultant – Complex Solutions & Smart Buildings | TELUS Smart Communities",
      text: "Evolutz Acadamy’s Bootcamp on planning for 2023 was an amazing course! The format in which Suzanna presented was clear and concise; while still being casual and open, allowing participants to share their ideas, comments and thoughts freely. By thoroughly reflecting on the past year it made planning and organizing my goals (both personal and professional) for 2023 easier and clearer by putting me in the right mindset. I highly recommend this course to anyone who has trouble recognizing their goals and putting a plan in place!",
    },
    {
      name: "Cadisha Miceli",
      title: "Senior Security Coordinator | City of Toronto ",
      text: "I came across Evolutz Academy from a Sentinel Mindset YouTube, which I literally had to take a pause-break from because I got a little too emotional. After an anxiety-filled year of trying to figure out what my flaws were, feeling like my voice didn’t matter and ultimately feeling like I didn’t matter, it was a blessing to hear Suzanna’s story, which resonated with mine. I knew I didn’t want a repeat of 2022 or to go into 2023 without planning powerfully, so I immediately signed up for the Evolutz Academy Program. The program was nothing that I thought it would be. To describe, I felt as if my brain went through a washing machine and was on the spin cycle for a few days to follow. There was so much work I needed to do, and more importantly, work that I was excited to do because it was on myself. Through this work, I have established a stronger connection with the team I lead, my finances are in better shape, and I am taking better care of myself. Thank you for the bloodwork reminder and for being vulnerable to sharing the story about your family member. I wholeheartedly recommend this program to all. The best investment is an investment in yourself.",
    },
  ];

  return (
    <section className="relative px-5 mb-20 md:mb-[6.25rem] xl:mb-[7.1825rem]">
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
        <section className="flex flex-col flex-wrap items-center xl:flex-row xl:justify-center xl:items-stretch gap-8 xl:gap-12">
          {testimonials.map((testimonial, i) => {
            return (
              <article
                key={i}
                className="px-6 py-8 max-w-[570px] border border-academy-gold"
              >
                <h3 className="mb-1 font-nunito font-bold text-[1.1875rem] md:text-2xl text-academy-blue">
                  {testimonial.name}
                </h3>
                <h4 className="mb-6 font-nunito italic md:text-[1.25rem] text-evolutz-black">
                  {testimonial.title}
                </h4>
                <Text
                  as="p"
                  family="secondary"
                  className="leading-7 -indent-[0.375rem]"
                >
                  “{testimonial.text}”
                </Text>
              </article>
            );
          })}
        </section>
      </section>
      <Image
        src={background}
        alt=""
        className="absolute -top-48 md:-top-80 lg:-top-[680px] right-0 -z-10"
      />
    </section>
  );
}
