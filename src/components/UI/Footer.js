import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scroll
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
            <Link href={'/'} className="footer-nav">Home</Link>
            <Link href={'/work'} className="footer-nav">Work</Link>
            <Link href={'/what-we-do'} className="footer-nav">What We Do</Link>
            <Link href={'/studio'} className="footer-nav">Studio</Link>
            <Link href={'contact'} className="footer-nav">Contact</Link>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-12 footer-mobile">
          <p className="footer-nav-title">Our Services</p>
            <Link href={'#'} className="footer-nav">UI/UX Design</Link>
            <Link href={'#'} className="footer-nav">Website Development</Link>
            <Link href={'#'} className="footer-nav">E-Commerce Development</Link>
            <Link href={'#'} className="footer-nav">Hosting & Support</Link>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 col-12 footer-mobile">
          <p className="footer-nav-title">Get in Touch</p>
            <Link href="tel:+35679418140" className="footer-nav d-block">(+356) 7941 8140</Link>
            <Link href="mailto:webmaster@example.com" className="footer-nav d-block">pantherstudio@gmail.com</Link>
          </div>
        </div>
      </div>

      <div className="container d-flex justify-content-end">

      <div className="go-to-top" onClick={scrollToTop}>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M15 12.5L10 7.5L5 12.5" stroke="#2E4A45" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
      </div>

      </div>
      <div className="container mb-5">
        <div className="footer-bottom-divider pt-4">

        <div className="row text-white">
          <div className="col-lg-6 col-md-6 col-sm-12 col-12 order-lg-1 order-md-1 order-3 footer-bottom-mobile">
            <p className="footer-bottom">© 2024. <span>Panther Creative Studio.</span> All rights reserved.</p>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-12 col-12 order-lg-2 order-md-2 order-1">
            <div className="social-media-icon">
            <Link href={''}>

            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M11.1635 17.4976V10.6676H13.4677L13.8102 7.99347H11.1635V6.29014C11.1635 5.51847 11.3785 4.99014 12.486 4.99014H13.8894V2.60597C13.2066 2.5328 12.5202 2.49747 11.8335 2.50014C9.79688 2.50014 8.39854 3.74347 8.39854 6.02597V7.98847H6.10938V10.6626H8.40354V17.4976H11.1635Z" fill="#BEE0D6"/>
</svg>
            </Link>

            <Link href={''}>

