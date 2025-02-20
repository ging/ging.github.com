// "use client";

// import clsx from "clsx";
// import * as React from "react";
// import { useState } from "react";
// import Link from "next/link";

// import { Slot } from "@radix-ui/react-slot";
// import { cva } from "class-variance-authority";
// import { cn } from "@/lib/utils";

// // Data
// import { useTranslation } from "react-i18next";
// import { researchlines } from "@/constants/researchlines";

// // Components
// import Heading from "../ui/Heading";
// import { Mybadge, badgeVariants } from "../ui/mybadge";
// import { Button, ButtonVariants } from "../ui/button";
// import Image from "../ui/image";
// import { Divider } from "../ui/divider";
// import ResearchlineIllust from "../illustrations/ResearchlineIllust";
// import {
//   CustomCard,
//   CardBody,
//   CardContent,
//   CardTitle,
//   CardSubtitle,
//   CardDescription,
//   CardFooter,
//   CardHeader,
// } from "@/components/ui/customCard";

// // Icons
// import { ExternalLinkIcon } from "@radix-ui/react-icons";

// const Card = React.forwardRef(
//   (
//     {
//       direction,
//       className,
//       title,
//       description_en,
//       description_es,
//       img,
//       route,
//       researchLine,
//       logo,
//       projectType = "european-project",
//     },
//     ref
//   ) => {
//     const { t, i18n } = useTranslation();
//     const currentLang = i18n.language;

//     // PARA PROJECTCARD / teamcard
//     // Manejo de estado para ver si se ha expandido el "ver más" del texto
//     const [isExpanded, setIsExpanded] = useState(false);
//     const toggleDescription = () => {
//       setIsExpanded((prevState) => !prevState); // Alterna entre true y false,
//     };

//     //elegir description o description_es según el currentLang
//     let description_translation = description_en;
//     if (currentLang == "es" && description_es) {
//       description_translation = description_es;
//     }

//     // fondo researchline cards - project cards
//     let backgroundColor;

//     // coge solo la primera researchline para ponerle el fondo
//     switch (researchLine && researchLine[0]) {
//       case "data":
//         backgroundColor = "bg-data_bg"; // Para la categoría 'data'
//         break;
//       case "videoconference":
//         backgroundColor = "bg-videoconference_bg"; // Para la categoría 'videoconference'
//         break;
//       case "ai":
//         backgroundColor = "bg-ai_bg"; // Para la categoría 'ai'
//         break;
//       case "computing":
//         backgroundColor = "bg-networks_bg"; // Para la categoría 'ai'
//         break;
//       case "e-learning":
//         backgroundColor = "bg-eLearning_bg"; // Para la categoría 'ai'
//         break;
//       default:
//         backgroundColor = "bg-gray-600/50"; // Valor por defecto si no hay coincidencia
//         break;
//     }

//     //si tiene más de una researchline le ponemos all al link a las publicaciones
//     let pubResearchLine = "all";
//     if (researchLine && researchLine.length == 1) {
//       pubResearchLine = researchLine[0];
//     }

//     // PROJECT
//     return (
//       <CustomCard
//         className={
//           cn({ direction, className }) +
//           "hover:scale-[100%] bg-transparent border-transparent shadow-none border-b-gray-400 border-b-1 rounded-none py-6 flex flex-col items-start sm:flex-row gap-3 sm:gap-6"
//         }
//       >
//         <div
//           className={`w-full min-w-[184px] sm:w-1/2 h-[237px] bg-cover sm:bg-center ${backgroundColor} rounded-md `}
//         >
//           <Image
//             className="brightness-0 invert p-8"
//             src={logo}
//             fit="contain"
//             layout={"bottom-right"}
//             badgeVariant={"secondary"}
//             badgeSize={"md"}
//             badgeContent={t(`projects.type.${projectType}`)}
//           />
//         </div>

//         <CardBody>
//           <CardContent className="gap-5 my-0.5 lg:mt-0 lg:gap-[22px]">
//             <div>
//               <CardTitle
//                 level="h3"
//                 className=" w-fit hover:text-blue-400 transition-all mb-0"
//               >
//                 {title && (
//                   <Link
//                     href={route}
//                     rel="noopener noreferrer"
//                     target="_blank"
//                     className={`flex flex-row w-fit gap-2 ${
//                       title.length > 18 ? "items-start" : "items-center"
//                     }`}
//                   >
//                     {title}{" "}
//                     <ExternalLinkIcon
//                       className="mt-1 flex-shrink-0"
//                       width={24}
//                       height={24}
//                     />{" "}
//                   </Link>
//                 )}
//               </CardTitle>

//               {description_translation && (
//                 <CardDescription lines={3}>
//                   {description_translation}
//                 </CardDescription>
//               )}
//             </div>

//             {/* <div className="flex flex-col items-start lg:flex-row gap-4 lg:gap-0 justify-between lg:items-end"> */}
//             <div className="BADGES-RESEARCHLINE flex flex-wrap gap-2">
//               {Array.isArray(researchLine)
//                 ? researchLine.map((item, index) => {
//                     // fondo researchline cards
//                     let backgroundColorResearchLine;
//                     let textColorResearchLine;

