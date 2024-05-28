import Head from "next/head";
import RootLayout from "@/components/Layouts/RootLayout";
import WorkHeroSection from "@/components/UI/Work/WorkHeroSection";
import MoreThan from "@/components/UI/Work/MoreThan";

export default function Work() {
  return (
    <>
      <Head>
        <title>Work - Panther Studio</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>

    <WorkHeroSection/>
    <MoreThan/>
      
    </>
  );
}

Work.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
