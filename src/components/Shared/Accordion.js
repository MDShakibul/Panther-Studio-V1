import React, { useEffect } from "react";
const Accordion = () => {
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
              1. UI/UX Design <span className="accordion-title">+</span>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#customAccordion"
          >
            <div className="accordion-body">
              This is the content of the first accordion body.
              <p className="toggle-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M5 12H19" stroke="#BEE0D6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></p>
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
              2. Website Development <span className="accordion-title">+</span>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#customAccordion"
          >
            <div className="accordion-body">
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
              3. E-Commerce Development <span className="accordion-title">+</span>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#customAccordion"
          >
            <div className="accordion-body">
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
              4. Hosting & Support <span className="accordion-title">+</span>
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#customAccordion"
          >
            <div className="accordion-body">
              This is the content of the fourth accordion body.
              <p className="toggle-icon">Hide</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Accordion;
