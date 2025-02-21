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
import {
  CustomCard,
  CardBody,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/customCard";
import { ExternalLinkIcon } from "@radix-ui/react-icons";

const Card = React.forwardRef(
  (
    {
      title,
      description_en,
      description_es,
      img,
      route,
      researchLine,
      logo,
      projectType = "european-project",
    },
    ref
  ) => {
    const { t, i18n } = useTranslation();
    const currentLang = i18n.language;
    const descriptionRef = useRef(null);

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
      <CustomCard className="py-6 flex flex-col items-start sm:flex-row gap-3 sm:gap-6 bg-transparent border-transparent shadow-none border-b-gray-400 border-b-1 rounded-none ">
        <div
          className={`w-full min-w-[184px] sm:w-1/2 h-[237px] bg-cover sm:bg-center ${backgroundColor} rounded-md`}
        >
          <Image
            className="brightness-0 invert p-8"
            src={logo}
            fit="contain"
            layout="bottom-right"
            badgeVariant="secondary"
            badgeSize="md"
            badgeContent={t(`projects.type.${projectType}`)}
          />
        </div>

        <CardBody>
          <CardContent className="gap-5 my-0.5 lg:mt-0 lg:gap-[22px]">
            <div>
              <CardTitle
                level="h3"
                className="w-fit hover:text-blue-400 transition-all mb-0"
              >
                {title && (
                  <Link
                    href={route}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="flex flex-row w-fit gap-2 items-center"
                  >
                    {title}{" "}
                    <ExternalLinkIcon
                      className="mt-1 flex-shrink-0"
                      width={24}
                      height={24}
                    />
                  </Link>
                )}
              </CardTitle>

              {description_translation && (
                <CardDescription lines={4}>
                  {description_translation}
                </CardDescription>
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
                    <Mybadge
                      key={index}
                      className={`${
                        colors[item] || "bg-gray-500"
                      } text-white border-none tracking-widest`}
                      variant="default"
                      size="lg"
                    >
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
