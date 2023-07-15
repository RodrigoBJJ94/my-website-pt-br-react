import React from "react";
import Title from "./Title/Title";
import Text from "./Text/Text";
import Content from "./Content/Content";
import Image from "./Image/Image";
import "../../Styles.css";

export default function Mobile({ screensRef }) {
  return (
    <section
      ref={screensRef.mobile}
      className="projectsMainContainer">
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
