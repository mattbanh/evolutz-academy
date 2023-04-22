import Carousel from "./Carousel";
import { Text, Heading } from "./Text";

export default function Collaborators() {
  return (
    <section className="px-5 mb-20 md:mb-[6.25rem] xl:mb-[7.1825rem]">
      <section className="mx-auto xl:max-w-[1380px]">
        <article className="mb-12">
          <Text
            size="overline"
            color="accent"
            className="relative left-32 md:left-72"
          >
            Collaborators
          </Text>
          <Heading size="sectionXl" className="mt-[-0.25rem]">
            As Seen On
          </Heading>
        </article>
        <Carousel />
      </section>
    </section>
  );
}
