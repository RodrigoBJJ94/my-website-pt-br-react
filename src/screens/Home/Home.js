import React from "react";
import Title from "./Title/Title";
import Text from "./Text/Text";
import Image from "./Image/Image";
import "../../Styles.css";

export default function Home({ screensRef }) {
  return (
    <section
      ref={screensRef.home}
      className="projectsMainContainer"
      style={{ backgroundColor: "#170A28" }}>
      <div className="projectsContainer">
        <div className="projectsContentContainer">
          <Title />
          <Text />
        </div>
        <Image />
      </div>
    </section>
  );
};
