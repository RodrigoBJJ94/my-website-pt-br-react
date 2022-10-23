import React from "react";
import "./Footer.css";

export default function Footer({ language }) {
  return (
    <footer
      className="footer white-background">
      <p>
        {language === "English" ?
          "Created by Rodrigo Brentano" :
          "Criado por Rodrigo Brentano"}
      </p>
    </footer>
  );
};
