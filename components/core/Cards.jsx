"use client";

import clsx from "clsx";
import * as React from "react";

import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";


import Heading from "../ui/Heading";
import { Badge, badgeVariants } from "../ui/badge";
import Text from "../ui/Text";
import { Button } from "../ui/button";
import Image from "../ui/image";
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

import { useTranslation } from "react-i18next";
import { useState } from "react";

import {
  FaceIcon,
  ArrowRightIcon,
} from "@radix-ui/react-icons";

import { ExternalLinkIcon } from "@radix-ui/react-icons";
import Link from "next/link";

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

const tagContainerClasses = cn(
  "mt-6 w-full flex flex-wrap gap-2 justify-start"
);


const renderTags = (tags) => {
  if (!tags) return null;
  const tagsArray = tags.split(",").map((tag) => tag.trim()); // Convierte el string en array y elimina espacios
  return tagsArray.map((tag, index) => (
    <Badge key={index} variant="default">
      {tag}
    </Badge> // Añade una key a cada Label
  ));
};



// quitarle guión, añadir espaciado, mayúscula (Formateo)
const renderCategory = (category) => {
  if (!category) return null;
  const categoryFormat = category
    .split("-") // cadena en un array de palabras
    .map((palabra) => palabra.charAt(0).toUpperCase() + palabra.slice(1)) // la primera letra en mayúscula
    .join(" "); // unir las palabras con espacio
  return categoryFormat
};

const translateCategory = (category, currentLang) => {
  if (currentLang == "es") {
    if (category == "article-journal") {
      category = "artículo-revista";
      // console.log(category);
    } else if (category == "paper-conference") {
      category = "acta-congreso";
      // console.log(category);
    } else if (category == "book") {
      category = "libro";
      // console.log(category);
    } else if (category == "chapter") {
      category = "capítulo";
      // console.log(category);
    }
  } else if (currentLang == "en") {
    // transformar "artículo-revista" en article journal
  }
  return renderCategory(category);
};

