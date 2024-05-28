
import style from "@/styles/Home.module.css";
import WorkPortfolio from "./WorkPortfolio";

const WorkHeroSection = () => {
  return (
    <>
      <div className={`${style.heroBodyArea} h-100`}>
        <div className="container">
          <div className={`${style.heroSection} h-100`}>
            <div className={` ${style.heroSectionArea}`}>
              <div className={` ${style.workTitleArea} 100`}>
                <h1
                  className={`footer-nav-link-title ${style.heroSectionTitle} w-100 header-title-bottom`}
                >
                  Focused on creating effective websites for client success.
                </h1>
              </div>


              <WorkPortfolio/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkHeroSection;
