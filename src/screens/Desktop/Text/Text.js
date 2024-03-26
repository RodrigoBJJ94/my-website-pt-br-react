import React from "react";
import { useContextAPI } from "../../../context/ContextAPI";
import "../../../Styles.css";

export default function Text() {

  const { language } = useContextAPI();

  return (
    <div className="projectsSecondaryTitleContainer">
      <p
        className="projectsSecondaryTitle"
        style={{ color: "#0A1128" }}>
        {
          language === "us"
            ? "My Desktop Apps"
            : "Meus Aplicativos Desktop"
        }
      </p>
    </div>
  );
};
