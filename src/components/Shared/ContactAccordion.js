import React, { useEffect } from "react";
const ContactAccordion = () => {
  useEffect(() => {
    const accordionItems = document.querySelectorAll(".accordion-item");
    accordionItems.forEach((item) => {
      const button = item.querySelector(".accordion-button");
      const collapse = item.querySelector(".accordion-collapse");
      const icon = item.querySelector(".toggle-icon");
      if (collapse.classList.contains("show")) {
        item
          .querySelector(".accordion-header")
          .classList.add("accordion-header-hidden");
      }
      button.addEventListener("click", function () {
        if (!collapse.classList.contains("show")) {
          item
            .querySelector(".accordion-header")
            .classList.add("accordion-header-hidden");
        }
      });
      collapse.addEventListener("hidden.bs.collapse", function () {
        item
          .querySelector(".accordion-header")
          .classList.remove("accordion-header-hidden");
      });
      if (icon) {
        icon.addEventListener("click", function () {
          collapse.classList.remove("show");
          item
            .querySelector(".accordion-header")
            .classList.remove("accordion-header-hidden");
        });
      }
    });
    // Update button text based on state
    const accordionButtons = document.querySelectorAll(".accordion-button");
    accordionButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const isCollapsed = button.classList.contains("collapsed");
        button.querySelector(".accordion-title").textContent = isCollapsed
          ? "-"
          : "+";
      });
    });
  }, []);
  return (
    <div className="container mt-5">
      <div className="accordion" id="customAccordion">
        <div className="accordion-item">
          <h2
            className="accordion-header accordion-header-hidden"
            id="headingOne"
          >
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              01. How are payments made?{" "}
              <span className="accordion-title">+</span>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#customAccordion"
          >
            <div className="accordion-body contact-accordion-body">
              <div className="accordion-body-header d-flex justify-content-between align-items-center">
                <p className="mb-0">01. How are payments made?</p>
                <p className="toggle-icon mb-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M5 12H19"
                      stroke="#BEE0D6"
                      strokeWidth="2"
                      strokeLinecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </p>
              </div>

              <div className="accordion-body-details">
                <p className="mb-4">
                  We believe that the best person to guide you is the person
                  actively working on your project. So, during the design
                  process, you&apos;ll be in direct contact with the designer.
                </p>

                <p className="mb-0">
                  During the build, you&apos;ll have the developer on speed
                  dial. And, when it comes to the write-up, your copywriter is
                  only an email away.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              02. Who manages the design and build process?{" "}
              <span className="accordion-title">+</span>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#customAccordion"
          >
            <div className="accordion-body contact-accordion-body">
              This is the content of the second accordion body.
              <p className="toggle-icon">-</p>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              03. How much do I pay upfront?{" "}
              <span className="accordion-title">+</span>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#customAccordion"
          >
            <div className="accordion-body contact-accordion-body">
              This is the content of the third accordion body.
              <p className="toggle-icon">Hide</p>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              04. Can I have support after the project is live?{" "}
              <span className="accordion-title">+</span>
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#customAccordion"
          >
            <div className="accordion-body contact-accordion-body">
              This is the content of the fourth accordion body.
              <p className="toggle-icon">Hide</p>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              05. What if I want to make adjustments after it’s built?{" "}
              <span className="accordion-title">+</span>
            </button>
          </h2>
          <div
            id="collapseFive"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#customAccordion"
          >
            <div className="accordion-body contact-accordion-body">
              This is the content of the fourth accordion body.
              <p className="toggle-icon">Hide</p>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSix"
              aria-expanded="false"
              aria-controls="collapseSix"
            >
              06. Do I have to pay VAT?{" "}
              <span className="accordion-title">+</span>
            </button>
          </h2>
          <div
            id="collapseSix"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#customAccordion"
          >
            <div className="accordion-body contact-accordion-body">
              This is the content of the fourth accordion body.
              <p className="toggle-icon">Hide</p>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSeven"
              aria-expanded="false"
              aria-controls="collapseSeven"
            >
              07. Can I use a third-party for hosting?{" "}
              <span className="accordion-title">+</span>
            </button>
          </h2>
          <div
            id="collapseSeven"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#customAccordion"
          >
            <div className="accordion-body contact-accordion-body">
              This is the content of the fourth accordion body.
              <p className="toggle-icon">Hide</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactAccordion;
