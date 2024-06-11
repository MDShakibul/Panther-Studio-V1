import React from "react";
import style from "@/styles/Home.module.css";
import MainFocusImg from "@/assets/images/main-focus-image.png";
import Image from "next/image";
import Link from "next/link";

const MainFocus = () => {
  return (
    <div className={`${style.mainFocusSection}`}>
      <div className={`container ${style.ourPortfolioArea} h-100`}>
        <div className="d-flex justify-content-center">
          <p
            className={`${style.heroSectionCompanyTitle}`}
            style={{ color: "#2E4A45" }}
          >
            Selected works
          </p>
        </div>
        <h1
          className={`footer-nav-link-title ${style.heroSectionCompanyHeader} w-100 text-center`}
          style={{ color: "#2E4A45" }}
        >
          Focused on creating effective websites for client success.
        </h1>

        <div className="container">
          <div className="row gy-5">
            <div className="col-lg-4 col-md-6 d-flex flex-column order-1">
              <div className="flex-grow-1 d-flex">
                <Image
                  src={MainFocusImg}
                  alt="Featured image"
                  layout="intrinsic"
                  className="img-fluid w-100"
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex flex-column order-lg-2 order-md-2 order-3">
              <div className="flex-grow-1 d-flex flex-column">
                <div className="flex-grow-1 d-flex mb-3">
                  <Image
                    src={MainFocusImg}
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
                    href={""}
                    className={`text-white ${style.btnHeroSection} w-100 text-center d-flex justify-content-between btn-animated btn-2`}
                    style={{ backgroundColor: "#2E4A45" }}
                  >
                    <p className="mb-0 text-white">More about us</p>
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
            <div className="col-lg-4 col-md-6 d-flex flex-column order-lg-3 order-md-3 order-2">
              <div className="flex-grow-1 d-flex">
                <Image
                  src={MainFocusImg}
                  alt="Featured image"
                  layout="intrinsic"
                  className="img-fluid w-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainFocus;
