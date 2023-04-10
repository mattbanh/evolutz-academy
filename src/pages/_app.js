import Layout from "@/components/Layout";
import "@/styles/globals.css";
import { Montserrat, Nunito_Sans } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
});

const nunito_sans = Nunito_Sans({
  weight: ["300", "400", "600", "700", "800"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        :root {
          /* ... */
          --font-montserrat: ${montserrat.style.fontFamily};
          --font-nunito-sans: ${nunito_sans.style.fontFamily};
        }
      `}</style>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
