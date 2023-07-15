import React from "react";
import WebImage from "../../../images/WebImage.svg";
import "../../../Styles.css";

export default function Image() {
  return (
    <div className="projectsImageContainer">
      <img
        src={WebImage}
        className="projectsImage"
        alt="Web"
      />
    </div>
  );
};
