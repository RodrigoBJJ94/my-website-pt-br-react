import React from "react";
import { useContextAPI } from "../../../context/ContextAPI";
import "../../../Styles.css";
import "./Styles.css";

export default function Title() {

  const { language } = useContextAPI();

  return (
    <div className="contactTitleContainer">
      <p className="projectsTitle">
        {
          language === "us"
            ? "CONTACT"
            : "CONTATO"
        }
      </p>
    </div>
  );
};
