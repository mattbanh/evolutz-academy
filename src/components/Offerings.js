import ModuleCard from "./ModuleCard";
import { Text, Heading } from "./Text";

export default function Offerings() {
  const modules = [
    {
      title: "Organization 101",
      text: "The beauty of organization is that it can be done digitally or physically.",
    },
    {
      title: "Social Media Presence",
      text: "Your online presence can make or break your ability to land the job you want.",
    },
    {
      title: "Building Your Resume",
      text: "Your resume should be short, sweet, and error-free.",
    },
    {
      title: "Your Cover Letter",
      text: "Your cover letter is a written version of your best elevator pitch.",
    },
    {
      title: "Your Interview",
      text: "The interview is where you convert the recruiter's original interest into a job offer.",
    },
    {
      title: "Post Academic Steps",
      text: "The corporate world is very different from post-secondary education.",
    },
  ];

  return (
    <section className="mb-36 lg:mb-28 px-5 md:px-8">
      <section className="mx-auto xl:max-w-[1280px]">
        <section className="mb-12 md:mb-8 lg:mb-0">
          <article className="mb-8">
            <Text
              size="overline"
              color="accent"
              className="relative left-9 md:left-14"
            >
              Offerings
            </Text>
            <Heading as="h2" size="section">
              Course Offerings
            </Heading>
          </article>
          <div className="mx-auto md:max-w-[590px] lg:max-w-[1120px] mb-9">
            <div className="md:max-w-[590px]">
              <Heading as="h3" size="sectionSub" className="mb-6">
                How to
                <span className="text-academy-gold">
                  {" "}
                  organize and optimize{" "}
                </span>
                your profile and online presence
              </Heading>
            </div>
          </div>
          <section className="mx-auto max-w-[1120px] px-[1.675rem] w-full">
            <div className="mb-10 md:mb-12 flex flex-wrap gap-8 md:gap-12 justify-center">
              {modules.map((module, i) => (
                <ModuleCard key={i} module={module} moduleNumber={i + 1} />
              ))}
            </div>
            <div className="flex justify-center">
              <a href="https://evolutzacademy.teachable.com/" target="_blank">
                <button className="px-12 py-5 w-[270px] bg-academy-blue">
                  <Text size="button" color="bright">
                    Start Learning
                  </Text>
                </button>
              </a>
            </div>
          </section>
        </section>
      </section>
    </section>
  );
}
