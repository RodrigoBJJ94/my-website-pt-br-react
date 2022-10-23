import React from "react";

export default function HomeTitle({ language }) {
  return (
    <h2 className="home">
      {language === "English" ? "Developer" : "Desenvolvedor"}
    </h2>
  );
};
