import RootLayout from '@/components/Layouts/RootLayout';
import Collaboration from '@/components/UI/Studio/Collaboration';
import FAQ from '@/components/UI/Studio/FAQ';
import StudioHeroSection from '@/components/UI/Studio/StudioHeroSection';
import StudioPartner from '@/components/UI/Studio/StudioPartner';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';

const Studio = () => {
  const [isMobileView, setIsMobileView] = useState(false);
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 768) {
        setIsMobileView(false);
      } else {
        setIsMobileView(true);
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
    return (
        <>

<Head>
        <title>Studio - Panther Studio</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>

      <StudioHeroSection/>
      <Collaboration isMobileView={isMobileView}/>
      <StudioPartner />
      <FAQ />
            
        </>
    );
};

export default Studio;

Studio.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
  };