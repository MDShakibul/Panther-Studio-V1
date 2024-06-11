import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll
    });
  };
  return (
    <footer className="body-area">
      <div className="container">
        <div className="communication-area">
          <div className="row gy-4 px-0 px-lg-4">
            <div className="col-lg-6 text-white">
              <div className="email-box get-top">
                <h1>Tell us about your next project.</h1>
                <div className="d-flex align-items-center mt-4 mt-lg-5 mb-2 mb-lg-3">
                  <div className="dark-line-color"></div>
                  <div className="light-line-color"></div>
                </div>
                <Link
                  href="mailto:webmaster@example.com"
                  className="d-flex justify-content-between align-items-center email-title"
                >
                  <p className="mb-0">pantherstudio@gmail.com</p>
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
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="col-lg-6 text-white">
              <div className="email-box phone-box get-top">
                <h1>Need help? Give us a call.</h1>
                <div className="d-flex align-items-center mt-4 mt-lg-5 mb-2 mb-lg-3">
                  <div
                    className="dark-line-color"
                    style={{ backgroundColor: "#2E4A45" }}
                  ></div>
                  <div
                    className="light-line-color"
                    style={{ backgroundColor: "#2E4A45", opacity: "0.1" }}
                  ></div>
                </div>
                <Link
                  href="tel:+35679418140"
                  className="d-flex justify-content-between align-items-center email-title phone-title"
                >
                  <p className="mb-0">(+356) 7941 8140</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M7 7H17M17 7V17M17 7L7 17"
                      stroke="#3E3A44"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-lg-3 col-md-6 col-sm-12 col-12 footer-mobile">
            <h1 className="footer-nav-link-title">We make the new.</h1>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-12 col-12 footer-mobile">
            <p className="footer-nav-title">Links</p>
            <Link href={"/"} className="footer-nav">
              Home
            </Link>
            <Link href={"/work"} className="footer-nav">
              Work
            </Link>
            <Link href={"/what-we-do"} className="footer-nav">
              What We Do
            </Link>
            <Link href={"/studio"} className="footer-nav">
              Studio
            </Link>
            <Link href={"/contact"} className="footer-nav">
              Contact
            </Link>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-12 footer-mobile">
            <p className="footer-nav-title">Our Services</p>
            <Link href={"#"} className="footer-nav">
              UI/UX Design
            </Link>
            <Link href={"#"} className="footer-nav">
              Website Development
            </Link>
            <Link href={"#"} className="footer-nav">
              E-Commerce Development
            </Link>
            <Link href={"#"} className="footer-nav">
              Hosting & Support
            </Link>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 col-12 footer-mobile">
            <p className="footer-nav-title">Get in Touch</p>
            <Link href="tel:+35679418140" className="footer-nav d-block">
              (+356) 7941 8140
            </Link>
            <Link
              href="mailto:webmaster@example.com"
              className="footer-nav d-block"
            >
              pantherstudio@gmail.com
            </Link>
          </div>
        </div>
      </div>

      <div className="container d-flex justify-content-end">
        <div className="go-to-top" onClick={scrollToTop}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M15 12.5L10 7.5L5 12.5"
              stroke="#2E4A45"
              strokeWidth="2"
              strokeLinecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className="container mb-5">
        <div className="footer-bottom-divider pt-4">
          <div className="row text-white">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12 order-lg-1 order-md-1 order-3 footer-bottom-mobile">
              <p className="footer-bottom">
                © 2024. <span>Panther Creative Studio.</span> All rights
                reserved.
              </p>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-12 col-12 order-lg-2 order-md-2 order-1">
              <div className="social-media-icon">
                <Link
                  href={"https://www.facebook.com/pantherstudiocreations"}
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M11.1635 17.4976V10.6676H13.4677L13.8102 7.99347H11.1635V6.29014C11.1635 5.51847 11.3785 4.99014 12.486 4.99014H13.8894V2.60597C13.2066 2.5328 12.5202 2.49747 11.8335 2.50014C9.79688 2.50014 8.39854 3.74347 8.39854 6.02597V7.98847H6.10938V10.6626H8.40354V17.4976H11.1635Z"
                      fill="#BEE0D6"
                    />
                  </svg>
                </Link>

                <Link
                  href={"https://www.instagram.com/thepanther.studio/"}
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M6.49935 1.66602H13.4993C16.166 1.66602 18.3327 3.83268 18.3327 6.49935V13.4993C18.3327 14.7812 17.8235 16.0106 16.917 16.917C16.0106 17.8235 14.7812 18.3327 13.4993 18.3327H6.49935C3.83268 18.3327 1.66602 16.166 1.66602 13.4993V6.49935C1.66602 5.21747 2.17524 3.98809 3.08167 3.08167C3.98809 2.17524 5.21747 1.66602 6.49935 1.66602ZM6.33268 3.33268C5.53703 3.33268 4.77397 3.64875 4.21136 4.21136C3.64875 4.77397 3.33268 5.53703 3.33268 6.33268V13.666C3.33268 15.3243 4.67435 16.666 6.33268 16.666H13.666C14.4617 16.666 15.2247 16.3499 15.7873 15.7873C16.3499 15.2247 16.666 14.4617 16.666 13.666V6.33268C16.666 4.67435 15.3243 3.33268 13.666 3.33268H6.33268ZM14.3743 4.58268C14.6506 4.58268 14.9156 4.69243 15.1109 4.88778C15.3063 5.08313 15.416 5.34808 15.416 5.62435C15.416 5.90062 15.3063 6.16557 15.1109 6.36092C14.9156 6.55627 14.6506 6.66602 14.3743 6.66602C14.0981 6.66602 13.8331 6.55627 13.6378 6.36092C13.4424 6.16557 13.3327 5.90062 13.3327 5.62435C13.3327 5.34808 13.4424 5.08313 13.6378 4.88778C13.8331 4.69243 14.0981 4.58268 14.3743 4.58268ZM9.99935 5.83268C11.1044 5.83268 12.1642 6.27167 12.9456 7.05307C13.727 7.83447 14.166 8.89428 14.166 9.99935C14.166 11.1044 13.727 12.1642 12.9456 12.9456C12.1642 13.727 11.1044 14.166 9.99935 14.166C8.89428 14.166 7.83447 13.727 7.05307 12.9456C6.27167 12.1642 5.83268 11.1044 5.83268 9.99935C5.83268 8.89428 6.27167 7.83447 7.05307 7.05307C7.83447 6.27167 8.89428 5.83268 9.99935 5.83268ZM9.99935 7.49935C9.33631 7.49935 8.70042 7.76274 8.23158 8.23158C7.76274 8.70042 7.49935 9.33631 7.49935 9.99935C7.49935 10.6624 7.76274 11.2983 8.23158 11.7671C8.70042 12.236 9.33631 12.4993 9.99935 12.4993C10.6624 12.4993 11.2983 12.236 11.7671 11.7671C12.236 11.2983 12.4993 10.6624 12.4993 9.99935C12.4993 9.33631 12.236 8.70042 11.7671 8.23158C11.2983 7.76274 10.6624 7.49935 9.99935 7.49935Z"
                      fill="#BEE0D6"
                    />
                  </svg>
                </Link>

                <Link href={"https://www.threads.net/@thepanther.studio"} target="_blank">
    

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    shape-rendering="geometricPrecision"
                    text-rendering="geometricPrecision"
                    image-rendering="optimizeQuality"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    width="25"
  height="25"
                    viewBox="0 0 512 512"
                  >
                    <path d="M105 0h302c57.75 0 105 47.25 105 105v302c0 57.75-47.25 105-105 105H105C47.25 512 0 464.75 0 407V105C0 47.25 47.25 0 105 0z" fill="#27232C"/>
                    <path
                      fill="#BEE0D6"
                      fill-rule="nonzero"
                      d="M337.36 243.58c-1.46-.7-2.95-1.38-4.46-2.02-2.62-48.36-29.04-76.05-73.41-76.33-25.6-.17-48.52 10.27-62.8 31.94l24.4 16.74c10.15-15.4 26.08-18.68 37.81-18.68h.4c14.61.09 25.64 4.34 32.77 12.62 5.19 6.04 8.67 14.37 10.39 24.89-12.96-2.2-26.96-2.88-41.94-2.02-42.18 2.43-69.3 27.03-67.48 61.21.92 17.35 9.56 32.26 24.32 42.01 12.48 8.24 28.56 12.27 45.26 11.35 22.07-1.2 39.37-9.62 51.45-25.01 9.17-11.69 14.97-26.84 17.53-45.92 10.51 6.34 18.3 14.69 22.61 24.73 7.31 17.06 7.74 45.1-15.14 67.96-20.04 20.03-44.14 28.69-80.55 28.96-40.4-.3-70.95-13.26-90.81-38.51-18.6-23.64-28.21-57.79-28.57-101.5.36-43.71 9.97-77.86 28.57-101.5 19.86-25.25 50.41-38.21 90.81-38.51 40.68.3 71.76 13.32 92.39 38.69 10.11 12.44 17.73 28.09 22.76 46.33l28.59-7.63c-6.09-22.45-15.67-41.8-28.72-57.85-26.44-32.53-65.1-49.19-114.92-49.54h-.2c-49.72.35-87.96 17.08-113.64 49.73-22.86 29.05-34.65 69.48-35.04 120.16v.24c.39 50.68 12.18 91.11 35.04 120.16 25.68 32.65 63.92 49.39 113.64 49.73h.2c44.2-.31 75.36-11.88 101.03-37.53 33.58-33.55 32.57-75.6 21.5-101.42-7.94-18.51-23.08-33.55-43.79-43.48zm-76.32 71.76c-18.48 1.04-37.69-7.26-38.64-25.03-.7-13.18 9.38-27.89 39.78-29.64 3.48-.2 6.9-.3 10.25-.3 11.04 0 21.37 1.07 30.76 3.13-3.5 43.74-24.04 50.84-42.15 51.84z"
                    />
                  </svg>
                </Link>

                <Link
                  href={"https://dribbble.com/pantherstudiocreations/"}
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_4_961)">
                      <path
                        d="M9.99935 18.3327C14.6017 18.3327 18.3327 14.6017 18.3327 9.99935C18.3327 5.39698 14.6017 1.66602 9.99935 1.66602C5.39698 1.66602 1.66602 5.39698 1.66602 9.99935C1.66602 14.6017 5.39698 18.3327 9.99935 18.3327Z"
                        stroke="#BEE0D6"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M15.9417 4.24121C12.6833 7.61621 8.33333 8.69954 1.875 9.11621M18.125 10.6995C12.6083 9.52454 8.00833 11.5329 4.475 15.9662"
                        stroke="#BEE0D6"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M7.13281 2.29102C10.7745 7.29102 12.1328 10.141 13.7995 17.0577"
                        stroke="#BEE0D6"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_4_961">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-12 order-lg-3 order-md-3 order-2 footer-bottom-mobile">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-5 col-5 d-flex justify-content-lg-end justify-content-md-end">
                  <Link href={""} className="footer-bottom">
                    Privacy Policy
                  </Link>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-6 d-flex justify-content-lg-end justify-content-md-end">
                  <Link href={""} className="footer-bottom">
                    Terms & Conditions
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
