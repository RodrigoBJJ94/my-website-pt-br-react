import React from "react";
import { useContextAPI } from "../../../context/ContextAPI";
import "../../../Styles.css";

export default function Content() {

  const { language } = useContextAPI();

  return (
    <div>
      <div className="projectsAppsContainer">
        <p>
          <a
            href="https://github.com/RodrigoBJJ94/music-and-video-downloader-electron"
            className="projectsAppTextSecondary">
            {
              language === "us"
                ? "Music and Video Downloader"
                : "Música e Vídeo Downloader"
            }
          </a>
        </p>
      </div>
    </div>
  );
};
