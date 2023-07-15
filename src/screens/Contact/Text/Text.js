import React from "react";
import { useContextAPI } from "../../../context/ContextAPI";
import "./Styles.css";

export default function Text() {

  const { language } = useContextAPI();

  return (
    <>
      <div className="contactTextContainer">
        <p className="contactTextTitle">
          {
            language === "us"
              ? "Phone/WhatsApp:"
              : "WhatsApp:"
          }
        </p>
        <p>
          <a
            href="https://api.whatsapp.com/send?phone=5551992191122"
            className="contactText">
            +55 51 99219-1122
          </a>
        </p>
      </div>
      <div className="contactTextContainer">
        <p className="contactTextTitle">
          LinkedIn:
        </p>
        <p>
          <a
            href="https://www.linkedin.com/in/rodrigo-brentano-26a7ba204/"
            className="contactText">
            LinkedIn
          </a>
        </p>
      </div>
      <div className="contactTextContainer">
        <p className="contactTextTitle">
          Email:
        </p>
        <p className="contactText">
          rodrigobjj24@gmail.com
        </p>
      </div>
      <div className="contactTextContainer">
        <p className="contactTextTitle">
          GitHub:
        </p>
        <p>
          <a
            href="https://github.com/RodrigoBJJ94"
            className="contactText">
            GitHub
          </a>
        </p>
      </div>
    </>
  );
};
