import React from "react";

export default function HomeMain({ language }) {
  return (
    <>
      <p className="tab">
        {language === "English" ?
          "My focus is on front-end development of mobile, web and desktop applications" :
          "Meu foco é no desenvolvimento front-end de aplicações mobile, web e desktop"}
      </p>
      <p className="tab">
        {language === "English" ?
          "Utilizo diversas linguagens, frameworks, bibliotecas, bancos de dados e outras ferramentas, as principais são:" :
          "I use several languages, frameworks, libraries, databases and other tools, the main ones are:"}

      </p>
      <p className="tab">
        React Native, ReactJS, Electron, JavaScript, Flutter, Dart, Laravel, PHP, HTML, CSS, Sass, Git, MySQL e SQLite
      </p>
    </>
  );
};
