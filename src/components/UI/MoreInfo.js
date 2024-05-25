import React from "react";
import style from "@/styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import Accordion from "../Shared/Accordion";

const MoreInfo = () => {
  return (
    <div className={`${style.mainFocusSection}`}>
      <div className={`container ${style.ourPortfolioArea} h-100`}>
        <div className="d-flex justify-content-center">
          <p
            className={`${style.heroSectionCompanyTitle}`}
            style={{ color: "#2E4A45" }}
          >
            How can we help
          </p>
        </div>
        <h1
          className={`footer-nav-link-title ${style.heroSectionCompanyHeader} text-center`}
          style={{ color: "#2E4A45", margin: "0 auto" }}
        >
          More than just web designers.
        </h1>

        <Accordion />

        <div
          className="container d-flex justify-content-center align-items-center"
          style={{ height: "auto", marginTop: "40px" }}
        >
          <Link
            href={""}
            className={`text-white ${style.btnHeroSection} text-center `}
            style={{ backgroundColor: "#2E4A45" }}
          >
            <p className="mb-0 text-white">Browse All services</p>
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
  );
};

export default MoreInfo;