const Card = React.forwardRef(
  (
    {
      variant,
      direction,
      className,
      title,
      subtitle,
      description,
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
      currentLang,
      basePath,
      researchLine,
      logo,
      projectType,
      series,
      keywords
    },
    ref
  ) => {
    const { t } = useTranslation();

    // PARA PROJECTCARD
    // Manejo de estado para ver si se ha expandido el "ver más" del texto
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleDescription = () => {
      setIsExpanded((prevState) => !prevState); // Alterna entre true y false,
      // cogiendo de base el estado. Si es false lo convierte a true, y viceversa
    };

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
        backgroundColor = 'bg-ai-600/30';  // Para la categoría 'ai'
        break;
      case 'networks':
        backgroundColor = 'bg-networks-600/50';  // Para la categoría 'ai'
        break;
      case 'e-learning':
        backgroundColor = 'bg-eLearning-600/50';  // Para la categoría 'ai'
        break;
      default:
        backgroundColor = 'bg-gray-600/50';  // Valor por defecto si no hay coincidencia
        break;
    }

    // PROJECT
    const projectCard = (

      <CustomCard className={cn(CardVariants({ direction, className })) + " hover:scale-[100%] border-transparent shadow-none border-b-gray-400 border-b-1 bg-transparent rounded-none flex-col sm:flex-row gap-3 sm:gap-6 px-0 py-6 items-start"}>
        <div className={`w-full h-fit relative sm:self-stretch sm:w-1/2 flex min-w-[184px] sm:min-h-[200px] sm:h-[237px] sm:max-h-[237px] justify-center items-center ${backgroundColor} rounded-md `}>

            <Image className="brightness-0 invert min-h-[160px] !p-8 sm:!p-12 " src={logo} fit="contain" 
              layout = {"bottom-right"}
              hasBadge = {true}
              badgeVariant = {"secondary"}           
              badgeSize = {"md"}     
              badgeContent = {t(`projects.type.${projectType}`)}
              />
 
        </div>

        <CardBody>
          <CardContent className="gap-5 mt-0.5 lg:mt-0 lg:gap-2">
            <div>
              <CardTitle level="h3"className=" w-fit hover:text-blue-400 transition-all mb-0">
                <Link href={route} rel="noopener noreferrer"
                  target="_blank" className="flex flex-row w-fit items-center gap-2">{title} <ExternalLinkIcon className="mt-1" width={24} height={24} /> </Link>
              </CardTitle>

              <div className="flex flex-col gap-1">{description && <CardDescription className={isExpanded ? "line-clamp-none" : "line-clamp-4"}>{description}</CardDescription>}  <a className="cursor-pointer font-bold hover:text-blue-300  text-white underline underline-offset-2" onClick={toggleDescription} > {isExpanded ? t(`projects.card.toggleLess`) : t(`projects.card.toggleMore`) }</a>
              </div>
            </div>
            <div className="flex flex-col items-start lg:flex-row gap-4 lg:gap-0 lg:justify-between lg:items-end">
              <div className="flex gap-2 flex-wrap">
                <div className="BADGES-RESEARCHLINE flex gap-2 ">
              {Array.isArray(researchLine) ? researchLine.map(item => {

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
                  case 'networks':
                    backgroundColorResearchLine = 'bg-networks-500';  // Para la categoría 'ai'
                    break;
                  case 'e-learning':
                    backgroundColorResearchLine = 'bg-eLearning-500';  // Para la categoría 'ai'
                    break;
                  default:
                    backgroundColorResearchLine = 'bg-gray-500';  // Valor por defecto si no hay coincidencia
                    break;
                }


                return (<Badge className={` ${backgroundColorResearchLine} text-white ${textColorResearchLine} border-none tracking-widest`} key={item} variant="default" size="lg"> {t(`projects.researchLines.${item}`)}    </Badge>)
              })
                : null}
                </div>
            
                </div>
                <Button size="default" radius="rounded_sm" variant="outline">  {t(`projects.card.button`)} </Button>
            </div>
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
          <Badge variant="outline" size="lg">
            {date}
          </Badge>
          <Badge variant="outline" size="lg">
            {category}
          </Badge>
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
        <CardHeader>
          
            {Array.isArray(series) ? series.map(researchline => {
              let backgroundColorResearchLine;
              let textColorResearchLine;
              let backgroundIcon;
              // coge solo la primera researchline para ponerle el fondo
              switch (researchline) {
                case 'data':
                  backgroundColorResearchLine = 'bg-data-500/40';  // Para la categoría 'data'
                  backgroundIcon = "assets/img/icons/data_icon.svg";
                  textColorResearchLine = "text-data-400";
                  break;
                case 'videoconference':
                  backgroundColorResearchLine = 'bg-videoconference-500';  // Para la categoría 'videoconference'
                  break;
                case 'ai':
                  backgroundColorResearchLine = 'bg-ai-700';  // Para la categoría 'ai'
                  // textColorResearchLine = "text-gray-900"
                  break;
                case 'networks':
                  backgroundColorResearchLine = 'bg-networks-500';  // Para la categoría 'ai'
                  break;
                case 'e-learning':
                  backgroundColorResearchLine = 'bg-eLearning-500';  // Para la categoría 'ai'
                  break;
                default:
                  backgroundColorResearchLine = 'bg-gray-500';  // Valor por defecto si no hay coincidencia
                  break;
              }

              return (
              <Badge className={` ${backgroundColorResearchLine} text-white ${textColorResearchLine} border-none tracking-widest`}> 
              <img className="h-4 pr-1.5" src={backgroundIcon}></img>
              {researchline} </Badge>
              )})  : null
            }
  
        
        </CardHeader>
        <CardBody>
          <CardContent className="gap-1">
            <CardTitle level="title-sm">
              {title}
            </CardTitle>
           <div className="flex"> <Text type="small" className="font-bold">   {translateCategory(category, currentLang)}</Text>
           <div className="mx-2 mb-2">·</div> <Text type="small">    {date && date[0]} </Text> </div>
            <Text className="text-gray-300/90 mb-4" type="small">{author}</Text>
     <div className="flex flex-wrap gap-1.5">
            {Array.isArray(keywords) ? keywords.map(keyword => {
              return (
              <Badge size="default" className="bg-[#000000] border-none text-gray-300"> {keyword} </Badge>
              )})  : null}
  </div>
   
          </CardContent>
        </CardBody>
        <CardFooter>
          {doi ? (
            <Button asChild variant="outline" size="sm" radius="rounded_sm">
              <Link rel="noopener noreferrer" target="_blank" href={doi}>
                {t("publications.action-button")}

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
        className="w-64 bg-primary-300/60 h-86 p-4"
      >
        {(img || svg) && (
          <Image
            className={"h-[220px] rounded-md"}
            src={img || "placeholder.jpg"} // La imagen por defecto será una cadena vacía si no hay src
            alt={title || "Image"} // Usa el título como alt si existe
            fit="cover" // Ajustamos el contenido al contenedor
            hasBadge={position ? true : false} // Por defecto, no tiene badge
            badgeContent={position}
          />
        )}
        {(name || description || email) && (
          <CardContent className="items-center mb-auto">
            <CardTitle level="h5" className={"text-inherit text-center"}>
              {name}
            </CardTitle>
            {role && <CardDescription type="short-p">{role}</CardDescription>}
            {email && (
              <CardDescription
                className={"font-semibold break-words text-wrap"}
              >
                {email}
              </CardDescription>
            )}
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
      <div>
        <div
          className={`card-researchline`}
        >
          <ResearchlineIllust researchLine={researchLine} />
          <Heading level="h4" className="pt-4 font-normal "> {title} </Heading>
          <Text className="font-light">
            {description}
          </Text>
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
