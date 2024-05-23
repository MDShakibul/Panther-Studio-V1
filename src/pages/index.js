import Head from "next/head";

import Image from "next/image";
import Link from "next/link";
import HeroSection from "@/components/UI/HeroSection";
import OurPortfolio from "@/components/UI/OurPortfolio";
import MainFocus from "@/components/UI/MainFocus";
import MoreInfo from "@/components/UI/MoreInfo";
import RootLayout from "@/components/Layouts/RootLayout";

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
      <MoreInfo/>
      <OurPortfolio/>
      <MainFocus/>

      
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
