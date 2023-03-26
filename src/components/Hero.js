import { Text, Heading } from "./Text";

export default function Hero() {
  return (
    <section className="bg-no-repeat bg-cover bg-center bg-[url('../assets/images/homepage-hero.png')] min-h-[800px] flex items-center mt-[-83px]">
      <div className="w-full px-10">
        <div className="max-w-[1180px] mx-auto">
          {/* <h1 className=" text-5xl min-[860px]:text-7xl font-black text-black">
            Hero
          </h1> */}
          <span className="uppercase text-[0.8125rem] mb-[0.875rem] inline-block mb-">
            Evolutz Academy is
          </span>
          <Heading as="h1" size="page" className="mb-[0.8125rem]">
            A <span className="text-academy-gold">Modern Way</span> of Learning
          </Heading>
          <Text as="p" family="secondary">
            We do not look at personal development as a linear journey. We
            understand that it is complex and requires strategy and discipline
            to reach a particular destination.
          </Text>
        </div>
      </div>
    </section>
  );
}
