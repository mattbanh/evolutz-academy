import { Text } from "@/components/Text";
import Link from "next/link";

export default function Custom404() {
  return (
    <section
      className="py-24 px-5 md:px-8
        bg-no-repeat bg-cover bg-[position:12%] lg:bg-[position:0px] bg-[url('/assets/images/homepage-differentiator.png')]"
    >
      <div className="mx-auto max-w-xl flex flex-col items-center justify-center gap-12 min-h-[60vh]">
        <span className="text-academy-gold font-extrabold font-nunito text-[8rem] leading-[8rem] md:text-[12rem] Md:leading-[12rem]">
          404
        </span>
        <p className="text-academy-gold font-bold font-nunito text-3xl md:text-5xl md:leading-[4rem] uppercase text-center">
          Sorry, this page does not exist
        </p>
        <Link href="/">
          <button className="px-12 py-5 bg-academy-blue">
            <Text size="button" color="bright">
              Return to the Homepage
            </Text>
          </button>
        </Link>
      </div>
    </section>
  );
}
