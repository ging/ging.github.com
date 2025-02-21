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
import { Mybadge, badgeVariants } from "../ui/mybadge";
import Text from "../ui/text";
import { Button, ButtonVariants } from "../ui/button";
import Image from "../ui/image";
import {
  CustomCard,
  CardBody,
  CardContent,
  CardTitle,
  CardFooter,
  CardHeader,
} from "@/components/ui/customCard";

// Icons
import { ArrowRightIcon } from "@radix-ui/react-icons";

const deleteSpaces = (string) => {
  let cleanStr = "";
  for (const char of [...string]) {
    if (char != " ") {
      cleanStr += char;
    }
  }
  return cleanStr;
};

const Card = React.forwardRef(
  (
    {
      direction,
      className,
      title,
      description_en,
      description_es,
      date,
      category,
      author,
      doi,
      researchLine,
      keywords,
    },
    ref
  ) => {
    const { t, i18n } = useTranslation();
    const currentLang = i18n.language;

    //elegir description o description_es según el currentLang
    let description_translation = description_en;
    if (currentLang == "es" && description_es) {
      description_translation = description_es;
    }

    // fondo researchline cards - project cards
    let backgroundColor;

    // coge solo la primera researchline para ponerle el fondo
    switch (researchLine && researchLine[0]) {
      case "data":
        backgroundColor = "bg-data_bg"; // Para la categoría 'data'
        break;
      case "videoconference":
        backgroundColor = "bg-videoconference_bg"; // Para la categoría 'videoconference'
        break;
      case "ai":
        backgroundColor = "bg-ai_bg"; // Para la categoría 'ai'
        break;
      case "computing":
        backgroundColor = "bg-networks_bg"; // Para la categoría 'ai'
        break;
      case "e-learning":
        backgroundColor = "bg-eLearning_bg"; // Para la categoría 'ai'
        break;
      default:
        backgroundColor = "bg-gray-600/50"; // Valor por defecto si no hay coincidencia
        break;
    }

    //si tiene más de una researchline le ponemos all al link a las publicaciones
    let pubResearchLine = "all";
    if (researchLine && researchLine.length == 1) {
      pubResearchLine = researchLine[0];
    }

    return (
      // const publicationCard = (
      <CustomCard
        className={cn(
          " p-4 sm:py-4 whitespace-nowrap rounded-md font-body text-sm text-text bg-background-300 border-none shadow-md hover:scale-[101%] transition-all overflow-hidden"
        )}
      >
        <CardHeader className="flex flex-wrap">
          {Array.isArray(researchLine)
            ? researchLine.map((researchline, index) => {
                let backgroundColorResearchLine;
                let textColorResearchLine;
                let backgroundIcon;
                // coge solo la primera researchline para ponerle el fondo
                switch (deleteSpaces(researchline)) {
                  case "data":
                    backgroundColorResearchLine = "bg-data-500/40"; // Para la categoría 'data'
                    backgroundIcon = "assets/img/icons/data_icon.svg";
                    textColorResearchLine = "text-data-300";
                    break;
                  case "videoconference":
                    backgroundColorResearchLine = "bg-videoconference-600/60"; // Para la categoría 'videoconference'
                    backgroundIcon =
                      "assets/img/icons/videoconference_icon.svg";
                    textColorResearchLine = "text-videoconference-200";
                    break;
                  case "ai":
                    backgroundColorResearchLine = "bg-ai-700/40"; // Para la categoría 'ai'
                    backgroundIcon = "assets/img/icons/ai_icon.svg";
                    textColorResearchLine = "text-ai-400";
                    break;
                  case "computing":
                    backgroundColorResearchLine = "bg-networks-600/60";
                    backgroundIcon = "assets/img/icons/networks_icon.svg";
                    textColorResearchLine = "text-networks-200"; // Para la categoría 'ai'
                    break;
                  case "e-learning":
                    backgroundColorResearchLine = "bg-eLearning-600/60";
                    backgroundIcon = "assets/img/icons/e-learning_icon.svg";
                    textColorResearchLine = "text-eLearning-200"; // Para la categoría 'ai'
                    break;
                  default:
                    backgroundColorResearchLine = "bg-gray-500"; // Valor por defecto si no hay coincidencia
                    break;
                }

                return (
                  <Mybadge
                    key={index}
                    className={`pt-1.5 ${backgroundColorResearchLine} text-white ${textColorResearchLine} border-none tracking-widest`}
                  >
                    <Image
                      className={"h-[16px] pr-2 mb-[2px]"}
                      src={backgroundIcon}
                      alt={"Research line icon"}
                      fit="contain"
                    />
                    <div className="pb-0.5">
                      {t(
                        `projects.researchLines.${deleteSpaces(researchline)}`
                      )}{" "}
                    </div>{" "}
                  </Mybadge>
                );
              })
            : null}
        </CardHeader>
        <CardBody>
          <CardContent className="gap-1">
            <CardTitle level="title-sm">{title}</CardTitle>
            <div className="flex">
              <Text type="small" className="font-bold">
                {t(`research.filter.${category}`)}
              </Text>
              <div className="mx-2 mb-2">·</div>
              <Text type="small">{date && date[0]}</Text>
            </div>
            <Text className="text-gray-300/90 mb-4" type="small">
              {author}
            </Text>
            <div className="flex flex-wrap gap-1.5">
              {Array.isArray(keywords)
                ? keywords.map((keyword, index) => {
                    return (
                      <Mybadge
                        key={index}
                        size="default"
                        className="bg-[#000000] border-none text-gray-300"
                      >
                        {" "}
                        {keyword}{" "}
                      </Mybadge>
                    );
                  })
                : null}
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
  }
);

Card.displayName = "PublicationCard";

export default Card;
