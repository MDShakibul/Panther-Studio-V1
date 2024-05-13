import Head from "next/head";

import RootLayout from "./components/Layouts/RootLayout";
import Image from "next/image";
import DummyImage from "../pages/assets/images/dummy-image.svg";
import Link from "next/link";
import HeroSection from "./components/UI/HeroSection";
import OurPortfolio from "./components/UI/OurPortfolio";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Panther Studio</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>

      <HeroSection/>
      <OurPortfolio/>

      
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
