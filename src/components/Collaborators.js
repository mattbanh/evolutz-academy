import Carousel from "./Carousel";
import { Text, Heading } from "./Text";
import gsxLogo from "/public/assets/partner-logos/gsx-logo.webp";
import siberxLogo from "/public/assets/partner-logos/siberx-logo.png";
import bondLogo from "/public/assets/partner-logos/bond-logo.png";
import ifsecLogo from "/public/assets/partner-logos/ifsec-global-logo.png";
import cyberTorontoLogo from "/public/assets/partner-logos/cyber-toronto-logo.jpg";
import mediumLogo from "/public/assets/partner-logos/medium-logo.png";
import investOttawaLogo from "/public/assets/partner-logos/invest-ottawa-logo.png";

export default function Collaborators() {
  const carouselContent = [
    gsxLogo,
    siberxLogo,
    bondLogo,
    ifsecLogo,
    cyberTorontoLogo,
    mediumLogo,
    investOttawaLogo,
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
