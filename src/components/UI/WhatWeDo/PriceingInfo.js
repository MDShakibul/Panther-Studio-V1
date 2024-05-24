import React from "react";
import style from "@/styles/WhatWeDo.module.css";
import homeStyle from "@/styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import priceInfo from "@/assets/images/pricing-info.svg";

const PriceingInfo = () => {
  return (
    <div className={`${style.priceInfoSection}`}>
      <div className="container">
        <div className={`${style.priceTitleArea}`}>
          <p className={`${homeStyle.heroSectionCompanyTitle}`}>
            Payment terms
          </p>
          <h1
            className={`footer-nav-link-title ${homeStyle.heroSectionCompanyHeader} w-100`}
          >
            Our simplified pricing information.
          </h1>
        </div>

        <div className="row">
          <div className="col-lg-3"></div>
          <div className="col-lg-8">
          <p className={style.serviceDetails}>
          Obtaining an exact website cost estimate can be challenging initially. Our pricing considers not just technical needs but also post-launch traffic complexities. Achieving local market rankings is easier than on a national scale, which requires more intricate development. To provide an accurate quote, preliminary research is needed. Therefore, we initially offer a pricing range.
                  <br />
                  <br />
                  Acknowledging the need for initial guidance, our initial pricing acts as an estimate until further exploration. Once a clear strategy is established, a more precise fixed price can be provided. Generally, full business websites range from <span className="text-white">€5,000</span> to <span className="text-white">€9,000</span>.
                </p>

                <h4 className={style.serviceDetailsTitle}>Payment Terms.</h4>
                <p className={` mt-1 ${style.serviceDetails}`}>We uphold transparency in our payment procedures to avoid any misunderstandings. A <span className="text-white">10% initial deposit</span> is mandatory, followed by invoicing for subsequent payments at the completion of each project phase. Payments are typically divided into two phases: upon completion of design and upon website launch. This method minimizes your risk, guaranteeing project delivery with assurance..
                </p>

                <div className="row gy-5">
    <div className="col-lg-7 col-md-6 d-flex flex-column order-1">
      <div className="flex-grow-1 d-flex">
      <div className={`${style.priceInfoDetails}`}>

      <p>First Payment</p>
      <p style={{ color:'#3E3A44', opacity: '0.6' }}>Deposit - 10%</p>
      <div className="divider-contact-area"></div>
      <p>Second Payment</p>
      <p style={{ color:'#3E3A44', opacity: '0.6' }}>End of design phase - 45%</p>
      <div className="divider-contact-area"></div>
      <p>Final Payment</p>
      <p style={{ color:'#3E3A44', opacity: '0.6' }}>End of build phase - 45%</p>
      </div>
        
      </div>
    </div>
    <div className="col-lg-5 col-md-6 d-flex flex-column order-lg-2 order-md-2 order-3">
      <div className="flex-grow-1 d-flex flex-column">
        <div className="flex-grow-1 d-flex mb-3">
          <Image
            src={priceInfo}
            alt="Featured image"
            layout="intrinsic"
            className="img-fluid w-100"
          />
        </div>
        <div className="d-flex align-items-center" style={{ height: 'auto' }}>
          <Link href={""} className={`${homeStyle.btnHeroSection} w-100 text-center d-flex justify-content-between`} >
            <p className="mb-0">Start A Project</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M7 7H17M17 7V17M17 7L7 17" stroke="#2E4A45" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
          </Link>
        </div>
      </div>
    </div>
  </div>
          </div>
          <div className="col-lg-1"></div>
        </div>
      </div>
    </div>
  );
};

export default PriceingInfo;
