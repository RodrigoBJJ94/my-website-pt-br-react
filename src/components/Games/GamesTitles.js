import React from "react";

export default function GamesTitles({ language }) {
  return (
    <>
      <h2>Games</h2>
      <p
        className="grid-description">
          {language === "My web games" ? "" : "Meus games web"}
      </p>
    </>
  );
};
