import Image from "next/image";
import DummyImage from "@/assets/images/dummy-image.svg";
import Link from "next/link";
import style from "@/styles/Home.module.css";

const HeroSection = () => {
  return (
    <>
      <div className={`${style.heroBodyArea} h-100`}>
        <div className="container">
          <div className={`${style.heroSection} h-100`}>
            <div className={`row ${style.heroSectionArea}`}>
              <div className="col-lg-7 d-flex flex-column">
                <div className="flex-grow-1 position-relative">
                  <h1 className={`${style.heroSectionTitle}`}>
                    Let’s collaborate to build your website.
                  </h1>

                  <div className={`${style.heroSectionBottomText}`}>
                    <div
                      className={`${style.heroSectionDivider} d-flex align-items-center `}
                    >
                      <div className="dark-line-color"></div>
                      <div className="light-line-color"></div>
                    </div>
                    <p className={`${style.heroSectionTextDetails}`}>
                      We believe in developing great client connections,
                      understanding their vision, and working together with them
                      to create designs that meet their objectives and
                      effectively express their brand story.
                    </p>
                    <Link
                      href={"/contact"}
                      className={`${style.btnHeroSection} `}
                    >
                      <p className="mb-0">Work with us</p>
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
                  layout="responsive"
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
                    Panther Creative Studio
                  </p>

                  <p
                    className={`${style.heroSectionTextDetails2} mb-4 mb-lg-0`}
                  >
                    Born from a passion for design, we envision, design, and
                    create apps, websites and brands from a seeded idea into a
                    unique experience. <br /> <br /> From small ambitious
                    start-ups to industry icons, we strive to create meaningful
                    experiences for clients all around the world.
                  </p>

                  <div className={`${style.heroSectionBottomText}`}>
                    <p className={`${style.heroSectionTextDetails2}`}>
                      We aid big firms, boost small businesses, and empower
                      startups by crafting functional yet stunning products.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 d-flex flex-column custom-gutter order-lg-1 order-md-1 order-2">
                <div className="row">
                  <div className="col-lg-2"></div>
                  <div className="col-lg-10">
                    <Image
                      src={DummyImage}
                      alt="panther hero section"
                      layout="responsive"
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

export default HeroSection;
