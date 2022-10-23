import React from "react";

export default function MobileTitles({ language }) {
  return (
    <>
      <h2>Mobile APPS</h2>
      <p
        className="grid-description">
        {language === "English" ?
          "My apps and games developed in React Native for Android" :
          "Meus aplicativos e jogos desenvolvidos em React Native para Android"}
      </p>
    </>
  );
};
