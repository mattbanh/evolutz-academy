import Head from "next/head";
import styles from "@/styles/Home.module.css";
import AboutHero from "@/components/AboutHero";

export default function AboutCourse() {
  return (
    <>
      <Head>
        <title>Evolutz Academy | About</title>
        <meta
          name="description"
          content="While attending a reputable institution and performing well academically are certainly foundational to future success, learning how to market yourself to prospective employers is now instrumental to differentiate yourself from other candidates. Evolutz Academy acknowledges that there is no single solution to this dilemma; a one-size-fits-all approach to professional development will usually fail to meet your expectations."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AboutHero />
    </>
  );
}
