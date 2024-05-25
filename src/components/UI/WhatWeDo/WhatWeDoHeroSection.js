import Image from "next/image";
import DummyImage from "@/assets/images/dummy-image.svg";
import Link from "next/link";
import style from "@/styles/Home.module.css";
import { useEffect, useState } from "react";

const WhatWeDoHeroSection = () => {
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
  return (
    <>
      <div className={`${style.heroBodyArea} h-100`}>
        <div className="container">
          <div className={`${style.heroSection} h-100`}>
            <div className={`row ${style.heroSectionArea}`}>
              <div className="col-lg-7 d-flex flex-column">
                <div className="flex-grow-1 position-relative">
                  <h1 className={`${style.heroSectionTitle}`}>
                    Crafting digital excellence, one website at a time.
                  </h1>

                  <div className={`${style.heroSectionBottomText}`}>
                    <div
                      className={`${style.heroSectionDivider} d-flex align-items-center `}
                    >
                      <div className="dark-line-color"></div>
                      <div className="light-line-color"></div>
                    </div>
                    <p className={`${style.heroSectionTextDetails}`}>
                      We specialize in designing captivating websites that
                      captivate and engage your audience. Our team combines
                      creativity and expertise to bring your vision to life
                      online.
                    </p>
                    <Link href={""} className={`${style.btnHeroSection} `}>
                      <p className="mb-0">Our Services</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M7 7H17M17 7V17M17 7L7 17"
                          stroke="#2E4A45"
                          strokeWidth="2"
                          strokeLinecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-5 col-12 d-flex flex-column custom-gutter">
                <Image
                  src={DummyImage}
                  alt="panther hero section"
                  layout={isMobileView ? null : "responsive"}
                  className={`${style.responsiveHeroImage}`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${style.heroBodyArea} h-100`}>
        <div className="container">
          <div className={`${style.heroSection2} h-100`}>
            <div className={`row ${style.heroSectionArea}`}>
              <div className="col-lg-7 d-flex flex-column order-lg-2 order-md-2 order-1 ps-lg-5">
                <div className="flex-grow-1 position-relative">
                  <p className={`${style.heroSectionCompanyTitle}`}>
                    What do we actually create?
                  </p>

                  <p
                    className={`${style.heroSectionTextDetails2} mb-4 mb-lg-0`}
                  >
                    On the surface, it appears simple. But in reality — not so
                    much. We can explain. <br />
                    At Panther Creative Studio, we specialize in crafting
                    bespoke websites that embody your brand&apos;s goals. Our
                    team blends creativity with technical prowess to deliver
                    stunning, user-friendly experiences.
                  </p>

                  <div className={`${style.heroSectionBottomText}`}>
                    <p className={`${style.heroSectionTextDetails2}`}>
                      From concept to launch, we prioritize communication and
                      collaboration to ensure your vision is brought to life
                      seamlessly. Partner with us to elevate your online
                      presence and leave a lasting impression on your audience.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 d-flex flex-column custom-gutter order-lg-1 order-md-1 order-2">
                <div className="row">
                  <div className="col-lg-1"></div>
                  <div className="col-lg-10">
                    <Image
                      src={DummyImage}
                      alt="panther hero section"
                      layout={isMobileView ? null : "responsive"}
                      className={`${style.responsiveHeroImage}`}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatWeDoHeroSection;
