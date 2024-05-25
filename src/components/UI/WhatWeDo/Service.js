import React from "react";
import homeStyle from "@/styles/Home.module.css";
import style from "@/styles/WhatWeDo.module.css";
import Image from "next/image";
import Link from "next/link";
import dummy from "@/assets/images/service-dummy.svg";

const Service = () => {
  return (
    <div className={`${homeStyle.mainFocusSection}`}>
      <div className={`container ${homeStyle.ourPortfolioArea} h-100`}>
        <div className="d-flex justify-content-center">
          <p
            className={`${homeStyle.heroSectionCompanyTitle}`}
            style={{ color: "#2E4A45" }}
          >
            Our services
          </p>
        </div>
        <h1
          className={`footer-nav-link-title ${homeStyle.heroSectionCompanyHeader} ${style.serviceHeaderTitle} text-center`}
          style={{ color: "#2E4A45", margin: "0 auto" }}
        >
          Fresh designs, expertly crafted.
        </h1>

        {/* <div className="row g-4">
          <div className="col-lg-7 col-md-7 col-sm-12 col-12 d-flex flex-column">
            <div className="flex-grow-1">
              <div className={`${style.serviceDiscriptionArea} `}>
                <h1 className={`${style.serviceTitle} `}>1. UI/UX Design</h1>
                <p className={`${style.serviceDetails} `}>
                  UI/UX design focuses on enhancing user satisfaction by
                  improving the usability, accessibility, and overall experience
                  of a digital product. At Panther Creative Studio, we offer
                  UI/UX design services to ensure that every interaction with
                  your website or application is intuitive and seamless. Our
                  team meticulously considers user needs and behaviors, crafting
                  interfaces that are not only visually appealing but also
                  highly functional.
                  <br />
                  <br />
                  By prioritizing user-centric design principles, we empower
                  businesses to create meaningful connections with their
                  audience and achieve their goals effectively. Partner with us
                  to elevate your digital presence and leave a lasting
                  impression on your users.
                </p>

                <div className="d-flex align-items-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M14.9993 5L5.83268 14.1667L1.66602 10M18.3327 8.33333L12.0827 14.5833L10.8327 13.3333" stroke="#A5F8D3" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
  <path d="M18.334 8.33325L12.084 14.5833L10.834 13.3333" stroke="white" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
                    <p className={`mx-2 ${style.serviceDetailsPoints} `} >Boost site efficiency</p>
                </div>
                <div className="d-flex align-items-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M14.9993 5L5.83268 14.1667L1.66602 10M18.3327 8.33333L12.0827 14.5833L10.8327 13.3333" stroke="#A5F8D3" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
  <path d="M18.334 8.33325L12.084 14.5833L10.834 13.3333" stroke="white" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
                    <p className={`mx-2 ${style.serviceDetailsPoints} `} >Optimized for all devices</p>
                </div>
                <div className="d-flex align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M14.9993 5L5.83268 14.1667L1.66602 10M18.3327 8.33333L12.0827 14.5833L10.8327 13.3333" stroke="#A5F8D3" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
  <path d="M18.334 8.33325L12.084 14.5833L10.834 13.3333" stroke="white" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
                    <p className={`mx-2 ${style.serviceDetailsPoints} `} >Cost-efficient</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-12 col-12 d-flex flex-column">
          <div className="flex-grow-1">

            <Image src={dummy} alt="service" layout=""/>
          </div>
          </div>
        </div> */}

        <div className="container">
          <div className="row g-3 d-flex align-items-stretch">
            {/* section 1 */}
            <div className="col-lg-7 col-md-7 col-sm-12 col-12 d-flex flex-column">
              <div className={`flex-grow-1 ${style.serviceDiscriptionArea}`}>
                <h1 className={style.serviceTitle}>1. UI/UX Design</h1>
                <p className={style.serviceDetails}>
                  UI/UX design focuses on enhancing user satisfaction by
                  improving the usability, accessibility, and overall experience
                  of a digital product. At Panther Creative Studio, we offer
                  UI/UX design services to ensure that every interaction with
                  your website or application is intuitive and seamless. Our
                  team meticulously considers user needs and behaviors, crafting
                  interfaces that are not only visually appealing but also
                  highly functional.
                  <br />
                  <br />
                  By prioritizing user-centric design principles, we empower
                  businesses to create meaningful connections with their
                  audience and achieve their goals effectively. Partner with us
                  to elevate your digital presence and leave a lasting
                  impression on your users.
                </p>
                <div className="d-flex align-items-center mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M14.9993 5L5.83268 14.1667L1.66602 10M18.3327 8.33333L12.0827 14.5833L10.8327 13.3333"
                      stroke="#A5F8D3"
                      strokeWidth="2"
                      strokeLinecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M18.334 8.33325L12.084 14.5833L10.834 13.3333"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className={`mx-2 ${style.serviceDetailsPoints}`}>
                    Boost site efficiency
                  </p>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M14.9993 5L5.83268 14.1667L1.66602 10M18.3327 8.33333L12.0827 14.5833L10.8327 13.3333"
                      stroke="#A5F8D3"
                      strokeWidth="2"
                      strokeLinecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M18.334 8.33325L12.084 14.5833L10.834 13.3333"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className={`mx-2 ${style.serviceDetailsPoints}`}>
                    Optimized for all devices
                  </p>
                </div>
                <div className="d-flex align-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M14.9993 5L5.83268 14.1667L1.66602 10M18.3327 8.33333L12.0827 14.5833L10.8327 13.3333"
                      stroke="#A5F8D3"
                      strokeWidth="2"
                      strokeLinecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M18.334 8.33325L12.084 14.5833L10.834 13.3333"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className={`mx-2 ${style.serviceDetailsPoints}`}>
                    Cost-efficient
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-12 col-12 d-flex">
              <div className="flex-grow-1 d-flex align-items-stretch">
                <Image
                  src={dummy}
                  alt="service"
                  objectFit="cover"
                  className={`w-100 ${style.serviceImage}`}
                />
              </div>
            </div>
            {/* section 2 */}
            <div className="col-lg-7 col-md-7 col-sm-12 col-12 d-flex flex-column order-lg-2 order-md-2 order-1">
              <div className={`flex-grow-1 ${style.serviceDiscriptionArea}`}>
                <h1 className={style.serviceTitle}>2. Website Development</h1>
                <p className={style.serviceDetails}>
                  Website development using Elementor involves leveraging a
                  powerful drag-and-drop page builder plugin to create visually
                  stunning and highly functional websites on the WordPress
                  platform. At Panther Creative Studio, we offer Elementor
                  website development services to provide our clients with the
                  flexibility and ease of customization that this tool offers.
                  <br />
                  <br />
                  With Elementor, we can efficiently design and build websites
                  that align with our client&apos;s unique brand identities and
                  objectives, while also ensuring seamless user experiences. By
                  harnessing the capabilities of Elementor, we empower our
                  clients to easily manage and update their websites, giving
                  them greater control over their online presence.
                </p>
                <div className="d-flex align-items-center mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M14.9993 5L5.83268 14.1667L1.66602 10M18.3327 8.33333L12.0827 14.5833L10.8327 13.3333"
                      stroke="#A5F8D3"
                      strokeWidth="2"
                      strokeLinecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M18.334 8.33325L12.084 14.5833L10.834 13.3333"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className={`mx-2 ${style.serviceDetailsPoints}`}>
                    Establish credibility
                  </p>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M14.9993 5L5.83268 14.1667L1.66602 10M18.3327 8.33333L12.0827 14.5833L10.8327 13.3333"
                      stroke="#A5F8D3"
                      strokeWidth="2"
                      strokeLinecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M18.334 8.33325L12.084 14.5833L10.834 13.3333"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className={`mx-2 ${style.serviceDetailsPoints}`}>
                    Be present 24/7
                  </p>
                </div>
                <div className="d-flex align-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M14.9993 5L5.83268 14.1667L1.66602 10M18.3327 8.33333L12.0827 14.5833L10.8327 13.3333"
                      stroke="#A5F8D3"
                      strokeWidth="2"
                      strokeLinecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M18.334 8.33325L12.084 14.5833L10.834 13.3333"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className={`mx-2 ${style.serviceDetailsPoints}`}>
                    Get more leads
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-12 col-12 d-flex order-lg-1 order-md-1 order-2">
              <div className="flex-grow-1 d-flex align-items-stretch">
                <Image
                  src={dummy}
                  alt="service"
                  objectFit="cover"
                  className={`w-100 ${style.serviceImage}`}
                />
              </div>
            </div>
          </div>
          <div
            className="row g-3 d-flex align-items-stretch"
            style={{ marginTop: "1px" }}
          >
            {/* section 3 */}
            <div className="col-lg-7 col-md-7 col-sm-12 col-12 d-flex flex-column">
              <div className={`flex-grow-1 ${style.serviceDiscriptionArea}`}>
                <h1 className={style.serviceTitle}>
                  3. E-Commerce Development
                </h1>
                <p className={style.serviceDetails}>
                  E-commerce development involves creating online platforms
                  where businesses can sell their products or services directly
                  to consumers. At Panther Creative Studio, we offer e-commerce
                  development services to help businesses establish and expand
                  their online presence. Our expertise lies in designing and
                  building custom e-commerce websites that are tailored to the
                  unique needs and branding of each client.
                  <br />
                  <br />
                  Offering e-commerce development, we help businesses expand
                  their reach, boost sales, and improve customer engagement with
                  seamless online experiences. With our assistance, clients can
                  seize digital marketplace opportunities and achieve e-commerce
                  success efficiently.
                </p>
                <div className="d-flex align-items-center mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M14.9993 5L5.83268 14.1667L1.66602 10M18.3327 8.33333L12.0827 14.5833L10.8327 13.3333"
                      stroke="#A5F8D3"
                      strokeWidth="2"
                      strokeLinecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M18.334 8.33325L12.084 14.5833L10.834 13.3333"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className={`mx-2 ${style.serviceDetailsPoints}`}>
                    Broader reach
                  </p>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M14.9993 5L5.83268 14.1667L1.66602 10M18.3327 8.33333L12.0827 14.5833L10.8327 13.3333"
                      stroke="#A5F8D3"
                      strokeWidth="2"
                      strokeLinecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M18.334 8.33325L12.084 14.5833L10.834 13.3333"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className={`mx-2 ${style.serviceDetailsPoints}`}>
                    24/7 availability
                  </p>
                </div>
                <div className="d-flex align-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M14.9993 5L5.83268 14.1667L1.66602 10M18.3327 8.33333L12.0827 14.5833L10.8327 13.3333"
                      stroke="#A5F8D3"
                      strokeWidth="2"
                      strokeLinecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M18.334 8.33325L12.084 14.5833L10.834 13.3333"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className={`mx-2 ${style.serviceDetailsPoints}`}>
                    Lower business costs
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-12 col-12 d-flex">
              <div className="flex-grow-1 d-flex align-items-stretch">
                <Image
                  src={dummy}
                  alt="service"
                  objectFit="cover"
                  className={`w-100 ${style.serviceImage}`}
                />
              </div>
            </div>
            {/* section 4 */}
            <div className="col-lg-7 col-md-7 col-sm-12 col-12 d-flex flex-column order-lg-2 order-md-2 order-1">
              <div className={`flex-grow-1 ${style.serviceDiscriptionArea}`}>
                <h1 className={style.serviceTitle}>4. Hosting & Support</h1>
                <p className={style.serviceDetails}>
                  Website hosting and support encompass the provision of servers
                  to host websites, ensuring they are accessible and secure,
                  along with ongoing maintenance and technical assistance. At
                  Panther Creative Studio, we offer website hosting and support
                  services to provide our clients with a reliable and efficient
                  online presence.
                  <br />
                  <br />
                  Our team manages the technical aspects of hosting, including
                  server maintenance, security updates, and backups, to ensure
                  optimal website performance. By offering comprehensive hosting
                  and support solutions, we enable our clients to focus on their
                  core business activities while we take care of their
                  website&apos;s technical needs.
                </p>
                <div className="d-flex align-items-center mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M14.9993 5L5.83268 14.1667L1.66602 10M18.3327 8.33333L12.0827 14.5833L10.8327 13.3333"
                      stroke="#A5F8D3"
                      strokeWidth="2"
                      strokeLinecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M18.334 8.33325L12.084 14.5833L10.834 13.3333"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className={`mx-2 ${style.serviceDetailsPoints}`}>
                    Minimize downtime & ensure reliability
                  </p>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M14.9993 5L5.83268 14.1667L1.66602 10M18.3327 8.33333L12.0827 14.5833L10.8327 13.3333"
                      stroke="#A5F8D3"
                      strokeWidth="2"
                      strokeLinecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M18.334 8.33325L12.084 14.5833L10.834 13.3333"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className={`mx-2 ${style.serviceDetailsPoints}`}>
                    Robust security
                  </p>
                </div>
                <div className="d-flex align-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M14.9993 5L5.83268 14.1667L1.66602 10M18.3327 8.33333L12.0827 14.5833L10.8327 13.3333"
                      stroke="#A5F8D3"
                      strokeWidth="2"
                      strokeLinecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M18.334 8.33325L12.084 14.5833L10.834 13.3333"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className={`mx-2 ${style.serviceDetailsPoints}`}>
                    Technical assistance
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-12 col-12 d-flex order-lg-1 order-md-1 order-2">
              <div className="flex-grow-1 d-flex align-items-stretch">
                <Image
                  src={dummy}
                  alt="service"
                  objectFit="cover"
                  className={`w-100 ${style.serviceImage}`}
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className="container d-flex justify-content-center align-items-center"
          style={{ height: "auto", marginTop: "40px" }}
        ></div>
      </div>
    </div>
  );
};

export default Service;
