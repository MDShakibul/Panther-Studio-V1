import React from "react";
import style from "@/styles/WhatWeDo.module.css";
import homeStyle from "@/styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import priceInfo from "@/assets/images/pricing-info.svg";

const StudioPartner = () => {
  return (
    <div className={`${style.priceInfoSection}`}>
      <div className="container">
        <div className={`${style.priceTitleArea}`}>
          <p className={`${homeStyle.heroSectionCompanyTitle}`}>
          Our promise
          </p>
          <h1
            className={`footer-nav-link-title ${homeStyle.heroSectionCompanyHeader} w-100`}
          >
            Why choose Panther Creative Studio?
          </h1>
        </div>

        <div className="row">
          <div className="col-lg-3"></div>
          <div className="col-lg-8">
            <p className={style.serviceDetails}>
            Opting for a compact web design and development team ensures personalized support and efficient collaboration. These agile teams quickly adapt to project needs and feedback, delivering cost-effective solutions without sacrificing quality.
            </p>


            <div className="row gy-5">
              <div className="col-lg-7 col-md-6 d-flex flex-column order-1">
                <div className="flex-grow-1 d-flex">
                  <div className={`${style.priceInfoDetails}`}>
                  <div className="d-flex justify-content-between align-items-center">
                      <Link href={''}
                        className={`mb-0 ${style.contactNumber}`}
                      >
                        UI/UX Design
                      </Link>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M7 7H17M17 7V17M17 7L7 17"
                          stroke="#2E4A45"
                          strokeWidth="2"
                          strokeLinecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="divider-contact-area"></div>
                    <div className="d-flex justify-content-between align-items-center">
                      <Link href={''}
                        className={`mb-0 ${style.contactNumber}`}
                      >
                        Website Development
                      </Link>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M7 7H17M17 7V17M17 7L7 17"
                          stroke="#2E4A45"
                          strokeWidth="2"
                          strokeLinecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="divider-contact-area"></div>
                  <div className="d-flex justify-content-between align-items-center">
                      <Link href={''}
                        className={`mb-0 ${style.contactNumber}`}
                      >
                        E-Commerce Development
                      </Link>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M7 7H17M17 7V17M17 7L7 17"
                          stroke="#2E4A45"
                          strokeWidth="2"
                          strokeLinecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="divider-contact-area"></div>
                    <div className="d-flex justify-content-between align-items-center">
                      <Link href={''}
                        className={`mb-0 ${style.contactNumber}`}
                      >
                        Hosting & Support
                      </Link>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M7 7H17M17 7V17M17 7L7 17"
                          stroke="#2E4A45"
                          strokeWidth="2"
                          strokeLinecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
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
                  <div
                    className="d-flex align-items-center"
                    style={{ height: "auto" }}
                  >
                    <Link
                      href={"/contact"}
                      className={`${homeStyle.btnHeroSection} w-100 text-center d-flex justify-content-between btn-animated btn-1`}
                    >
                      <p className="mb-0">Work with us</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M7 7H17M17 7V17M17 7L7 17"
                          stroke="#2E4A45"
                          strokeWidth="2"
                          strokeLinecap="round"
                          stroke-linejoin="round"
                        />
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

export default StudioPartner;
