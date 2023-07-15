import React from "react";
import { useContextAPI } from "../../../context/ContextAPI";
import "../../../Styles.css";
import "./Styles.css";

export default function Title() {

  const { language } = useContextAPI();

  return (
    <div className="homeTitleContainer">
      <p className="projectsTitle">
        {
          language === "us"
            ? "DEVELOPER"
            : "DESENVOLVEDOR"
        }
      </p>
    </div>
  );
};
