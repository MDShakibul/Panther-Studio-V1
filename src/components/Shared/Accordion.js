import Image from "next/image";
import React, { useEffect } from "react";
import dummy from "@/assets/images/service-dummy.svg";
import style from "@/styles/WhatWeDo.module.css";
import homeStyle from "@/styles/Home.module.css";
const Accordion = () => {
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
                    <p className={`${homeStyle.topCloseAccordion} toggle-icon mb-0 d-flex justify-content-end pt-4 pe-4`}>
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
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </p>

                    <div className={`${homeStyle.homeAccordionTextArea}`}>

                    <div>
                    <p className={`${homeStyle.homeAccordionTextAreaTitle}`}> 1. UI/UX Design</p>
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
                          stroke-linecap="round"
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
              <div class="overlay-content-container">
                <div class="row w-100">
                    <div class="col-lg-4 col-md-6 overlay-first-col" >
                        <div class="overlay-content">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <path d="M15 5H6.66667C5.74619 5 5 5.74619 5 6.66667V18.3333C5 19.2538 5.74619 20 6.66667 20H15C15.9205 20 16.6667 19.2538 16.6667 18.3333V6.66667C16.6667 5.74619 15.9205 5 15 5Z" stroke="#2E4A45" strokeWidth="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M33.334 5H25.0007C24.0802 5 23.334 5.74619 23.334 6.66667V11.6667C23.334 12.5871 24.0802 13.3333 25.0007 13.3333H33.334C34.2545 13.3333 35.0007 12.5871 35.0007 11.6667V6.66667C35.0007 5.74619 34.2545 5 33.334 5Z" stroke="#BEE0D6" strokeWidth="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M33.334 20H25.0007C24.0802 20 23.334 20.7462 23.334 21.6667V33.3333C23.334 34.2538 24.0802 35 25.0007 35H33.334C34.2545 35 35.0007 34.2538 35.0007 33.3333V21.6667C35.0007 20.7462 34.2545 20 33.334 20Z" stroke="#2E4A45" strokeWidth="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M15 26.6667H6.66667C5.74619 26.6667 5 27.4129 5 28.3334V33.3334C5 34.2539 5.74619 35.0001 6.66667 35.0001H15C15.9205 35.0001 16.6667 34.2539 16.6667 33.3334V28.3334C16.6667 27.4129 15.9205 26.6667 15 26.6667Z" stroke="#BEE0D6" strokeWidth="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                            <p className="overlay-title">Establish credibility</p>
                            <p className="overlay-details">In today’s world, a strong online presence is vital. Customers expect businesses to have an ...</p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 overlay-sec-col">
                    <div class="overlay-content">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <path d="M31.668 15C34.4294 15 36.668 12.7614 36.668 10C36.668 7.23858 34.4294 5 31.668 5C28.9065 5 26.668 7.23858 26.668 10C26.668 12.7614 28.9065 15 31.668 15Z" stroke="#BEE0D6" strokeWidth="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M36.6673 20V25C36.6673 25.8841 36.3161 26.7319 35.691 27.357C35.0659 27.9821 34.218 28.3333 33.334 28.3333H6.66732C5.78326 28.3333 4.93542 27.9821 4.31029 27.357C3.68517 26.7319 3.33398 25.8841 3.33398 25V8.33333C3.33398 7.44928 3.68517 6.60143 4.31029 5.97631C4.93542 5.35119 5.78326 5 6.66732 5H21.6673M20.0007 28.3333V35M13.334 35H26.6673" stroke="#2E4A45" strokeWidth="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                            <p className="overlay-title">Be present 24/7</p>
                            <p className="overlay-details">A constant online presence enhances sales opportunities, unrestricted by location or hours. Viewers ...</p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 overlay-third-col">
                    <div class="overlay-content">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <path d="M21.6667 10H26.6667C27.5507 10 28.3986 10.3512 29.0237 10.9763C29.6488 11.6014 30 12.4493 30 13.3333V25M18.3333 30H13.3333C12.4493 30 11.6014 29.6488 10.9763 29.0237C10.3512 28.3986 10 27.5507 10 26.6667V15" stroke="#2E4A45" strokeWidth="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M30 35C32.7614 35 35 32.7614 35 30C35 27.2386 32.7614 25 30 25C27.2386 25 25 27.2386 25 30C25 32.7614 27.2386 35 30 35Z" stroke="#BEE0D6" strokeWidth="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M10 15C12.7614 15 15 12.7614 15 10C15 7.23858 12.7614 5 10 5C7.23858 5 5 7.23858 5 10C5 12.7614 7.23858 15 10 15Z" stroke="#BEE0D6" strokeWidth="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                            <p className="overlay-title">Get more leads</p>
                            <p className="overlay-details">Optimize your website to become your top sales tool. Encourage potential leads to subscribe, explore products ...</p>
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
            <div className="accordion-body">
              This is the content of the second accordion body.
              <p className="toggle-icon">-</p>
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
            <div className="accordion-body">
              This is the content of the third accordion body.
              <p className="toggle-icon">Hide</p>
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
            <div className="accordion-body">
              This is the content of the fourth accordion body.
              <p className="toggle-icon">Hide</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Accordion;
