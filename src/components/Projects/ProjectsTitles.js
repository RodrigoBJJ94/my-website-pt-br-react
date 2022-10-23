import React from "react";

export default function ProjectsTitles({ language }) {
  return (
    <>
      <h2>WEB APPS</h2>
      <p
        className="grid-description">
          {language === "English" ? "My web apps" : "Meus aplicativos web"}    
      </p>
    </>
  );
};
