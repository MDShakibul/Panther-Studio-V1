
import Link from "next/link";
import homeStyle from "@/styles/Home.module.css";
import style from "@/styles/Studio.module.css";
import Image from "next/image";
import dummyImage from '../../../assets/images/studio-demo.png';

const StudioHeroSection = () => {
    return (
        <div className={`${homeStyle.heroBodyArea} h-100`}>
        <div className="container">
          <div className={`${homeStyle.heroSection} h-100`}>
            <div className={`${homeStyle.heroSectionArea}  h-100`}>
              <h1
                className={`${homeStyle.heroSectionTitle} ${style.titleMaxLength}`}
              >
                A collective of imaginative and innovative thinkers.
              </h1>
              <div className={`row ${style.topImage}`}>
              <div className="col-lg-12">
                <Image src={dummyImage} alt="" layout="responsive"/>
              </div>

              </div>

              
            </div>
          </div>
        </div>
      </div>
    );
};

export default StudioHeroSection;