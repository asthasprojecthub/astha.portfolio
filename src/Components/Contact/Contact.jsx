import React, { useState } from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {
  const [result, setResult] = useState(""); // ✅ Added useState for form response messages

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "124ba274-257c-4303-a3ba-287d6b767d51");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully ✅");
        event.target.reset(); // ✅ Clear form after successful submission
      } else {
        console.error("Error", data);
        setResult(`❌ ${data.message}`);
      }
    } catch (error) {
      console.error("Network Error:", error);
      setResult("❌ Failed to submit form. Try again later.");
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="Design pattern" />
      </div>

      <div className="contact-section">
        {/* Left Side */}
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I am currently open to new projects, internships, and job opportunities.
            Feel free to connect with me.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="Email" />
              <p>astha.verma2909@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="Phone" />
              <p>+91 87802 23547</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="Location" />
              <p>Ahmedabad, Gujarat</p>
            </div>
          </div>
        </div>

        {/* Right Side (Form) */}
        <div className="contact-right">
          <form onSubmit={onSubmit}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              aria-label="Enter your full name"
            />

            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              aria-label="Enter your email address"
            />

            <label htmlFor="message">Write Your Message</label>
            <textarea
              name="message"
              rows="4"
              placeholder="Enter your message"
              required
              aria-label="Write your message here"
            ></textarea>

            <button className="contact-submit" type="submit">
              Submit Now
            </button>

            {/* ✅ Display form submission result */}
            {result && <p className="form-result">{result}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
