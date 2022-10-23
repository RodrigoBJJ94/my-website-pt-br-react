import React from "react";
import ContactTitle from "./ContactTitle";
import ContactMain from "./ContactMain";
import "./Contact.css";

export default function Contact({ language }) {
  return (
    <section
      id="contact"
      className="intro main-background section">
      <div className="main-content intro-contact">
        <div className="intro-text-content contact">
          <ContactTitle
            language={language}
          />
          <ContactMain language={language} />
        </div>
      </div>
    </section>
  );
};
