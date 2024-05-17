import React from "react";
import style from "../../../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";

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
          className={`footer-nav-link-title ${style.heroSectionCompanyHeader} w-100 text-center`}
          style={{ color: "#2E4A45" }}
        >
         More than just web designers.
        </h1>


        
      </div>
    </div>
  );
};

export default MoreInfo;
