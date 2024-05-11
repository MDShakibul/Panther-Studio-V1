import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer-area">
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
                  <div className="dark-line-color" style={{ backgroundColor:'#2E4A45' }}></div>
                  <div className="light-line-color" style={{ backgroundColor:'#2E4A45', opacity:'0.1' }}></div>
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

        <div className="row">

        <div className="col-lg-4">
          <h1 className="footer-nav-link-title">We make
the
new.</h1>
        </div>
        <div className="col-lg-2">
          <p></p>
        </div>
        <div className="col-lg-6"></div>
        <div className="col-lg-3"></div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
