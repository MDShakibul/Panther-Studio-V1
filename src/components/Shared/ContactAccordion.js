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
              01. What kind of process shall I expect?{" "}
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
                <p className="mb-0">01. What kind of process shall I expect?</p>
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
                We commence by capturing project specifics like requirements, timeline, budget, and scope, initially outlined in our project form. Further details are discussed in introductory calls, leading to a Statement of Work (SOW) upon approval.
                </p>

                <p className="mb-4">
                Once the SOW is approved, we handle paperwork, request a deposit (typically 30%), and conduct a kick-off call to finalize arrangements. Projects are overseen by a senior project manager, using industry-standard tools and weekly calls for updates and feedback
                </p>
                <p className="mb-0">
                As we approach completion, projects undergo iterative stages, culminating in a successful launch. We remain supportive as clients&apos; businesses grow and evolve.
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
              02. What technology and tools do you use?{" "}
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
              <div className="accordion-body-header d-flex justify-content-between align-items-center">
                <p className="mb-0">02. What technology and tools do you use?</p>
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
                To collaborate closely with clients or with a designated project manager, we&apos;ve diverged from traditional methods and adopted tools like Trello, Miro, and Notion, particularly suited for larger organizations and retainer projects.
                </p>

                <p className="mb-4">
                In the creative phase, we prioritize industry-standard tools such as Figma for UX/UI design and Adobe Illustrator for branding and vector illustrations.
                </p>
                <p className="mb-4">
                Our development approach leverages HTML, CSS3, and JavaScript, alongside Bootstrap and React.js to enhance user experiences. We employ Next.js for headless CMS projects and integrate WordPress for custom frontend solutions.
                </p>
                <p className="mb-0">
                WooCommerce, commanding approximately 30% of the market share, serves as our preferred eCommerce platform due to its flexibility and reliability within the WordPress ecosystem.
                </p>
              </div>
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
              03. How long does it take for you to deliver a project?{" "}
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
              <div className="accordion-body-header d-flex justify-content-between align-items-center">
                <p className="mb-0">03. How long does it take for you to deliver a project?</p>
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
                <p className="mb-0">
                The majority of our clients opt to continue collaborating with us for support and maintenance post-project completion. However, there&apos;s no obligation.
                </p>
              </div>
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
              04. How do you handle revisions and feedback?{" "}
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
              <div className="accordion-body-header d-flex justify-content-between align-items-center">
                <p className="mb-0">04. How do you handle revisions and feedback?</p>
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
               
                <p className="mb-0">
                We value client feedback and strive to ensure that your vision is accurately reflected in the final product. Throughout the design process, we encourage open communication and welcome any revisions or feedback you may have. Our team is committed to incorporating your input promptly and efficiently, ensuring that the end result meets your expectations and satisfaction. We utilize collaborative tools and scheduled checkpoints to streamline the revision process and keep you informed every step of the way. Your satisfaction is our priority, and we&apos;re dedicated to delivering a final product that exceeds your expectations.
                </p>
              </div>
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
              05. Do you provide ongoing support and maintenance?
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
              <div className="accordion-body-header d-flex justify-content-between align-items-center">
                <p className="mb-0">05. Do you provide ongoing support and maintenance?</p>
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
                At The Panther Studio, the duration of website projects varies depending on the specific requirements, complexity, and scope of each project. Typically, website projects can be delivered within 2-3 weeks from the initial consultation to the final launch. However, the timeline may vary based on factors such as customization needs, content development, and client feedback cycles.
                </p>

                <p className="mb-0">
                During the project, we ensure clear communication and transparency regarding timelines and milestones. Our goal is to deliver high-quality websites efficiently while meeting the unique needs and expectations of our clients.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
export default ContactAccordion;
