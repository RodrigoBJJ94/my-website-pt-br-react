import React from "react";
import Title from "./Title/Title";
import Text from "./Text/Text";
import "../../Styles.css";
import "./Styles.css";

export default function Contact({ screensRef }) {
  return (
    <section
      ref={screensRef.contact}
      className="projectsMainContainer"
      style={{ backgroundColor: "#170A28" }}>
      <div className="contactContainer">
        <Title />
        <Text />
      </div>
    </section>
  );
};
