import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Eddy's Project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      {/* <Banner /> */}
    </div>
  );
}
