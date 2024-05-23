import Head from "next/head";
import RootLayout from "@/components/Layouts/RootLayout";
import ContactHero from "@/components/UI/Contact/ContactHero";
import Questions from "@/components/UI/Contact/Questions";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact - Panther Studio</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>

      <ContactHero/>
      <Questions/>

      
    </>
  );
}

Contact.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
