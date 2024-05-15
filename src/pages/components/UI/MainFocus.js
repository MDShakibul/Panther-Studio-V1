import React from "react";
import style from "../../../styles/Home.module.css";
import MainFocusImg from "../../assets/images/main-focus-image.svg";
import Test from "../../assets/images/test.svg";
import Image from "next/image";

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

       {/*  <div className="row">
            <div className="col-lg-4 d-flex flex-column">
            <div className="flex-grow-1 h-100">

                <Image src={MainFocusImg} alt="panther-studio"/>
            </div>
            </div>
            <div class="col-md-4 d-flex flex-column">
                <div class="red-section column flex-grow-1 d-flex justify-content-center">
                    <Image src={Test} alt="panther-studio"/>
                </div>
            <div class="blue-section flex-grow-1">
                <p>sdf</p>
            </div>
        </div>
            <div className="col-lg-4 d-flex flex-column">
            <div className="flex-grow-1 h-100">

                <Image src={MainFocusImg} alt="panther-studio"/>
            </div>
            </div>
        </div> */}

        <div className="row">
            <div className="col-lg-4"><Image src={MainFocusImg} alt="panther-studio" layout="responsive"
        width={500}
        height={500}/></div>
            <div className="col-lg-4"><Image src={MainFocusImg} alt="panther-studio" layout="responsive"
        width={500}
        height={500}/></div>
            <div className="col-lg-4"><Image src={MainFocusImg} alt="panther-studio" layout="responsive"
        width={500}
        height={500}/></div>
        </div>


        
      </div>
    </div>
  );
};

export default MainFocus;