<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M6.49935 1.66602H13.4993C16.166 1.66602 18.3327 3.83268 18.3327 6.49935V13.4993C18.3327 14.7812 17.8235 16.0106 16.917 16.917C16.0106 17.8235 14.7812 18.3327 13.4993 18.3327H6.49935C3.83268 18.3327 1.66602 16.166 1.66602 13.4993V6.49935C1.66602 5.21747 2.17524 3.98809 3.08167 3.08167C3.98809 2.17524 5.21747 1.66602 6.49935 1.66602ZM6.33268 3.33268C5.53703 3.33268 4.77397 3.64875 4.21136 4.21136C3.64875 4.77397 3.33268 5.53703 3.33268 6.33268V13.666C3.33268 15.3243 4.67435 16.666 6.33268 16.666H13.666C14.4617 16.666 15.2247 16.3499 15.7873 15.7873C16.3499 15.2247 16.666 14.4617 16.666 13.666V6.33268C16.666 4.67435 15.3243 3.33268 13.666 3.33268H6.33268ZM14.3743 4.58268C14.6506 4.58268 14.9156 4.69243 15.1109 4.88778C15.3063 5.08313 15.416 5.34808 15.416 5.62435C15.416 5.90062 15.3063 6.16557 15.1109 6.36092C14.9156 6.55627 14.6506 6.66602 14.3743 6.66602C14.0981 6.66602 13.8331 6.55627 13.6378 6.36092C13.4424 6.16557 13.3327 5.90062 13.3327 5.62435C13.3327 5.34808 13.4424 5.08313 13.6378 4.88778C13.8331 4.69243 14.0981 4.58268 14.3743 4.58268ZM9.99935 5.83268C11.1044 5.83268 12.1642 6.27167 12.9456 7.05307C13.727 7.83447 14.166 8.89428 14.166 9.99935C14.166 11.1044 13.727 12.1642 12.9456 12.9456C12.1642 13.727 11.1044 14.166 9.99935 14.166C8.89428 14.166 7.83447 13.727 7.05307 12.9456C6.27167 12.1642 5.83268 11.1044 5.83268 9.99935C5.83268 8.89428 6.27167 7.83447 7.05307 7.05307C7.83447 6.27167 8.89428 5.83268 9.99935 5.83268ZM9.99935 7.49935C9.33631 7.49935 8.70042 7.76274 8.23158 8.23158C7.76274 8.70042 7.49935 9.33631 7.49935 9.99935C7.49935 10.6624 7.76274 11.2983 8.23158 11.7671C8.70042 12.236 9.33631 12.4993 9.99935 12.4993C10.6624 12.4993 11.2983 12.236 11.7671 11.7671C12.236 11.2983 12.4993 10.6624 12.4993 9.99935C12.4993 9.33631 12.236 8.70042 11.7671 8.23158C11.2983 7.76274 10.6624 7.49935 9.99935 7.49935Z" fill="#BEE0D6"/>
</svg>
            </Link>


            <Link href={''}>
              
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M5.78255 4.16652C5.78233 4.60855 5.60652 5.03239 5.29381 5.34479C4.98109 5.6572 4.55708 5.83258 4.11505 5.83236C3.67302 5.83214 3.24919 5.65633 2.93678 5.34361C2.62438 5.0309 2.449 4.60688 2.44922 4.16486C2.44944 3.72283 2.62525 3.29899 2.93796 2.98659C3.25068 2.67419 3.67469 2.4988 4.11672 2.49902C4.55875 2.49924 4.98258 2.67505 5.29499 2.98777C5.60739 3.30049 5.78277 3.7245 5.78255 4.16652ZM5.83255 7.06652H2.49922V17.4999H5.83255V7.06652ZM11.0992 7.06652H7.78255V17.4999H11.0659V12.0249C11.0659 8.97486 15.0409 8.69152 15.0409 12.0249V17.4999H18.3326V10.8915C18.3326 5.74986 12.4492 5.94152 11.0659 8.46652L11.0992 7.06652Z" fill="#BEE0D6"/>
</svg>
              </Link>

              <Link href={''}>
              
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <g clip-path="url(#clip0_4_961)">
    <path d="M9.99935 18.3327C14.6017 18.3327 18.3327 14.6017 18.3327 9.99935C18.3327 5.39698 14.6017 1.66602 9.99935 1.66602C5.39698 1.66602 1.66602 5.39698 1.66602 9.99935C1.66602 14.6017 5.39698 18.3327 9.99935 18.3327Z" stroke="#BEE0D6" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M15.9417 4.24121C12.6833 7.61621 8.33333 8.69954 1.875 9.11621M18.125 10.6995C12.6083 9.52454 8.00833 11.5329 4.475 15.9662" stroke="#BEE0D6" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M7.13281 2.29102C10.7745 7.29102 12.1328 10.141 13.7995 17.0577" stroke="#BEE0D6" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_4_961">
      <rect width="20" height="20" fill="white"/>
    </clipPath>
  </defs>
</svg>
              </Link>

            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 col-12 order-lg-3 order-md-3 order-2 footer-bottom-mobile">
              <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-5 col-5 d-flex justify-content-lg-end justify-content-md-end"><Link href={''} className="footer-bottom">Privacy Policy</Link></div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-6 d-flex justify-content-lg-end justify-content-md-end"><Link href={''} className="footer-bottom" >Terms & Conditions</Link></div>

              </div>
          </div>
        </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
