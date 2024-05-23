import React from "react";
import style from "@/styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import ContactAccordion from "@/components/Shared/ContactAccordion";

const Questions = () => {
  return (
    <div className={`${style.mainFocusSection}`}>
      <div className={`container ${style.ourPortfolioArea} h-100`}>
        <div className="d-flex justify-content-center">
          <p
            className={`${style.heroSectionCompanyTitle}`}
            style={{ color: "#2E4A45" }}
          >
            Hesitant to reach out?
          </p>
        </div>
        <h1
          className={`footer-nav-link-title ${style.heroSectionCompanyHeader} text-center`}
          style={{ color: "#2E4A45", margin: "0 auto" }}
        >
          Questions regarding the way we operate.
        </h1>

        <ContactAccordion />

        <div
          className="container d-flex justify-content-center align-items-center"
          style={{ height: "auto", marginTop: "40px" }}
        >
        </div>
      </div>
    </div>
  );
};

export default Questions;
