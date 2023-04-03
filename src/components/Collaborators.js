import Carousel from "./Carousel";
import { Text, Heading } from "./Text";

export default function Collaborators() {
  const carouselContent = [
    "/assets/partner-logos/gsx-logo.webp",
    "/assets/partner-logos/siberx-logo.png",
    "/assets/partner-logos/bond-logo.png",
    "/assets/partner-logos/ifsec-global-logo.png",
    "/assets/partner-logos/cyber-toronto-logo.jpg",
    "/assets/partner-logos/medium-logo.png",
    "/assets/partner-logos/invest-ottawa-logo.png",
  ];
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
        <Carousel cardNumber={4} carouselContent={carouselContent} />
      </section>
    </section>
  );
}
