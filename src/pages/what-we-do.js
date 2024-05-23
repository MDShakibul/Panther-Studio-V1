import Head from "next/head";
import RootLayout from "@/components/Layouts/RootLayout";
import ContactHero from "@/components/UI/Contact/ContactHero";
import Questions from "@/components/UI/Contact/Questions";
import WhatWeDoHeroSection from "@/components/UI/WhatWeDo/WhatWeDoHeroSection";

export default function WhatWeDo() {
  return (
    <>
      <Head>
        <title>What We Do - Panther Studio</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>

      <WhatWeDoHeroSection/>

      
    </>
  );
}

WhatWeDo.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
