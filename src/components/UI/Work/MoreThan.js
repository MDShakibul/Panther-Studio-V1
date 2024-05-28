import React from "react";
import style from "@/styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";

const MoreThan = () => {
  return (
    <div className={`${style.mainFocusSection} h-100`}>
      <div className="container">
        <div className={` ${style.heroSectionArea}`}>
          <div className={` ${style.workTitleArea} h-100`}>
            <p
              className={`${style.heroSectionCompanyTitle}`}
              style={{ color: "#2E4A45" }}
            >
              Looking to see more?
            </p>
            <h1
              className={`footer-nav-link-title ${style.heroSectionCompanyHeader} w-100 work-header-title-bottom`}
              style={{ color: "#2E4A45", margin: "0 auto" }}
            >
              We share our work on other social platforms.
            </h1>
          </div>




          <div className="row">
          <div className="col-lg-3"></div>
          <div className="col-lg-8">
            <p className={style.workDetails}>
            As an agency, we actively showcase our work on Dribbble, sharing our latest designs and projects. It&apos;s a platform where creativity thrives, and we&apos;re excited to contribute to the community. Follow us for updates on our innovative creations!.
            </p>


<div className="header-title-bottom">

            <Link
            href={"https://dribbble.com/pantherstudiocreations/"}
            target="_blank"
            className={`text-white ${style.btnHeroSection} text-center `}
            style={{ backgroundColor: "#2E4A45" }}
          >
            <p className="mb-0 text-white">Find us on dribbble</p>
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
          <div className="col-lg-1"></div>
        </div>


        </div>
      </div>
    </div>
  );
};

export default MoreThan;
