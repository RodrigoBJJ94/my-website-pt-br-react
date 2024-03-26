import React from "react";
import DesktopImage from "../../../images/DesktopImage.svg"
import "../../../Styles.css";

export default function Image() {
  return (
    <div className="projectsImageContainer">
      <img
        src={DesktopImage}
        className="projectsImage"
        alt="Desktop"
      />
    </div>
  );
};
