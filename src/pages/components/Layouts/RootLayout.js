import React from "react";
import Navbar from "../UI/Navbar";
import Footer from "../UI/Footer";

const RootLayout = ({ children }) => {
  return (
    <>
      <div className="root-div-section">

        {/* Navber section */}
        <Navbar/>

        <section className="child-div-section">{children}</section>

        {/* Footer Section */}
        <Footer/>
      </div>
    </>
  );
};

export default RootLayout;
