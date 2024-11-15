import React from 'react';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutwardRounded';
import { useEffect, useState } from "react";

const ResearchlineIllust = ({researchLine}) => {
  // obsoleto, para la animación
  // const [isHovered1, setIsHovered1] = useState(false);
  // const handleMouseEnter = () => setIsHovered1(true);
  // const handleMouseLeave = () => setIsHovered1(false);
  const VideoConferenceIllust = (           
  <div className={`video-conference-illust`}> 
        <div className="video-conference-illust-container">
          <div className={`video-conference-item `} id="video-conference-item-1"></div>
          <div className="video-conference-item" id="video-conference-item-2"></div>
          <div className="video-conference-item" id="video-conference-item-3"></div>
          <div className="video-conference-item" id="video-conference-item-4"></div>
        </div>
        <ArrowOutwardIcon className="text-white text-5xl absolute right-2 hover:right-0 bottom-1 transition-all hover:bottom-2 font-bold opacity-75 hover:opacity-100"/>
  </div>)
  const DataSpacesIllust = (       
    <div className="data-spaces-illust">    
    <div className="data-spaces-illust-container">
    <div className="data-spaces-item" id="data-spaces-item-1"></div>
    <div className="data-spaces-item" id="data-spaces-item-2"></div>
    <div className="data-spaces-item" id="data-spaces-item-3"></div>
    <div className="data-spaces-item" id="data-spaces-item-4"></div>

          <ArrowOutwardIcon className="text-white text-5xl absolute right-2 hover:right-0 bottom-1 transition-all hover:bottom-2 font-bold opacity-75 hover:opacity-100"/>
    </div>
    </div>)


 switch (researchLine){
  case "data-spaces":
    return DataSpacesIllust;
  case "video-conference":
    return VideoConferenceIllust;

}
}

export default ResearchlineIllust;
