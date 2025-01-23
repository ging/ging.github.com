"use client";

import clsx from "clsx";
import * as React from "react";
import { useState } from "react";
import Link from "next/link";

import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Data
import { useTranslation } from "react-i18next";
import { researchlines } from "@/constants/researchlines";

// Components
import Heading from "../ui/Heading";
import { Mybadge, badgeVariants } from "../ui/mybadge";
import Text from "../ui/text";
import { Button, ButtonVariants } from "../ui/button";
import Image from "../ui/image";
import { Divider } from "../ui/divider";
// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger,
// } from "@/components/ui/tooltip";
import ResearchlineIllust from "../illustrations/ResearchlineIllust";
import {
  CustomCard,
  CardBody,
  CardContent,
  CardTitle,
  CardSubtitle,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/customCard";

// Icons
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import ArticleIcon from '@mui/icons-material/Article';


const CardVariants = cva(
  "border border-primary min-w-20 p-4 sm:py-4 inline-flex flex-col gap-4 items-center whitespace-nowrap rounded-md font-body text-sm text-text drop-shadow-md hover:scale-[101%] transition-all overflow-hidden",
  {
    variants: {
      direction: {
        default: "flex flex-col", // horizontal
        vertical: "flex",
      },
    },
    defaultVariants: {
      direction: "default",
    },
  }
);

const deleteSpaces = (string) => {
  let cleanStr = ''
  for (const char of [...string]) {
    if (char != ' ') {
      cleanStr += char;
    }
  }
  return cleanStr
}

const Card = React.forwardRef(
  (
    {
      variant,
      direction,
      className,
      title,
      subtitle,
      description,
      description_en,
      description_es,
      img,
      svg,
      tags,
      date,
      category,
      route,
      name,
      position,
      center,
      email,
      author,
      doi,
      github,
      buttonText,
      cardType,
      role,
      researchLine,
      logo,
      projectType = "european-project",
      keywords,
      researchgate,
      orcid,
      webOfScience,
      googleScholar,
      linkedin,
      portalUpm
    },
    ref
  ) => {
    const { t, i18n } = useTranslation();
    const currentLang = i18n.language;

    // PARA PROJECTCARD / teamcard
    // Manejo de estado para ver si se ha expandido el "ver más" del texto
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleDescription = () => {
      setIsExpanded((prevState) => !prevState); // Alterna entre true y false,
    };

    //elegir description o description_es según el currentLang
    let description_translation = description_en;
    if (currentLang == "es" && description_es) {
      description_translation = description_es;
    }

    // fondo researchline cards - project cards
    let backgroundColor;

    // coge solo la primera researchline para ponerle el fondo
    switch (researchLine && researchLine[0]) {
      case 'data':
        backgroundColor = 'bg-data_bg';  // Para la categoría 'data'
        break;
      case 'videoconference':
        backgroundColor = 'bg-videoconference_bg';  // Para la categoría 'videoconference'
        break;
      case 'ai':
        backgroundColor = 'bg-ai_bg';  // Para la categoría 'ai'
        break;
      case 'computing':
        backgroundColor = 'bg-networks_bg';  // Para la categoría 'ai'
        break;
      case 'e-learning':
        backgroundColor = 'bg-eLearning_bg';  // Para la categoría 'ai'
        break;
      default:
        backgroundColor = 'bg-gray-600/50';  // Valor por defecto si no hay coincidencia
        break;
    }

    //si tiene más de una researchline le ponemos all al link a las publicaciones
    let pubResearchLine = "all";
    if (researchLine && researchLine.length == 1) {
      pubResearchLine = researchLine[0];
    }

    // PROJECT
    const projectCard = (
      <CustomCard className={cn(CardVariants({ direction, className })) 
        + "hover:scale-[100%] bg-transparent border-transparent shadow-none border-b-gray-400 border-b-1 rounded-none py-6 flex flex-col items-start sm:flex-row gap-3 sm:gap-6"}>
        <div className={`w-full min-w-[184px] sm:w-1/2 h-[237px] ${backgroundColor} rounded-md `}>
          <Image className="brightness-0 invert p-8" 
            src={logo}
            fit="contain"
            layout={"bottom-right"}
            hasMybadge={true}
            badgeVariant={"secondary"}
            badgeSize={"md"}
            badgeContent={t(`projects.type.${projectType}`)}
          />
        </div>

        <CardBody>
          <CardContent className="gap-5 my-0.5 lg:mt-0 lg:gap-[22px]">
            <div>
              <CardTitle level="h3" className=" w-fit hover:text-blue-400 transition-all mb-0">
                {title && <Link href={route} rel="noopener noreferrer"
                  target="_blank" className={`flex flex-row w-fit gap-2 ${title.length > 18 ? "items-start" : "items-center"}`}>{title} <ExternalLinkIcon className="mt-1 flex-shrink-0" width={24} height={24} /> </Link>
                }
              </CardTitle>

              {description_translation && 
                <CardDescription lines={3}>
                  {description_translation}
                </CardDescription>
              }
            </div>

            {/* <div className="flex flex-col items-start lg:flex-row gap-4 lg:gap-0 justify-between lg:items-end"> */}
              <div className="BADGES-RESEARCHLINE flex flex-wrap gap-2">
                {Array.isArray(researchLine) ? researchLine.map((item, index) => {

                  // fondo researchline cards
                  let backgroundColorResearchLine;
                  let textColorResearchLine;

                  // coge solo la primera researchline para ponerle el fondo
                  switch (item) {
                    case 'data':
                      backgroundColorResearchLine = 'bg-data-500';  // Para la categoría 'data'
                      break;
                    case 'videoconference':
                      backgroundColorResearchLine = 'bg-videoconference-500';  // Para la categoría 'videoconference'
                      break;
                    case 'ai':
                      backgroundColorResearchLine = 'bg-ai-700';  // Para la categoría 'ai'
                      // textColorResearchLine = "text-gray-900"
                      break;
                    case 'computing':
                      backgroundColorResearchLine = 'bg-networks-500';  // Para la categoría 'ai'
                      break;
                    case 'e-learning':
                      backgroundColorResearchLine = 'bg-eLearning-500';  // Para la categoría 'ai'
                      break;
                    default:
                      backgroundColorResearchLine = 'bg-gray-500';  // Valor por defecto si no hay coincidencia
                      break;
                  }
                  return (<Mybadge className={` ${backgroundColorResearchLine} text-white ${textColorResearchLine} border-none tracking-widest`} key={index} variant="default" size="lg"> 
                    {t(`projects.researchLines.${item}`)}    
                  </Mybadge>)
                  }) : null}
              </div>
              {/* <Button size="default" radius="rounded_sm" variant="outline" > 
                  <Link href={`/research?researchline=${pubResearchLine}`}>
                    {t(`projects.card.button`)} 
                  </Link>                 
                </Button> 
              */}
            {/* </div> */}
          </CardContent>

        </CardBody>

      </CustomCard>
    );

    // COURSE
    const courseCard = (
      <CustomCard
        className={cn(CardVariants({ direction, className }))}
        style={{
          backgroundImage: "url('assets/fondos/background_image.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <CardHeader className="flex w-full gap-2 items-center">
          <Mybadge variant="outline" size="lg">
            {date}
          </Mybadge>
          <Mybadge variant="outline" size="lg">
            {category}
          </Mybadge>
          <span className="spacer w-full" />
          <Button href={route} variant="ghost" size="lg">
            Ir al curso <ExternalLinkIcon className="w-5 h-5" />
          </Button>
        </CardHeader>
        {/* <Image
            className={"h-40"}
            src={img || "placeholder.jpg"} // La imagen por defecto será una cadena vacía si no hay src
            alt={title || "Image"} // Usa el título como alt si existe
            fit="cover" // Ajustamos el contenido al contenedor
          /> */}
        <CardBody>
          <CardContent>
            <CardTitle>{title}</CardTitle>
            <CardSubtitle level="h6">{subtitle}</CardSubtitle>
            <CardDescription>{description}</CardDescription>
            {/* <div className={tagContainerClasses}>{renderTags(tags)}</div> */}
          </CardContent>
        </CardBody>
      </CustomCard>
    );

    // PUBLICATIONS - ok
    const publicationCard = (
      <CustomCard
        className={cn(
          CardVariants({ direction, className }) + "  bg-background-300 border-none shadow-md"
        )}
      >
        <CardHeader className="flex flex-wrap">

          {Array.isArray(researchLine) ? researchLine.map((researchline, index) => {
            let backgroundColorResearchLine;
            let textColorResearchLine;
            let backgroundIcon;
            // coge solo la primera researchline para ponerle el fondo
            switch (deleteSpaces(researchline)) {
              case 'data':
                backgroundColorResearchLine = 'bg-data-500/40';  // Para la categoría 'data'
                backgroundIcon = "assets/img/icons/data_icon.svg";
                textColorResearchLine = "text-data-300";
                break;
              case 'videoconference':
                backgroundColorResearchLine = 'bg-videoconference-600/60';  // Para la categoría 'videoconference'
                backgroundIcon = "assets/img/icons/videoconference_icon.svg";
                textColorResearchLine = "text-videoconference-200";
                break;
              case 'ai':
                backgroundColorResearchLine = 'bg-ai-700/40';  // Para la categoría 'ai'
                backgroundIcon = "assets/img/icons/ai_icon.svg";
                textColorResearchLine = "text-ai-400"
                break;
              case 'computing':
                backgroundColorResearchLine = 'bg-networks-600/60';
                backgroundIcon = "assets/img/icons/networks_icon.svg";
                textColorResearchLine = "text-networks-200";  // Para la categoría 'ai'
                break;
              case 'e-learning':
                backgroundColorResearchLine = 'bg-eLearning-600/60';
                backgroundIcon = "assets/img/icons/e-learning_icon.svg";
                textColorResearchLine = "text-eLearning-200";  // Para la categoría 'ai'
                break;
              default:
                backgroundColorResearchLine = 'bg-gray-500';  // Valor por defecto si no hay coincidencia
                break;
            }

            return (
              <Mybadge key={index} className={` ${backgroundColorResearchLine} text-white ${textColorResearchLine} border-none tracking-widest`}>
                <img className="h-3 pr-1.5" src={backgroundIcon}></img>
                <div className="pb-0.5">{t(`projects.researchLines.${deleteSpaces(researchline)}`) } </div>  </Mybadge>
            )
          }) : null
          }
        </CardHeader>
        <CardBody>
          <CardContent className="gap-1">
            <CardTitle level="title-sm">
              {title}
            </CardTitle>
            <div className="flex"> 
              <Text type="small" className="font-bold">{t(`research.filter.${category}`)}</Text>
              <div className="mx-2 mb-2">·</div> 
              <Text type="small">{date && date[0]}</Text>
            </div>
            <Text className="text-gray-300/90 mb-4" type="small">{author}</Text>
            <div className="flex flex-wrap gap-1.5">
              {Array.isArray(keywords) ? keywords.map((keyword, index) => {
                return (
                  <Mybadge key={index} size="default" className="bg-[#000000] border-none text-gray-300"> {keyword} </Mybadge>
                )
              }) : null}
            </div>

          </CardContent>
        </CardBody>
        <CardFooter>
          {doi ? (
            <Button asChild variant="outline" size="sm" radius="rounded_sm">
              <Link rel="noopener noreferrer" target="_blank" href={doi}>
                {t("research.action-button")}

                <ArrowRightIcon />
              </Link>
            </Button>
          ) : null}
        </CardFooter>
        {/* 
          {console.log(date && date[0])} */}

      </CustomCard>

    );

    // TEAM - ok
    const teamCard = (
      <CustomCard
        // className={
        //   cn(CardVariants({direction, className }))
        // }
        className="w-80 bg- transparent border-none shadow-none 300/60 h-86  items-start"
      >
        {(img || svg) && (
          <div className="aspect-square h-60 rounded-full overflow-hidden bg-blue-700/30">
            <Image className="saturate-0 mix-blend-lighten" 
              src={img || "placeholder.jpg"}
              fit="cover"
            />
          </div>
        )}
        {(name || description || email) && (
          <CardContent className="flex justify-start items-start mb-auto">
            {/* <div className="flex flex-row"> */}
              <CardTitle level="title-sm" className={"text-inherit text-center"}>
                <b>{name} </b>
              </CardTitle>
              {/* {position && (<Mybadge> {position}</Mybadge>)} */}
            {/* </div> */}
            {role && <CardDescription type="short-p">{role}</CardDescription>}
            {email && (
              <Mybadge size="sm" variant="secondary"
                className={"font-semibold break-words text-wrap mt-1 text-gray-300 bg-background-300"}>
                <MailOutlinedIcon className=" text-gray-300 mr-1"  sx={{ fontSize: 16 }}/>
                {email}
              </Mybadge>
            )}
            <Divider></Divider>
            <div className="pb-3">
              <Text
                type="small"
                className={isExpanded ? "line-clamp-none text-white" : "line-clamp-4 text-white"}
              >
                {description_translation}
              </Text>
              <Button 
                size="sm" variant="link" 
                className="!min-w-fit p-0 cursor-pointer font-bold hover:text-blue-300  text-white underline underline-offset-2" 
                onClick={toggleDescription}
                >
                  {isExpanded ? t(`projects.card.toggleLess`) : t(`projects.card.toggleMore`)}
              </Button>
            </div>
            
            
            <div className="flex gap-2 mt-3">
              {researchgate &&
                <Link target="_blank" href={researchgate}
                  className={" icon_link_publication relative text-left mb-1 lg:mb-1.5 hover:underline flex flex-row items-center cursor-pointer"}>
                <Button href="#" className={ButtonVariants({
                  variant: "default",
                  size: "icon",
                  radius: "rounded_full",
                }) + " bg-blue-600 hover:bg-blue-700 "}>
                  <img className="h-5 max-w-5 contrast-200 saturate-50"  src="/assets/img/logos/researchgate.png"/>
                  <Mybadge variant="secondary" size="xs" className="link_publication absolute left-0 bottom-7 bg-[#00000097]">   ResearchGate </Mybadge>   

                </Button>
                
              </Link>}
              {orcid && <Link target="_blank" href={orcid}
                className={"relative icon_link_publication mb-1 lg:mb-1.5 hover:underline z-50 w-fit flex flex-row items-center cursor-pointer"}>
                <Button href="#" className={ButtonVariants({
                  variant: "default",
                  size: "icon",
                  radius: "rounded_full",
                }) + " bg-green-600 hover:bg-green-700 "}>
                  <img className="h-7 max-w-7"  src="/assets/img/logos/orcid-1.png"/>
                  <Mybadge variant="secondary" size="xs" className="link_publication absolute -translate-x-1/2 left-1/2 bottom-7 shadow-lg bg-[#00000097]">   Orcid </Mybadge>   
                </Button>
              </Link>}
              {/* {webOfScience && <Link target="_blank" href={webOfScience}
                className={"text-left mb-1 lg:mb-1.5 hover:underline flex flex-row items-center cursor-pointer"}>
                <Button href="#" className={ButtonVariants({
                  variant: "default",
                  size: "icon",
                  radius: "rounded_full",
                }) + " bg-green-700 hover:bg-green-800 "}>
                  <img className="h-5 max-w-5"  src="/assets/img/logos/researchgate.png"/>
                </Button>
              </Link>} */}
              {googleScholar && <Link target="_blank" href={googleScholar}
                className={" icon_link_publication relative text-left mb-1 lg:mb-1.5 hover:underline flex flex-row items-center cursor-pointer"}>
                <Button href="#" className={ButtonVariants({
                  variant: "default",
                  size: "icon",
                  radius: "rounded_full",
                }) + " bg-blue-800 hover:bg-blue-900 "}>
                  <img className="h-7 max-w-7 rounded-full"  src="/assets/img/logos/google-scholar.png"/>
                  <Mybadge variant="secondary" size="xs" className="link_publication bg-[#00000097] absolute -translate-x-1/2 left-1/2 bottom-7"> Google Scholar </Mybadge>   
                </Button>
              </Link>}
              {linkedin && <Link target="_blank" href={linkedin}
                className={" icon_link_publication relative text-left h-7 max-w-7 mb-1 lg:mb-1.5 hover:underline flex flex-row items-center cursor-pointer"}>
                <Button href="#" className={ButtonVariants({
                  variant: "default",
                  size: "icon",
                  radius: "rounded_full",
                }) + " bg-[#006198] hover:bg-[#006198] "}>
                 <img className="h-[28px] rounded-full max-w-[28px] object-scale-down "  src="/assets/img/logos/linkedin.png"/>
                 <Mybadge variant="secondary" size="xs" className="link_publication bg-[#00000097] absolute -translate-x-1/2 left-1/2 bottom-7"> LinkedIn </Mybadge>   
                </Button>
              </Link>}
              {portalUpm  && <Link target="_blank" href={portalUpm}
                className={"icon_link_publication relative text-left mb-1 lg:mb-1.5 hover:underline flex flex-row items-center cursor-pointer"}>
                <Button href="#" className={ButtonVariants({
                  variant: "default",
                  size: "icon",
                  radius: "rounded_full",
                }) + " bg-blue-600 hover:bg-blue-700 "}>
                  <p className="text-2xs font-bold"> UPM </p>
                  <Mybadge variant="secondary" size="xs" className="link_publication bg-[#00000097] absolute -translate-x-1/2 left-1/2 bottom-7"> Portal Científico UPM </Mybadge>   
                </Button>
              </Link>}
            </div>
          </CardContent>
        )}
        {/* {( email &&    
        <CardFooter>
          <a href={email}>{email}</a>
        </CardFooter>)} */}
      </CustomCard>
    );

    // TOOL - ok
    const toolCard = (
      <CustomCard className={cn(CardVariants({ direction, className }))}>
        {img && (
          <Image
            src={/* process.env.PUBLIC_URL */ +img || "placeholder.jpg"}
            alt={/* process.env.PUBLIC_URL */ +img || "placeholder.jpg"}
            className={"h-24"}
            fit="contain"
          />
        )}
        <CardBody>
          <CardContent>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardContent>
        </CardBody>
        <CardFooter>
          {github && (
            <Button asChild variant="link">
              <Link rel="noopener noreferrer" target="_blank" href={github}>
                GitHub
              </Link>
            </Button>
          )}
          <Button asChild variant="secondary" radius="rounded_md">
            <Link rel="noopener noreferrer" target="_blank" href={route}>
              Ver herramienta
              <ArrowRightIcon />
            </Link>
          </Button>
        </CardFooter>
      </CustomCard>
    );

    const researchLineCard = (
      <div className="card-researchline max-w-[300px]" >
        <ResearchlineIllust researchLine={researchLine} />
        <div>
          <h6 className="pt-4 font-normal text-2xl text-white py-3"> {title} </h6>
          <Text className="font-light">
            {description}
          </Text>
          {/* <Button asChild variant="outline" size="sm" radius="rounded_sm" className="mt-4">
              <Link rel="noopener noreferrer" target="_blank" href={`projects?researchline=${researchLine}`} >
                {t("front.ResearchLines.button")}

                <ArrowRightIcon />
              </Link>
            </Button> */}
        </div>
      </div>

    );

    // Usar el prop cardType para determinar qué tipo de tarjeta renderizar
    switch (cardType) {
      default:
        return projectCard;
      case "project":
        return projectCard;
      case "course":
        return courseCard;
      case "publication":
        return publicationCard;
      case "team":
        return teamCard;
      case "tool":
        return toolCard;
      case "researchline":
        return researchLineCard;
    }
  }
);

Card.displayName = "Card";

export { Card, CardVariants };
