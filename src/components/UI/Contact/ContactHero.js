import Image from "next/image";
import DummyImage from "@/assets/images/dummy-image.svg";
import Link from "next/link";
import homeStyle from "@/styles/Home.module.css";
import style from "@/styles/Contact.module.css";
import { useState } from "react";
import Swal from "sweetalert2";

const ContactHero = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [timeLine, setTimeLine] = useState("");
  const [budget, setBudget] = useState("€500 - €5,000");
  const [description, setDescription] = useState("");
  const [isDisabled, setIsDisable] = useState(true);
  const [errors, setErrors] = useState({});
  const [isChecked, setIsChecked] = useState(0);

  const handleValidation = () => {
    const newErrors = {};
    if (!firstName) newErrors.firstName = "Please fill up this field";
    if (!lastName) newErrors.lastName = "Please fill up this field";
    if (!email) newErrors.email = "Please fill up this field";
    if (!phone) newErrors.phone = "Please fill up this field";
    return newErrors;
  };

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked ? 1 : 0);
    setIsDisable(e.target.checked ? false : true);
  };

  const handleSendMail = () => {
    const validationErrors = handleValidation();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return 0;
    }
    setErrors({});
    const emailInfo = {
      firstName,
      lastName,
      email,
      phone,
      businessName,
      timeLine,
      budget,
      description,
    };

   //fetch("http://localhost:5000/send-mail", {
    fetch("https://web3-backend-chi.vercel.app/send-mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailInfo),
    })
      .then((response) => {
        if (!response.ok) {
          Swal.fire({
            position: 'center',
            icon: 'error',
            text: 'Network response not ok. Please try again.',
            showConfirmButton: false,
            timer: 2000,
            allowOutsideClick: false,
            allowEscapeKey: false,
          });
        }
        return response.json();
      })
      .then((data) => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          text: 'Email Sent. We will contact you soon.',
          showConfirmButton: false,
          timer: 2000,
          allowOutsideClick: false,
          allowEscapeKey: false,
        });
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhone('');
        setBusinessName('');
        setDescription('');
        setTimeLine('');
        setIsDisable(true);
        setIsChecked(0);

      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };

  return (
    <>
      <div className={`${homeStyle.heroBodyArea} h-100`}>
        <div className="container">
          <div className={`${homeStyle.heroSection} h-100`}>
            <div className={`${homeStyle.heroSectionArea}  h-100`}>
              <h1
                className={`${homeStyle.heroSectionTitle} ${style.titleMaxLength} header-title-bottom mb-1`}
              >
                Tell us about your upcoming project ideas.
              </h1>

              <div className="row g-5">
                <div className="col-lg-4">
                  <div className={`${style.contactDivArea}`}>
                    <p className={`${style.contactSection} polysan-slim mb-0`}>
                      Reach us here.
                    </p>
                    <p className={`${style.contactText}`}>
                      Let&apos;s get in touch and discuss how we can help you
                      reach your goals! Give us a call to provide you with
                      exceptional service.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <Link
                        href="tel:+35679418140"
                        className={`mb-0 ${style.contactNumber}`}
                      >
                        (+356) 7941 8140
                      </Link>
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
                    </div>
                    <div className="divider-contact-area"></div>
                    <div className="d-flex justify-content-between align-items-center">
                      <Link
                        href="mailto:webmaster@example.com"
                        className={`mb-0 ${style.contactNumber}`}
                      >
                        pantherstudio@gmail.com
                      </Link>
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
                    </div>
                    <div className="divider-contact-area"></div>

                    <div
                      className={`d-flex align-items-center ${style.contactLink}`}
                    >
                      <Link href={"https://www.facebook.com/pantherstudiocreations"} target="_blank">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M11.1635 17.4976V10.6676H13.4677L13.8102 7.99347H11.1635V6.29014C11.1635 5.51847 11.3785 4.99014 12.486 4.99014H13.8894V2.60597C13.2066 2.5328 12.5202 2.49747 11.8335 2.50014C9.79688 2.50014 8.39854 3.74347 8.39854 6.02597V7.98847H6.10938V10.6626H8.40354V17.4976H11.1635Z"
                            fill="#2E4A45"
                          />
                        </svg>
                      </Link>

                      <Link href={"https://www.instagram.com/thepanther.studio/"} target="_blank">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M6.49935 1.66602H13.4993C16.166 1.66602 18.3327 3.83268 18.3327 6.49935V13.4993C18.3327 14.7812 17.8235 16.0106 16.917 16.917C16.0106 17.8235 14.7812 18.3327 13.4993 18.3327H6.49935C3.83268 18.3327 1.66602 16.166 1.66602 13.4993V6.49935C1.66602 5.21747 2.17524 3.98809 3.08167 3.08167C3.98809 2.17524 5.21747 1.66602 6.49935 1.66602ZM6.33268 3.33268C5.53703 3.33268 4.77397 3.64875 4.21136 4.21136C3.64875 4.77397 3.33268 5.53703 3.33268 6.33268V13.666C3.33268 15.3243 4.67435 16.666 6.33268 16.666H13.666C14.4617 16.666 15.2247 16.3499 15.7873 15.7873C16.3499 15.2247 16.666 14.4617 16.666 13.666V6.33268C16.666 4.67435 15.3243 3.33268 13.666 3.33268H6.33268ZM14.3743 4.58268C14.6506 4.58268 14.9156 4.69243 15.1109 4.88778C15.3063 5.08313 15.416 5.34808 15.416 5.62435C15.416 5.90062 15.3063 6.16557 15.1109 6.36092C14.9156 6.55627 14.6506 6.66602 14.3743 6.66602C14.0981 6.66602 13.8331 6.55627 13.6378 6.36092C13.4424 6.16557 13.3327 5.90062 13.3327 5.62435C13.3327 5.34808 13.4424 5.08313 13.6378 4.88778C13.8331 4.69243 14.0981 4.58268 14.3743 4.58268ZM9.99935 5.83268C11.1044 5.83268 12.1642 6.27167 12.9456 7.05307C13.727 7.83447 14.166 8.89428 14.166 9.99935C14.166 11.1044 13.727 12.1642 12.9456 12.9456C12.1642 13.727 11.1044 14.166 9.99935 14.166C8.89428 14.166 7.83447 13.727 7.05307 12.9456C6.27167 12.1642 5.83268 11.1044 5.83268 9.99935C5.83268 8.89428 6.27167 7.83447 7.05307 7.05307C7.83447 6.27167 8.89428 5.83268 9.99935 5.83268ZM9.99935 7.49935C9.33631 7.49935 8.70042 7.76274 8.23158 8.23158C7.76274 8.70042 7.49935 9.33631 7.49935 9.99935C7.49935 10.6624 7.76274 11.2983 8.23158 11.7671C8.70042 12.236 9.33631 12.4993 9.99935 12.4993C10.6624 12.4993 11.2983 12.236 11.7671 11.7671C12.236 11.2983 12.4993 10.6624 12.4993 9.99935C12.4993 9.33631 12.236 8.70042 11.7671 8.23158C11.2983 7.76274 10.6624 7.49935 9.99935 7.49935Z"
                            fill="#2E4A45"
                          />
                        </svg>
                      </Link>

                      <Link href={"#"}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M5.78255 4.16652C5.78233 4.60855 5.60652 5.03239 5.29381 5.34479C4.98109 5.6572 4.55708 5.83258 4.11505 5.83236C3.67302 5.83214 3.24919 5.65633 2.93678 5.34361C2.62438 5.0309 2.449 4.60688 2.44922 4.16486C2.44944 3.72283 2.62525 3.29899 2.93796 2.98659C3.25068 2.67419 3.67469 2.4988 4.11672 2.49902C4.55875 2.49924 4.98258 2.67505 5.29499 2.98777C5.60739 3.30049 5.78277 3.7245 5.78255 4.16652ZM5.83255 7.06652H2.49922V17.4999H5.83255V7.06652ZM11.0992 7.06652H7.78255V17.4999H11.0659V12.0249C11.0659 8.97486 15.0409 8.69152 15.0409 12.0249V17.4999H18.3326V10.8915C18.3326 5.74986 12.4492 5.94152 11.0659 8.46652L11.0992 7.06652Z"
                            fill="#2E4A45"
                          />
                        </svg>
                      </Link>

                      <Link href={"https://dribbble.com/pantherstudiocreations/"} target="_blank">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <g clipPath="url(#clip0_4_1681)">
                            <path
                              d="M9.99935 18.3327C14.6017 18.3327 18.3327 14.6017 18.3327 9.99935C18.3327 5.39698 14.6017 1.66602 9.99935 1.66602C5.39698 1.66602 1.66602 5.39698 1.66602 9.99935C1.66602 14.6017 5.39698 18.3327 9.99935 18.3327Z"
                              stroke="#2E4A45"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M15.9417 4.24121C12.6833 7.61621 8.33333 8.69954 1.875 9.11621M18.125 10.6995C12.6083 9.52454 8.00833 11.5329 4.475 15.9662"
                              stroke="#2E4A45"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M7.13281 2.29102C10.7745 7.29102 12.1328 10.141 13.7995 17.0577"
                              stroke="#2E4A45"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              stroke-linejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_4_1681">
                              <rect width="20" height="20" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="row gx-4">
                    <div className="col-lg-6">
                      <div className="input-container">
                        <input
                          type="text"
                          className="input-field"
                          placeholder=" "
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          required
                        />
                        <label className="input-label">
                          First name <span style={{ color: "#A5F8D3" }}>*</span>
                        </label>

                        {errors.firstName && (
                          <small
                            className={`text-danger ${style.errorMessage}`}
                          >
                            {errors.firstName}
                          </small>
                        )}
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="input-container">
                        <input
                          type="text"
                          className="input-field"
                          placeholder=" "
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          required
                        />
                        <label className="input-label">
                          Last name <span style={{ color: "#A5F8D3" }}>*</span>
                        </label>
                        {errors.lastName && (
                          <small
                            className={`text-danger ${style.errorMessage}`}
                          >
                            {errors.lastName}
                          </small>
                        )}
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="input-container">
                        <input
                          type="email"
                          className="input-field"
                          placeholder=" "
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                        <label className="input-label">
                          Email address{" "}
                          <span style={{ color: "#A5F8D3" }}>*</span>
                        </label>
                        {errors.email && (
                          <small
                            className={`text-danger ${style.errorMessage}`}
                          >
                            {errors.email}
                          </small>
                        )}
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="input-container">
                        <input
                          type="text"
                          className="input-field"
                          placeholder=" "
                          value={phone}
                          onChange={(e) => {
                            const mobileNumber = e.target.value.replace(/[^0-9]/g, '');
                            setPhone(mobileNumber);
                            }}
                          required
                        />
                        <label className="input-label">
                          Phone number{" "}
                          <span style={{ color: "#A5F8D3" }}>*</span>
                        </label>
                        {errors.phone && (
                          <small
                            className={`text-danger ${style.errorMessage}`}
                          >
                            {errors.phone}
                          </small>
                        )}
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="input-container">
                        <input
                          type="text"
                          className="input-field"
                          placeholder=" "
                          value={businessName}
                          onChange={(e) => setBusinessName(e.target.value)}
                        />
                        <label className="input-label">Business name </label>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="input-container">
                        <input
                          type="text"
                          className="input-field"
                          placeholder=" "
                          value={timeLine}
                          onChange={(e) => setTimeLine(e.target.value)}
                        />
                        <label className="input-label">
                          Your timeline expectation?
                        </label>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="input-container">
                        <select
                          className="dropdown-select"
                          value={budget}
                          onChange={(e) => setBudget(e.target.value)}
                        >
                          <option value="€500 - €5,000">€500 - €5,000</option>
                          <option value="€5,000 - €15,000">€5,000 - €15,000</option>
                          <option value="€15,000 - €50,000">€15,000 - €50,000</option>
                        </select>
                        <label className="dropdown-label">
                          Your budget expectation?
                        </label>
                        <div className="dropdown-icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M6 9L12 15L18 9"
                              stroke="#A5F8D3"
                              strokeWidth="2"
                              strokeLinecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="input-container">
                        <textarea
                          className="textarea-field"
                          placeholder=" "
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                        <label className="textarea-label">
                          Describe the project in your words
                        </label>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="checkbox-container">
                        <input
                          type="checkbox"
                          className="checkbox-input"
                          id="custom-checkbox"
                          checked={isChecked === 1}
                          onChange={handleCheckboxChange}
                        />
                        <label
                          htmlFor="custom-checkbox"
                          className="custom-checkbox"
                        ></label>
                        <label
                          htmlFor="custom-checkbox"
                          className="checkbox-label"
                        >
                          I agree to the{" "}
                          <span style={{ color: "#A5F8D3" }}>
                            Privacy Policy.
                          </span>
                        </label>
                        <p>Checkbox value: {isChecked}</p>{" "}
                        {/* Display the current state value */}
                      </div>
                    </div>

                    <div>
                      <div
                        className={`${homeStyle.btnHeroSection} ${
                          isDisabled ? homeStyle.disabled : ""
                        }`}
                        onClick={handleSendMail}
                        style={{
                          pointerEvents: isDisabled ? "none" : "auto",
                          opacity: isDisabled ? 0.5 : 1,
                        }}
                      >
                        <p className="mb-0">Send Inquiry</p>
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
                      </div>
                    </div>
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

export default ContactHero;
