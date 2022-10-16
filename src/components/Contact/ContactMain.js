import React from "react";

export default function ContactMain() {
  return (
    <>
      <p><strong>WhatsApp: </strong>
        <a
          href="https://api.whatsapp.com/send?phone=5551992191122"
          target="_blank"
          rel="noreferrer"
          className="contact-mobile">
          51 992191122
        </a>
      </p>
      <p><strong>LinkedIn: </strong>
        <a
          href="https://www.linkedin.com/in/rodrigo-brentano-26a7ba204/"
          target="_blank"
          rel="noreferrer"
          className="contact-mobile">
          ...rodrigo-brentano-26a7ba204
        </a></p>
      <p><strong>Email: </strong> rodrigobjj24@gmail.com</p>
      <p><strong>GitHub: </strong>
        <a
          href="https://github.com/RodrigoBJJ94"
          target="_blank"
          rel="noreferrer"
          className="contact-mobile">
          https://github.com/RodrigoBJJ94
        </a></p>
    </>
  );
};
