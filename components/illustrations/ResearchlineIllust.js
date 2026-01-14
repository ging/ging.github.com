import React from "react";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutwardRounded";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Mybadge } from "@/components/ui/mybadge";
import { useTranslation } from "react-i18next";
import Image from "../ui/image";

const ResearchlineIllust = ({ researchLine }) => {
  const { t, i18n } = useTranslation();
  const VideoConferenceIllust = (
    <Link className="icon_link_publication" target="_blank" href="projects?researchline=videoconference">
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
        <ArrowOutwardIcon className=" text-white absolute right-1 hover:right-0 bottom-0.5 transition-all hover:bottom-2 font-bold opacity-75 hover:opacity-100" sx={{ fontSize: 48 }} />
        <Mybadge variant="secondary" size="sm" className="link_publication absolute right-2 bottom-14">   {t("front.ResearchLines.button")} </Mybadge>
      </div>
    </Link>
  );
  const DataSpacesIllust = (
    <Link className="icon_link_publication" target="_blank" href="projects?researchline=data">
      <div className="data-spaces-illust illust">
        <div className="data-spaces-illust-container illust-container">
          <div className="data-spaces-item" id="data-spaces-item-1"></div>
          <div className="data-spaces-item" id="data-spaces-item-2"></div>
          <div className="data-spaces-item" id="data-spaces-item-3"></div>
          <div className="data-spaces-item" id="data-spaces-item-4"></div>
        </div>

        <ArrowOutwardIcon className=" text-white absolute right-1 hover:right-0 bottom-1 transition-all hover:bottom-2 font-bold opacity-75 hover:opacity-100" sx={{ fontSize: 48 }} />
        <Mybadge variant="secondary" size="sm" className="link_publication absolute right-2 bottom-14">   {t("front.ResearchLines.button")} </Mybadge>

      </div>
    </Link>
  );
  const GenerativeAIIllust = (
      <Link className="icon_link_publication" target="_blank" href="projects?researchline=ai">
    <div className="generative-ai-illust illust">
      <div className="generative-ai-illust-container illust-container">
        <div className="generative-ai-item" id="generative-ai-item-1"></div>
        <div className="generative-ai-item" id="generative-ai-item-2"></div>
        <div className="generative-ai-item" id="generative-ai-item-3"></div>
        {/* <div className="generative-ai-item" id="generative-ai-item-4"></div> */}
      </div>
        <ArrowOutwardIcon className=" text-background  absolute right-1 hover:right-0 bottom-1 transition-all hover:bottom-2 font-bold opacity-75 hover:opacity-100" sx={{ fontSize: 48 }} />
        <Mybadge variant="secondary" size="sm" className="link_publication absolute right-2 bottom-14">   {t("front.ResearchLines.button")} </Mybadge>
   
    </div>
       </Link>
  );

  const ELearningIllust = (
      <Link className="icon_link_publication" target="_blank" href="projects?researchline=e-learning">
    <div className="e-learning-illust illust">
      <div className="e-learning-illust-container illust-container ">
        <div className="e-learning-item" id="e-learning-item-1"></div>
        <div className="e-learning-item" id="e-learning-item-2"></div>
        <div className="e-learning-item" id="e-learning-item-3"></div>
        {/* <div className="generative-ai-item" id="generative-ai-item-4"></div> */}
      </div>
        <ArrowOutwardIcon className=" text-white  absolute right-1 hover:right-0 bottom-1 transition-all hover:bottom-2 font-bold opacity-75 hover:opacity-100" sx={{ fontSize: 48 }} />
        <Mybadge variant="secondary" size="sm" className="link_publication absolute right-2 bottom-14">   {t("front.ResearchLines.button")} </Mybadge>
    </div>
      </Link>
  );

  const ComputingIllust = (
      <Link className="icon_link_publication" target="_blank" href="projects?researchline=computing">
    <div className="networks-illust illust">
      <div className="networks-illust-container illust-container ">
        <Image
          className="networks-illust-img"
          src="assets/img/networks_illust.png"
          fit="contain"
          alt="Computing researchline illustration"
        />
      </div>
  
        <ArrowOutwardIcon className=" text-white absolute right-1 hover:right-0 bottom-1 transition-all hover:bottom-2 font-bold opacity-75 hover:opacity-100" sx={{ fontSize: 48 }} />
        <Mybadge variant="secondary" size="sm" className="link_publication absolute right-2 bottom-14">   {t("front.ResearchLines.button")} </Mybadge>

    </div>
          </Link>
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
