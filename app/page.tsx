import { About, Gallery, Services } from "@/components";
import s from "./page.module.css";
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Some Company</title>
        <meta name="description" content="Some Company description" />

        <meta property="og:title" content="Some Company" />
        <meta property="og:description" content="Some Company description" />
        <meta property="og:url" content="Some Company url" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Some Company" />
        <meta name="twitter:description" content="Some Company description" />
      </Head>
      <div className={s.page}>
        <main className={s.main}>
          <About />
          <Services />
          <Gallery />
        </main>
      </div>
    </>
  );
}
