import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

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
      <section className="bg-no-repeat bg-cover bg-center bg-[url('../assets/images/homepage-hero.png')] min-h-[800px] flex items-center mt-[-83px]">
        <div className="w-full px-10">
          <div className="max-w-[1180px] mx-auto">
            <h1 className=" text-5xl min-[860px]:text-7xl font-black text-black">
              Hero
            </h1>
          </div>
        </div>
      </section>
    </>
  );
}
