import React from "react";
import style from "@/styles/Home.module.css";
import studioStyle from "@/styles/Studio.module.css";
import Image from "next/image";
import Link from "next/link";
import ContactAccordion from "@/components/Shared/ContactAccordion";

const FAQ = () => {
  return (
    <div className={`${style.mainFocusSection}`}>
      <div className={`container ${style.ourPortfolioArea} h-100`}>
        <div className="d-flex justify-content-center">
          <p
            className={`${style.heroSectionCompanyTitle}`}
            style={{ color: "#2E4A45" }}
          >
            FAQs
          </p>
        </div>
        <h1
          className={`footer-nav-link-title ${style.heroSectionCompanyHeader} text-center`}
          style={{ color: "#2E4A45", margin: "0 auto" }}
        >
          Questions regarding the way we operate.
        </h1>

        <ContactAccordion />

        <div className="container">
          <div className={`${studioStyle.getInTouchArea}`}>
            <div className="row">
              <div className="col-lg-8">
                <p
                  className={`${style.heroSectionCompanyTitle}`}
                  style={{ color: "#2E4A45" }}
                >
                  Can’t find what you’re looking for?
                </p>
                <p className={`${studioStyle.touchDetails}`}>
                If you have specific queries or need further clarification, our team is ready to assist.
                </p>
              </div>
              <div className="col-lg-1"></div>
              <div className="col-lg-3 d-flex justify-content-center align-items-center">
              <Link
            href={"/contact"}
            target="_blank"
            className={`text-white ${style.btnHeroSection} text-center w-100`}
            style={{ backgroundColor: "#2E4A45" }}
          >
            <p className="mb-0 text-white">Get in touch</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M7 7H17M17 7V17M17 7L7 17"
                stroke="#E1EEEC"
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
    </div>
  );
};

export default FAQ;
