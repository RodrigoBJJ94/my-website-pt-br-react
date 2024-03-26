import React from "react";
import { useContextAPI } from "../../../../context/ContextAPI";
import "./Styles.css";

export default function Titles({ scrolltoScreen }) {

  const { language } = useContextAPI();

  return (
    <>
      <div className="headerSubContainers">
        <button
          onClick={() => {
            scrolltoScreen("mobile");
          }}
          className="headerButtonTitles">
          Mobile
        </button>
      </div>
      <div className="headerSubContainers">
        <button
          onClick={() => {
            scrolltoScreen("web");
          }}
          className="headerButtonTitles">
          Web
        </button>
      </div>
      <div className="headerSubContainers">
        <button
          onClick={() => {
            scrolltoScreen("desktop");
          }}
          className="headerButtonTitles">
          Desktop
        </button>
      </div>
      <div className="headerSubContainers">
        <button
          onClick={() => {
            scrolltoScreen("contact");
          }}
          className="headerButtonTitles">
          {
            language === "us"
              ? "Contact"
              : "Contato"
          }
        </button>
      </div>
    </>
  );
};
