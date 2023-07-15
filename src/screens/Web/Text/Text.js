import React from "react";
import { useContextAPI } from "../../../context/ContextAPI";
import "../../../Styles.css";

export default function Text() {

  const { language } = useContextAPI();

  return (
    <div className="projectsSecondaryTitleContainer">
      <p className="projectsSecondaryTitle">
        {
          language === "us"
            ? "My Web Apps"
            : "Meus aplicativos Web"
        }
      </p>
    </div>
  );
};
