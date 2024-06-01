import Image from "next/image";
import React, { useEffect, useState } from "react";
import dummy from "@/assets/images/service-dummy.svg";
import style from "@/styles/WhatWeDo.module.css";
import homeStyle from "@/styles/Home.module.css";
const Accordion = () => {
  const [isMobileView, setIsMobileView] = useState(false);
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 768) {
        setIsMobileView(false);
      } else {
        setIsMobileView(true);
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    const accordionItems = document.querySelectorAll(".accordion-item");
    accordionItems.forEach((item) => {
      const button = item.querySelector(".accordion-button");
      const collapse = item.querySelector(".accordion-collapse");
      const icon = item.querySelector(".toggle-icon");
      if (collapse.classList.contains("show")) {
        item
          .querySelector(".accordion-header")
          .classList.add("accordion-header-hidden");
      }
      button.addEventListener("click", function () {
        if (!collapse.classList.contains("show")) {
          item
            .querySelector(".accordion-header")
            .classList.add("accordion-header-hidden");
        }
      });
      collapse.addEventListener("hidden.bs.collapse", function () {
        item
          .querySelector(".accordion-header")
          .classList.remove("accordion-header-hidden");
      });
      if (icon) {
        icon.addEventListener("click", function () {
          collapse.classList.remove("show");
          item
            .querySelector(".accordion-header")
            .classList.remove("accordion-header-hidden");
        });
      }
    });
    // Update button text based on state
    const accordionButtons = document.querySelectorAll(".accordion-button");
    accordionButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const isCollapsed = button.classList.contains("collapsed");
        button.querySelector(".accordion-title").textContent = isCollapsed
          ? "-"
          : "+";
      });
    });
  }, []);
  return (
    <div className="container mt-5">
      <div className="accordion" id="customAccordion">
        <div className="accordion-item">
          <h2
            className="accordion-header accordion-header-hidden"
            id="headingOne"
          >
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              1. UI/UX Design <span className="accordion-title">+</span>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#customAccordion"
          >
            <div className="accordion-body px-0 position-relative">
              <div className="row gy-3">
                <div className="col-lg-7 col-md-7 col-sm-12 col-12 d-flex flex-column content-left">
                  <div
                    className={`flex-grow-1 ${style.serviceDiscriptionArea} p-0 `}
                  >
                    <p
                      className={`${homeStyle.topCloseAccordion} toggle-icon mb-0 d-flex justify-content-end pt-4 pe-4`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        className={`${homeStyle.topCloseAccordion}`}
                      >
                        <path
                          d="M5 12H19"
                          stroke="#BEE0D6"
                          strokeWidth="2"
                          strokeLinecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </p>

                    <div className={`${homeStyle.homeAccordionTextArea}`}>
                      <div>
                        <p
                          className={`${homeStyle.homeAccordionTextAreaTitle}`}
                        >
                          {" "}
                          1. UI/UX Design
                        </p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          className={`${homeStyle.closeAccordion}`}
                        >
                          <path
                            d="M5 12H19"
                            stroke="#BEE0D6"
                            strokeWidth="2"
                            strokeLinecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <p className={`${homeStyle.titleBold}`}>UI/UX Design</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-md-5 col-sm-12 col-12 d-flex content-right">
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
              <div className="overlay-content-container">
                <div
                  className="row w-100"
                  style={{ marginLeft: isMobileView ? "0rem" : undefined }}
                >
                  <div className="col-lg-4 col-md-6 overlay-first-col">
                    <div className="overlay-content">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <path d="M16.6667 3.33325H23.3334M20 23.3333V16.6666M6.66669 21.6666C7.07479 18.4265 8.65778 15.4489 11.1154 13.2985C13.5731 11.148 16.7345 9.97432 20 9.99992C22.1568 10.0022 24.2808 10.5277 26.1898 11.5312C28.0989 12.5347 29.736 13.9864 30.9607 15.7616C32.1855 17.5369 32.9613 19.5827 33.2217 21.7237C33.482 23.8647 33.2191 26.0369 32.4555 28.0539C31.6919 30.071 30.4504 31.8727 28.8375 33.3045C27.2246 34.7363 25.2885 35.7555 23.1951 36.2746C21.1018 36.7937 18.9138 36.7973 16.8187 36.285C14.7237 35.7727 12.7842 34.7598 11.1667 33.3333L6.66669 29.3333" stroke="#2E4A45" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M15 28.3333H6.66669V36.6666" stroke="#BEE0D6" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                      <p className="overlay-title">Boost site efficiency</p>
                      <p className="overlay-details">
                      A well-designed, user-friendly site with fast loads enhances customer satisfaction and retention.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 overlay-sec-col">
                    <div className="overlay-content">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <path d="M18.3333 13.3333H8.33333C6.49238 13.3333 5 14.8256 5 16.6666V33.3333C5 35.1742 6.49238 36.6666 8.33333 36.6666H18.3333C20.1743 36.6666 21.6667 35.1742 21.6667 33.3333V16.6666C21.6667 14.8256 20.1743 13.3333 18.3333 13.3333Z" stroke="#BEE0D6" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M8.33337 6.66659C8.33337 5.78253 8.68456 4.93468 9.30968 4.30956C9.93481 3.68444 10.7827 3.33325 11.6667 3.33325H31.6667C32.5508 3.33325 33.3986 3.68444 34.0237 4.30956C34.6488 4.93468 35 5.78253 35 6.66659V33.3333C35 34.2173 34.6488 35.0652 34.0237 35.6903C33.3986 36.3154 32.5508 36.6666 31.6667 36.6666H27.6667M13.3334 29.9999H13.35" stroke="#2E4A45" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                      <p className="overlay-title">Optimized for all devices</p>
                      <p className="overlay-details">
                      UI/UX design ensures a consistent, optimal experience on all devices, reaching a wider audience.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 overlay-third-col">
                    <div className="overlay-content">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <path d="M11.6666 20H20M6.41662 14.3667C6.17336 13.2709 6.21071 12.1314 6.52522 11.0539C6.83972 9.97639 7.4212 8.99574 8.21574 8.20287C9.01027 7.41 9.99214 6.83057 11.0703 6.51832C12.1485 6.20607 13.288 6.17111 14.3833 6.41667C14.9861 5.47384 15.8166 4.69793 16.7982 4.16048C17.7798 3.62302 18.8809 3.34131 20 3.34131C21.119 3.34131 22.2201 3.62302 23.2017 4.16048C24.1833 4.69793 25.0138 5.47384 25.6166 6.41667C26.7136 6.17004 27.8551 6.20485 28.935 6.51786C30.0148 6.83086 30.998 7.4119 31.793 8.20692C32.5881 9.00194 33.1691 9.98512 33.4821 11.065C33.7951 12.1449 33.8299 13.2864 33.5833 14.3833C34.5261 14.9862 35.302 15.8167 35.8395 16.7983C36.3769 17.7798 36.6586 18.8809 36.6586 20C36.6586 21.1191 36.3769 22.2202 35.8395 23.2017C35.302 24.1833 34.5261 25.0138 33.5833 25.6167C33.8288 26.7119 33.7939 27.8515 33.4816 28.9297C33.1694 30.0078 32.59 30.9897 31.7971 31.7842C31.0042 32.5788 30.0236 33.1602 28.9461 33.4747C27.8685 33.7892 26.7291 33.8266 25.6333 33.5833C25.0312 34.5298 24.2001 35.309 23.2168 35.8489C22.2336 36.3887 21.13 36.6718 20.0083 36.6718C18.8866 36.6718 17.783 36.3887 16.7997 35.8489C15.8165 35.309 14.9854 34.5298 14.3833 33.5833C13.288 33.8289 12.1485 33.7939 11.0703 33.4817C9.99214 33.1694 9.01027 32.59 8.21574 31.7971C7.4212 31.0043 6.83972 30.0236 6.52522 28.9461C6.21071 27.8686 6.17336 26.7291 6.41662 25.6333C5.46655 25.0321 4.68398 24.2003 4.1417 23.2154C3.59943 22.2304 3.31506 21.1243 3.31506 20C3.31506 18.8757 3.59943 17.7696 4.1417 16.7846C4.68398 15.7997 5.46655 14.9679 6.41662 14.3667Z" stroke="#2E4A45" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M11.6666 20H20" stroke="#BEE0D6" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M25 15.6666C24.1142 14.631 22.9323 13.8917 21.6135 13.5483C20.2947 13.205 18.9024 13.274 17.624 13.7461C16.3457 14.2183 15.2427 15.0708 14.4637 16.189C13.6847 17.3071 13.2671 18.6372 13.2671 19.9999C13.2671 21.3627 13.6847 22.6927 14.4637 23.8108C15.2427 24.929 16.3457 25.7816 17.624 26.2537C18.9024 26.7258 20.2947 26.7949 21.6135 26.4515C22.9323 26.1081 24.1142 25.3689 25 24.3333" stroke="#BEE0D6" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                      <p className="overlay-title">Cost-efficient</p>
                      <p className="overlay-details">
                      High-quality UI/UX design prevents usability issues, saving costs on future redesigns.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              2. Website Development <span className="accordion-title">+</span>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#customAccordion"
          >
            <div className="accordion-body px-0 position-relative">
              <div className="row gy-3">
                <div className="col-lg-7 col-md-7 col-sm-12 col-12 d-flex flex-column content-left">
                  <div
                    className={`flex-grow-1 ${style.serviceDiscriptionArea} p-0 `}
                  >
                    <p
                      className={`${homeStyle.topCloseAccordion} toggle-icon mb-0 d-flex justify-content-end pt-4 pe-4`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        className={`${homeStyle.topCloseAccordion}`}
                      >
                        <path
                          d="M5 12H19"
                          stroke="#BEE0D6"
                          strokeWidth="2"
                          strokeLinecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </p>

                    <div className={`${homeStyle.homeAccordionTextArea}`}>
                      <div>
                        <p
                          className={`${homeStyle.homeAccordionTextAreaTitle}`}
                        >
                          {" "}
                          2. Website Development
                        </p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          className={`${homeStyle.closeAccordion}`}
                        >
                          <path
                            d="M5 12H19"
                            stroke="#BEE0D6"
                            strokeWidth="2"
                            strokeLinecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <p className={`${homeStyle.titleBold}`}>Website Development</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-md-5 col-sm-12 col-12 d-flex content-right">
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
              <div className="overlay-content-container">
                <div
                  className="row w-100"
                  style={{ marginLeft: isMobileView ? "0rem" : undefined }}
                >
                  <div className="col-lg-4 col-md-6 overlay-first-col">
                    <div className="overlay-content">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                      >
                        <path
                          d="M15 5H6.66667C5.74619 5 5 5.74619 5 6.66667V18.3333C5 19.2538 5.74619 20 6.66667 20H15C15.9205 20 16.6667 19.2538 16.6667 18.3333V6.66667C16.6667 5.74619 15.9205 5 15 5Z"
                          stroke="#2E4A45"
                          strokeWidth="3"
                          strokeLinecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M33.334 5H25.0007C24.0802 5 23.334 5.74619 23.334 6.66667V11.6667C23.334 12.5871 24.0802 13.3333 25.0007 13.3333H33.334C34.2545 13.3333 35.0007 12.5871 35.0007 11.6667V6.66667C35.0007 5.74619 34.2545 5 33.334 5Z"
                          stroke="#BEE0D6"
                          strokeWidth="3"
                          strokeLinecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M33.334 20H25.0007C24.0802 20 23.334 20.7462 23.334 21.6667V33.3333C23.334 34.2538 24.0802 35 25.0007 35H33.334C34.2545 35 35.0007 34.2538 35.0007 33.3333V21.6667C35.0007 20.7462 34.2545 20 33.334 20Z"
                          stroke="#2E4A45"
                          strokeWidth="3"
                          strokeLinecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M15 26.6667H6.66667C5.74619 26.6667 5 27.4129 5 28.3334V33.3334C5 34.2539 5.74619 35.0001 6.66667 35.0001H15C15.9205 35.0001 16.6667 34.2539 16.6667 33.3334V28.3334C16.6667 27.4129 15.9205 26.6667 15 26.6667Z"
                          stroke="#BEE0D6"
                          strokeWidth="3"
                          strokeLinecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <p className="overlay-title">Establish credibility</p>
                      <p className="overlay-details">
                      An online presence builds trust and legitimacy; a well-designed website represents your brand effectively.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 overlay-sec-col">
                    <div className="overlay-content">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                      >
                        <path
                          d="M31.668 15C34.4294 15 36.668 12.7614 36.668 10C36.668 7.23858 34.4294 5 31.668 5C28.9065 5 26.668 7.23858 26.668 10C26.668 12.7614 28.9065 15 31.668 15Z"
                          stroke="#BEE0D6"
                          strokeWidth="3"
                          strokeLinecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M36.6673 20V25C36.6673 25.8841 36.3161 26.7319 35.691 27.357C35.0659 27.9821 34.218 28.3333 33.334 28.3333H6.66732C5.78326 28.3333 4.93542 27.9821 4.31029 27.357C3.68517 26.7319 3.33398 25.8841 3.33398 25V8.33333C3.33398 7.44928 3.68517 6.60143 4.31029 5.97631C4.93542 5.35119 5.78326 5 6.66732 5H21.6673M20.0007 28.3333V35M13.334 35H26.6673"
                          stroke="#2E4A45"
                          strokeWidth="3"
                          strokeLinecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <p className="overlay-title">Be present 24/7</p>
                      <p className="overlay-details">
                      UI/UX design ensures a consistent, optimal experience on all devices, reaching a wider audience.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 overlay-third-col">
                    <div className="overlay-content">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                      >
                        <path
                          d="M21.6667 10H26.6667C27.5507 10 28.3986 10.3512 29.0237 10.9763C29.6488 11.6014 30 12.4493 30 13.3333V25M18.3333 30H13.3333C12.4493 30 11.6014 29.6488 10.9763 29.0237C10.3512 28.3986 10 27.5507 10 26.6667V15"
                          stroke="#2E4A45"
                          strokeWidth="3"
                          strokeLinecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M30 35C32.7614 35 35 32.7614 35 30C35 27.2386 32.7614 25 30 25C27.2386 25 25 27.2386 25 30C25 32.7614 27.2386 35 30 35Z"
                          stroke="#BEE0D6"
                          strokeWidth="3"
                          strokeLinecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M10 15C12.7614 15 15 12.7614 15 10C15 7.23858 12.7614 5 10 5C7.23858 5 5 7.23858 5 10C5 12.7614 7.23858 15 10 15Z"
                          stroke="#BEE0D6"
                          strokeWidth="3"
                          strokeLinecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <p className="overlay-title">Get more leads</p>
                      <p className="overlay-details">
                      High-quality UI/UX design prevents usability issues, saving costs on future redesigns.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              3. E-Commerce Development{" "}
              <span className="accordion-title">+</span>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#customAccordion"
          >
            <div className="accordion-body px-0 position-relative">
              <div className="row gy-3">
                <div className="col-lg-7 col-md-7 col-sm-12 col-12 d-flex flex-column content-left">
                  <div
                    className={`flex-grow-1 ${style.serviceDiscriptionArea} p-0 `}
                  >
                    <p
                      className={`${homeStyle.topCloseAccordion} toggle-icon mb-0 d-flex justify-content-end pt-4 pe-4`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        className={`${homeStyle.topCloseAccordion}`}
                      >
                        <path
                          d="M5 12H19"
                          stroke="#BEE0D6"
                          strokeWidth="2"
                          strokeLinecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </p>

                    <div className={`${homeStyle.homeAccordionTextArea2}`}>
                      <div className={`${homeStyle.homeAccordionTextArea2Title}`}>
                        <p
                          className={`${homeStyle.homeAccordionTextAreaTitle}`}
                        >
                          {" "}
                          3. E-Commerce Development
                        </p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          className={`${homeStyle.closeAccordion}`}
                        >
                          <path
                            d="M5 12H19"
                            stroke="#BEE0D6"
                            strokeWidth="2"
                            strokeLinecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <p className={`${homeStyle.titleBold2}`}>E-Commerce Development</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-md-5 col-sm-12 col-12 d-flex content-right">
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
              <div className="overlay-content-container">
                <div
                  className="row w-100"
                  style={{ marginLeft: isMobileView ? "0rem" : undefined }}
                >
                  <div className="col-lg-4 col-md-6 overlay-first-col">
                    <div className="overlay-content">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <path d="M3.33331 19.9999H36.6666M20 3.33325C15.7204 7.82684 13.3333 13.7945 13.3333 19.9999C13.3333 26.2054 15.7204 32.173 20 36.6666C24.2796 32.173 26.6666 26.2054 26.6666 19.9999C26.6666 13.7945 24.2796 7.82684 20 3.33325Z" stroke="#2E4A45" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M20 36.6666C29.2047 36.6666 36.6666 29.2047 36.6666 19.9999C36.6666 10.7952 29.2047 3.33325 20 3.33325C10.7952 3.33325 3.33331 10.7952 3.33331 19.9999C3.33331 29.2047 10.7952 36.6666 20 36.6666Z" stroke="#BEE0D6" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                      <p className="overlay-title">Broader reach</p>
                      <p className="overlay-details">
                      Harness the internet to reach local and international customers, boosting earnings and driving company growth.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 overlay-sec-col">
                    <div className="overlay-content">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <path d="M31.668 15C34.4294 15 36.668 12.7614 36.668 10C36.668 7.23858 34.4294 5 31.668 5C28.9065 5 26.668 7.23858 26.668 10C26.668 12.7614 28.9065 15 31.668 15Z" stroke="#BEE0D6" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M36.6673 20V25C36.6673 25.8841 36.3161 26.7319 35.691 27.357C35.0659 27.9821 34.218 28.3333 33.334 28.3333H6.66732C5.78326 28.3333 4.93542 27.9821 4.31029 27.357C3.68517 26.7319 3.33398 25.8841 3.33398 25V8.33333C3.33398 7.44928 3.68517 6.60143 4.31029 5.97631C4.93542 5.35119 5.78326 5 6.66732 5H21.6673M20.0007 28.3333V35M13.334 35H26.6673" stroke="#2E4A45" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                      <p className="overlay-title">Be present 24/7</p>
                      <p className="overlay-details">
                      E-commerce sites run 24/7, boosting sales and enhancing customer relationships beyond physical store limits.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 overlay-third-col">
                    <div className="overlay-content">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <path d="M5 26.6667L11.6667 33.3334M11.6667 33.3334L18.3333 26.6667M11.6667 33.3334V6.66675M18.3333 6.66675H35M18.3333 13.3334H30M18.3333 20.0001H25" stroke="#2E4A45" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M18.334 6.66675H35.0007M18.334 13.3334H30.0007M18.334 20.0001H25.0007" stroke="#BEE0D6" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                      <p className="overlay-title">Lower business costs</p>
                      <p className="overlay-details">
                      E-commerce sites save on staffing and maintenance, offering high ROI ideal for startups & large businesses.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              4. Hosting & Support <span className="accordion-title">+</span>
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#customAccordion"
          >
            <div className="accordion-body px-0 position-relative">
              <div className="row gy-3">
                <div className="col-lg-7 col-md-7 col-sm-12 col-12 d-flex flex-column content-left">
                  <div
                    className={`flex-grow-1 ${style.serviceDiscriptionArea} p-0 `}
                  >
                    <p
                      className={`${homeStyle.topCloseAccordion} toggle-icon mb-0 d-flex justify-content-end pt-4 pe-4`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        className={`${homeStyle.topCloseAccordion}`}
                      >
                        <path
                          d="M5 12H19"
                          stroke="#BEE0D6"
                          strokeWidth="2"
                          strokeLinecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </p>

                    <div className={`${homeStyle.homeAccordionTextArea}`}>
                      <div>
                        <p
                          className={`${homeStyle.homeAccordionTextAreaTitle}`}
                        >
                          {" "}
                          4. Hosting & Support
                        </p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          className={`${homeStyle.closeAccordion}`}
                        >
                          <path
                            d="M5 12H19"
                            stroke="#BEE0D6"
                            strokeWidth="2"
                            strokeLinecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <p className={`${homeStyle.titleBold}`}>Hosting & Support</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-md-5 col-sm-12 col-12 d-flex content-right">
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
              <div className="overlay-content-container">
                <div
                  className="row w-100"
                  style={{ marginLeft: isMobileView ? "0rem" : undefined }}
                >
                  <div className="col-lg-4 col-md-6 overlay-first-col">
                    <div className="overlay-content">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <path d="M3.33331 13.3332V9.99984C3.33331 9.11578 3.6845 8.26794 4.30962 7.64281C4.93474 7.01769 5.78259 6.6665 6.66665 6.6665H33.3333C34.2174 6.6665 35.0652 7.01769 35.6903 7.64281C36.3155 8.26794 36.6666 9.11578 36.6666 9.99984V29.9998C36.6666 30.8839 36.3155 31.7317 35.6903 32.3569C35.0652 32.982 34.2174 33.3332 33.3333 33.3332H23.3333M3.33331 19.9998C6.74561 20.362 9.9306 21.8831 12.357 24.3095C14.7834 26.7359 16.3045 29.9209 16.6666 33.3332M3.33331 26.6665C4.98774 26.9746 6.51011 27.7764 7.70008 28.9664C8.89005 30.1564 9.69185 31.6787 9.99998 33.3332M3.33331 33.3332H3.34998" stroke="#2E4A45" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M3.33398 20C6.74628 20.3621 9.93127 21.8832 12.3577 24.3096C14.7841 26.7361 16.3052 29.921 16.6673 33.3333M3.33398 26.6667C4.98841 26.9748 6.51078 27.7766 7.70075 28.9666C8.89072 30.1565 9.69253 31.6789 10.0007 33.3333M3.33398 33.3333H3.35065" stroke="#BEE0D6" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                      <p className="overlay-title">Reliable performance</p>
                      <p className="overlay-details">
                      Ensures website stability, uptime, and fast loading speeds, enhancing user experience and satisfaction.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 overlay-sec-col">
                    <div className="overlay-content">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <path d="M35 26.667V30.0003C35 31.7684 34.2976 33.4641 33.0474 34.7144C31.7971 35.9646 30.1014 36.667 28.3333 36.667H20" stroke="#BEE0D6" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M5 18.3335H10C10.8841 18.3335 11.7319 18.6847 12.357 19.3098C12.9821 19.9349 13.3333 20.7828 13.3333 21.6668V26.6668C13.3333 27.5509 12.9821 28.3987 12.357 29.0239C11.7319 29.649 10.8841 30.0002 10 30.0002H8.33333C7.44928 30.0002 6.60143 29.649 5.97631 29.0239C5.35119 28.3987 5 27.5509 5 26.6668V18.3335ZM5 18.3335C5 16.3637 5.38799 14.4131 6.14181 12.5932C6.89563 10.7734 8.00052 9.11977 9.3934 7.72689C10.7863 6.33402 12.4399 5.22912 14.2597 4.4753C16.0796 3.72148 18.0302 3.3335 20 3.3335C21.9698 3.3335 23.9204 3.72148 25.7403 4.4753C27.5601 5.22912 29.2137 6.33402 30.6066 7.72689C31.9995 9.11977 33.1044 10.7734 33.8582 12.5932C34.612 14.4131 35 16.3637 35 18.3335M35 18.3335V26.6668C35 27.5509 34.6488 28.3987 34.0237 29.0239C33.3986 29.649 32.5507 30.0002 31.6667 30.0002H30C29.1159 30.0002 28.2681 29.649 27.643 29.0239C27.0179 28.3987 26.6667 27.5509 26.6667 26.6668V21.6668C26.6667 20.7828 27.0179 19.9349 27.643 19.3098C28.2681 18.6847 29.1159 18.3335 30 18.3335H35Z" stroke="#2E4A45" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                      <p className="overlay-title">Expert assistance</p>
                      <p className="overlay-details">
                      Access to technical support & problem-solving expertise minimizes downtime and ensures smooth operation.</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 overlay-third-col">
                    <div className="overlay-content">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <path d="M35 35L25 25M35 35V27M35 35H27M5 27V35M5 35H13M5 35L15 25M35 13V5M35 5H27M35 5L25 15M5 13V5M5 5H13M5 5L15 15" stroke="#2E4A45" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M35 13V5M35 5H27M35 5L25 15" stroke="#BEE0D6" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                      <p className="overlay-title">Scalability</p>
                      <p className="overlay-details">
                      Accommodate growth with flexible resources, ensuring seamless performance as needs evolve.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Accordion;
