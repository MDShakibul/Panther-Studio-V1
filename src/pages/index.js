import Head from "next/head";
import style from "../styles/Home.module.css";
import RootLayout from "./components/Layouts/RootLayout";
import Image from "next/image";
import DummyImage from "../pages/assets/images/dummy-image.svg";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Panther Studio</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>

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
                    <div className="d-flex align-items-center mt-4 mt-lg-5 mb-2 mb-lg-3">
                      <div className="dark-line-color"></div>
                      <div className="light-line-color"></div>
                    </div>
                    <p className={`${style.heroSectionTextDetails}`}>
                      We believe in developing great client connections,
                      understanding their vision, and working together with them
                      to create designs that meet their objectives and
                      effectively express their brand story.
                    </p>
                    <Link href={""} className={`${style.btnHeroSection} `}>
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
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 d-flex flex-column">
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
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
