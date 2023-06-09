import Head from "next/head";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Mission from "@/components/Mission";
import Founder from "@/components/Founder";
import Differentiator from "@/components/Differentiator";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import Collaborators from "@/components/Collaborators";

export default function Home() {
  return (
    <>
      <Head>
        <title>Evolutz Academy</title>
        <meta
          name="description"
          content="Evolutz Academy is a modern way of learning. We do not look at personal development as a linear journey. We understand that it is complex and requires strategy and discpline to reach a particular destination."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <About />
      <Mission />
      <Differentiator />
      <Founder />
      <Benefits />
      <Testimonials />
      <Collaborators />
    </>
  );
}
