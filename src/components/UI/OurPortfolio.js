import React from "react";
import style from "@/styles/Home.module.css";
import Image from "next/image";
import DummyImage from "@/assets/images/dummy-image.svg";

const OurPortfolio = () => {
  return (
    <div className={`${style.ourPortfolioSection}`}>
      <div className={`container ${style.ourPortfolioArea} h-100`}>
        <div className={`container ${style.ourPortfolioAreaImage} h-100`}>
          <p className={`${style.heroSectionCompanyTitle}`}>Selected works</p>
          <h1 className={`footer-nav-link-title ${style.heroSectionCompanyHeader}`}>
            Discover our portfolio.
          </h1>

          <div className="row">
            <div className="col-lg-6">
              <Image
                src={DummyImage}
                alt="panther hero section"
                layout="responsive"
                className={`${style.responsiveHeroImage}`}
              />

              <h3 className={`${style.projectName}`}>Ok Medical</h3>
              <p className={`${style.projectSummary}`}>
                Tortor tempor pellentesque tortor urna. Cursus et sed sociis
                justo vitae at pharetra at nunc. Porta sed et diam dui.
              </p>

              <div className="d-flex align-items-center">
                <p className={`${style.projectType}`}>UI/UX DESIGN</p>
                <div className={`${style.projecTopicDivider}`}></div>
                <p className={`${style.projectType}`}>E-COMMERCE DEVELOPMENT</p>
              </div>
            </div>
            <div className="col-lg-6">
              <Image
                src={DummyImage}
                alt="panther hero section"
                layout="responsive"
                className={`${style.responsiveHeroImage} ${style.profileProjectImage}`}
              />

              <div className={` ${style.profileProjectImageDetails}`}>
                <h3 className={`${style.projectName}`}>Ok Medical</h3>
                <p className={`${style.projectSummary}`}>
                  Tortor tempor pellentesque tortor urna. Cursus et sed sociis
                  justo vitae at pharetra at nunc. Porta sed et diam dui.
                </p>

                <div className="d-flex align-items-center">
                  <p className={`${style.projectType}`}>UI/UX DESIGN</p>
                  <div className={`${style.projecTopicDivider}`}></div>
                  <p className={`${style.projectType}`}>
                    E-COMMERCE DEVELOPMENT
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <Image
                src={DummyImage}
                alt="panther hero section"
                layout="responsive"
                className={`${style.responsiveHeroImage}`}
              />

              <h3 className={`${style.projectName}`}>Ok Medical</h3>
              <p className={`${style.projectSummary}`}>
                Tortor tempor pellentesque tortor urna. Cursus et sed sociis
                justo vitae at pharetra at nunc. Porta sed et diam dui.
              </p>

              <div className="d-flex align-items-center">
                <p className={`${style.projectType}`}>UI/UX DESIGN</p>
                <div className={`${style.projecTopicDivider}`}></div>
                <p className={`${style.projectType}`}>E-COMMERCE DEVELOPMENT</p>
              </div>
            </div>
            <div className="col-lg-6">
              <Image
                src={DummyImage}
                alt="panther hero section"
                layout="responsive"
                className={`${style.responsiveHeroImage} ${style.profileProjectImage}`}
              />

              <div className={` ${style.profileProjectImageDetails}`}>
                <h3 className={`${style.projectName}`}>Ok Medical</h3>
                <p className={`${style.projectSummary}`}>
                  Tortor tempor pellentesque tortor urna. Cursus et sed sociis
                  justo vitae at pharetra at nunc. Porta sed et diam dui.
                </p>

                <div className="d-flex align-items-center">
                  <p className={`${style.projectType}`}>UI/UX DESIGN</p>
                  <div className={`${style.projecTopicDivider}`}></div>
                  <p className={`${style.projectType}`}>
                    E-COMMERCE DEVELOPMENT
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPortfolio;
