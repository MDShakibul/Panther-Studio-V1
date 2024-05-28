import React, { useState } from "react";
import homeStyle from "@/styles/Home.module.css";
import style from "@/styles/Studio.module.css";
import Image from "next/image";
import Link from "next/link";
import dummy from "@/assets/images/service-dummy.svg";
import { collaboration } from "@/utils/studio";
import Slider from "react-slick";

const Collaboration = ({isMobileView}) => {
  const [active, setActive] = useState("passion");

  const handleActive = (nowActive) => {
    setActive(nowActive);
  };

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1.4,
    slidesToScroll: 1,
  };
  return (
    <div className={`${homeStyle.mainFocusSection}`}>
      <div className={`container ${homeStyle.ourPortfolioArea} h-100`}>
        <div className="d-flex justify-content-center">
          <p
            className={`${homeStyle.heroSectionCompanyTitle}`}
            style={{ color: "#2E4A45" }}
          >
            Nurturing excellence
          </p>
        </div>
        <h1
          className={`footer-nav-link-title ${homeStyle.heroSectionCompanyHeader} ${style.collaborationHeaderTitle} text-center`}
          style={{ color: "#2E4A45" }}
        >
          Pioneering collaborative excellence at Panther.
        </h1>

{
  isMobileView ? 

  <div className="row g-3 d-flex align-items-stretch">
            <div className="col-lg-7 col-md-7 d-flex flex-column">
              <div className={`flex-grow-1 ${style.collaborationDetails}`}>
                <p className={`${style.collaborationInfo}`}>{collaboration(active).title}</p>
                <p className={`${style.collaborationInfoDetails} mb-0`}>{collaboration(active).details}</p>
              </div>
            </div>
            <div className="col-lg-5 col-md-5 d-flex">
              <div className="flex-grow-1 d-flex align-items-stretch">
                <div className="w-100">
                <div className={`${style.btnCollaborationDetails} ${active=== 'passion' ? style.Active : style.Inactive}  w-100 mb-3`} onClick={()=>handleActive('passion')}>
                    <p className="mb-0">Our Passion</p>
                    <svg class="text-danger" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <path d="M11.666 11.6666H28.3327M28.3327 11.6666V28.3333M28.3327 11.6666L11.666 28.3333" style={{ stroke: active=== 'passion' ? '#BEE0D6' : '#2E4A45' }} stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                </div>
                <div className={`${style.btnCollaborationDetails} ${active=== 'commitment' ? style.Active : style.Inactive} w-100 mb-3`} onClick={()=>handleActive('commitment')}>
                    <p className="mb-0">Our Commitment</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <path d="M11.666 11.6666H28.3327M28.3327 11.6666V28.3333M28.3327 11.6666L11.666 28.3333" style={{ stroke: active=== 'commitment' ? '#BEE0D6' : '#2E4A45' }} stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                </div>
                <div className={`${style.btnCollaborationDetails} ${active=== 'quality' ? style.Active : style.Inactive} w-100`} onClick={()=>handleActive('quality')}>
                    <p className="mb-0">Our Quality</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <path d="M11.666 11.6666H28.3327M28.3327 11.6666V28.3333M28.3327 11.6666L11.666 28.3333" style={{ stroke: active=== 'quality' ? '#BEE0D6' : '#2E4A45' }}  stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                </div>
                </div>
              </div>
            </div>
        </div>

        :

        <div className="container" style={{ overflow:'hidden' }}>
          <Slider {...settings}>
            <div className="pe-3" >
              <div
                className={`${style.btnCollaborationDetails} ${
                  active === "passion" ? style.Active : style.Inactive
                }  w-100`}
                onClick={() => handleActive("passion")}
              >
                <p className="mb-0">Our Passion</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M7 7H17M17 7V17M17 7L7 17" style={{ stroke: active=== 'passion' ? '#BEE0D6' : '#2E4A45' }} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
              </div>
            </div>
            <div className="pe-3">
            <div className={`${style.btnCollaborationDetails} ${active=== 'commitment' ? style.Active : style.Inactive} w-100`} onClick={()=>handleActive('commitment')}>
                    <p className="mb-0">Our Commitment</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M7 7H17M17 7V17M17 7L7 17" style={{ stroke: active=== 'commitment' ? '#BEE0D6' : '#2E4A45' }} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                </div>
            </div>
            <div>
            <div className={`${style.btnCollaborationDetails} ${active=== 'quality' ? style.Active : style.Inactive} w-100`} onClick={()=>handleActive('quality')}>
                    <p className="mb-0">Our Quality</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M7 7H17M17 7V17M17 7L7 17" style={{ stroke: active=== 'quality' ? '#BEE0D6' : '#2E4A45' }} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                </div>
            </div>
          </Slider>

          <div className={`flex-grow-1 ${style.collaborationDetails}`}>
                <p className={`${style.collaborationInfo}`}>{collaboration(active).title}</p>
                <p className={`${style.collaborationInfoDetails} mb-0`}>{collaboration(active).details}</p>
              </div>
        </div>

}
       
        
      </div>
    </div>
  );
};

export default Collaboration;
