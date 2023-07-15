import React from "react";
import Title from "./Title/Title";
import Text from "./Text/Text";
import Content from "./Content/Content";
import Image from "./Image/Image";
import "../../Styles.css";

export default function Web({ screensRef }) {
  return (
    <section
      ref={screensRef.web}
      className="projectsMainContainer"
      style={{ backgroundColor: "#170A28" }}>
      <div className="projectsContainer">
        <div className="projectsContentContainer">
          <Title />
          <Text />
          <Content />
        </div>
        <Image />
      </div>
    </section>
  );
};
