import React from "react";

export default function ContactTitle({ language }) {
  return (
    <h2
      className="contact">
      {language === "English" ? "Contact" : "Contato"}
    </h2>
  );
};