//                     // coge solo la primera researchline para ponerle el fondo
//                     switch (item) {
//                       case "data":
//                         backgroundColorResearchLine = "bg-data-500"; // Para la categoría 'data'
//                         break;
//                       case "videoconference":
//                         backgroundColorResearchLine = "bg-videoconference-500"; // Para la categoría 'videoconference'
//                         break;
//                       case "ai":
//                         backgroundColorResearchLine = "bg-ai-700"; // Para la categoría 'ai'
//                         // textColorResearchLine = "text-gray-900"
//                         break;
//                       case "computing":
//                         backgroundColorResearchLine = "bg-networks-500"; // Para la categoría 'ai'
//                         break;
//                       case "e-learning":
//                         backgroundColorResearchLine = "bg-eLearning-500"; // Para la categoría 'ai'
//                         break;
//                       default:
//                         backgroundColorResearchLine = "bg-gray-500"; // Valor por defecto si no hay coincidencia
//                         break;
//                     }
//                     return (
//                       <Mybadge
//                         className={` ${backgroundColorResearchLine} text-white ${textColorResearchLine} border-none tracking-widest`}
//                         key={index}
//                         variant="default"
//                         size="lg"
//                       >
//                         {t(`projects.researchLines.${item}`)}
//                       </Mybadge>
//                     );
//                   })
//                 : null}
//             </div>
//             {/* <Button size="default" radius="rounded_sm" variant="outline" > 
//                   <Link href={`/research?researchline=${pubResearchLine}`}>
//                     {t(`projects.card.button`)} 
//                   </Link>                 
//                 </Button> 
//               */}
//             {/* </div> */}
//           </CardContent>
//         </CardBody>
//       </CustomCard>
//     );
//   }
// );

// Card.displayName = "ProjectCard";

// export default Card;



"use client";

import clsx from "clsx";
import * as React from "react";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

import { useTranslation } from "react-i18next";
import { researchlines } from "@/constants/researchlines";
import { Mybadge } from "../ui/mybadge";
import { Button } from "../ui/button";
import Image from "../ui/image";
import { CustomCard, CardBody, CardContent, CardTitle, CardDescription } from "@/components/ui/customCard";
import { ExternalLinkIcon } from "@radix-ui/react-icons";

const Card = React.forwardRef(
  ({ title, description_en, description_es, img, route, researchLine, logo, projectType = "european-project" }, ref) => {
    const { t, i18n } = useTranslation();
    const currentLang = i18n.language;
    const descriptionRef = useRef(null);
    const [isExpanded, setIsExpanded] = useState(false);
    const [isOverflowing, setIsOverflowing] = useState(false);

    useEffect(() => {
      if (descriptionRef.current) {
        setIsOverflowing(descriptionRef.current.scrollHeight > descriptionRef.current.clientHeight);
      }
    }, [description_en, description_es]);

    let description_translation = description_en;
    if (currentLang === "es" && description_es) {
      description_translation = description_es;
    }

    let backgroundColor = "bg-gray-600/50";
    if (researchLine && researchLine[0]) {
      const colors = {
        data: "bg-data_bg",
        videoconference: "bg-videoconference_bg",
        ai: "bg-ai_bg",
        computing: "bg-networks_bg",
        "e-learning": "bg-eLearning_bg",
      };
      backgroundColor = colors[researchLine[0]] || backgroundColor;
    }

    return (
      <CustomCard className="bg-transparent border-transparent shadow-none border-b-gray-400 border-b-1 rounded-none py-6 flex flex-col items-start sm:flex-row gap-3 sm:gap-6">
        <div className={`w-full min-w-[184px] sm:w-1/2 h-[237px] bg-cover sm:bg-center ${backgroundColor} rounded-md`}>
          <Image className="brightness-0 invert p-8" src={logo} fit="contain" layout="bottom-right" badgeVariant="secondary" badgeSize="md" badgeContent={t(`projects.type.${projectType}`)} />
        </div>

        <CardBody>
          <CardContent className="gap-5 my-0.5 lg:mt-0 lg:gap-[22px]">
            <div>
              <CardTitle level="h3" className="w-fit hover:text-blue-400 transition-all mb-0">
                {title && (
                  <Link href={route} rel="noopener noreferrer" target="_blank" className="flex flex-row w-fit gap-2 items-center">
                    {title} <ExternalLinkIcon className="mt-1 flex-shrink-0" width={24} height={24} />
                  </Link>
                )}
              </CardTitle>

              {description_translation && (
                <CardDescription lines={isExpanded ? undefined : 3} ref={descriptionRef}>
                  {description_translation}
                </CardDescription>
              )}
              {isOverflowing && (
                <Button onClick={() => setIsExpanded(!isExpanded)} variant="outline" size="sm" className="mt-2">
                  {isExpanded ? t("projects.card.showLess") : t("projects.card.showMore")}
                </Button>
              )}
            </div>

            <div className="BADGES-RESEARCHLINE flex flex-wrap gap-2">
              {Array.isArray(researchLine) &&
                researchLine.map((item, index) => {
                  const colors = {
                    data: "bg-data-500",
                    videoconference: "bg-videoconference-500",
                    ai: "bg-ai-700",
                    computing: "bg-networks-500",
                    "e-learning": "bg-eLearning-500",
                  };
                  return (
                    <Mybadge key={index} className={`${colors[item] || "bg-gray-500"} text-white border-none tracking-widest`} variant="default" size="lg">
                      {t(`projects.researchLines.${item}`)}
                    </Mybadge>
                  );
                })}
            </div>
          </CardContent>
        </CardBody>
      </CustomCard>
    );
  }
);

Card.displayName = "ProjectCard";

export default Card;
