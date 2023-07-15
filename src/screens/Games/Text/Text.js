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
            ? "My Web Games"
            : "Meus Games Web"
        }
      </p>
    </div>
  );
};
