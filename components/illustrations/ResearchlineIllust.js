import React from "react";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutwardRounded";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { useTranslation } from "react-i18next";

const ResearchlineIllust = ({ researchLine }) => {
      const { t, i18n } = useTranslation();
  const VideoConferenceIllust = (
    <div className={`video-conference-illust illust`}>
      <div className="video-conference-illust-container illust-container">
        <div
          className={`video-conference-item `}
          id="video-conference-item-1"
        ></div>
        <div
          className="video-conference-item"
          id="video-conference-item-2"
        ></div>
        <div
          className="video-conference-item"
          id="video-conference-item-3"
        ></div>
        <div
          className="video-conference-item"
          id="video-conference-item-4"
        ></div>
      </div>
      <Link className="icon_link_publication" target="_blank"  href="projects?researchline=videoconference">
        <ArrowOutwardIcon className=" text-white text-5xl absolute right-2 hover:right-0 bottom-1 transition-all hover:bottom-2 font-bold opacity-75 hover:opacity-100" />
        <Badge variant="secondary" size="sm" className="link_publication absolute right-2 bottom-14">   {t("front.ResearchLines.button")} </Badge>
      </Link>
    </div>
  );
  const DataSpacesIllust = (
    <div className="data-spaces-illust illust">
      <div className="data-spaces-illust-container illust-container">
        <div className="data-spaces-item" id="data-spaces-item-1"></div>
        <div className="data-spaces-item" id="data-spaces-item-2"></div>
        <div className="data-spaces-item" id="data-spaces-item-3"></div>
        <div className="data-spaces-item" id="data-spaces-item-4"></div>
      </div>
      <Link className="icon_link_publication" target="_blank" href="projects?researchline=data">
      <ArrowOutwardIcon className=" text-white text-5xl absolute right-2 hover:right-0 bottom-1 transition-all hover:bottom-2 font-bold opacity-75 hover:opacity-100" />
      <Badge variant="secondary" size="sm" className="link_publication absolute right-2 bottom-14">   {t("front.ResearchLines.button")} </Badge>
      </Link>
    </div>
  );
  const GenerativeAIIllust = (
    <div className="generative-ai-illust illust">
      <div className="generative-ai-illust-container illust-container">
        <div className="generative-ai-item" id="generative-ai-item-1"></div>
        <div className="generative-ai-item" id="generative-ai-item-2"></div>
        <div className="generative-ai-item" id="generative-ai-item-3"></div>
        {/* <div className="generative-ai-item" id="generative-ai-item-4"></div> */}
      </div>
      <Link className="icon_link_publication" target="_blank" href="projects?researchline=ai">
        <ArrowOutwardIcon className=" text-background  text-5xl absolute right-2 hover:right-0 bottom-1 transition-all hover:bottom-2 font-bold opacity-75 hover:opacity-100" />
        <Badge variant="secondary" size="sm" className="link_publication absolute right-2 bottom-14">   {t("front.ResearchLines.button")} </Badge>
      </Link>
    </div>
  );

  const ELearningIllust = (
    <div className="e-learning-illust illust">
      <div className="e-learning-illust-container illust-container ">
        <div className="e-learning-item" id="e-learning-item-1"></div>
        <div className="e-learning-item" id="e-learning-item-2"></div>
        <div className="e-learning-item" id="e-learning-item-3"></div>
        {/* <div className="generative-ai-item" id="generative-ai-item-4"></div> */}
      </div>
      <Link className="icon_link_publication" target="_blank" href="projects?researchline=e-learning">
      <ArrowOutwardIcon className=" text-white text-5xl absolute right-2 hover:right-0 bottom-1 transition-all hover:bottom-2 font-bold opacity-75 hover:opacity-100" />
      <Badge variant="secondary" size="sm" className="link_publication absolute right-2 bottom-14">   {t("front.ResearchLines.button")} </Badge>
      </Link>
    </div>
  );

  const ComputingIllust = (
    <div className="networks-illust illust">
      <div className="networks-illust-container illust-container ">
        <img
          className="networks-illust-img"
          src="assets/img/networks_illust.png"
        ></img>
      </div>
      <Link className="icon_link_publication" target="_blank" href="projects?researchline=computing">
      <ArrowOutwardIcon className=" text-white text-5xl absolute right-2 hover:right-0 bottom-1 transition-all hover:bottom-2 font-bold opacity-75 hover:opacity-100" />
        <Badge variant="secondary" size="sm" className="link_publication absolute right-2 bottom-14">   {t("front.ResearchLines.button")} </Badge>
      </Link>
    </div>
  );

  switch (researchLine) {
    case "data":
      return DataSpacesIllust;
    case "videoconference":
      return VideoConferenceIllust;
    case "ai":
      return GenerativeAIIllust;
    case "e-learning":
      return ELearningIllust;
    case "computing":
      return ComputingIllust;
  }
};

export default ResearchlineIllust;
