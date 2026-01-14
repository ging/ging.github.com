"use client";

import clsx from "clsx";
import * as React from "react";
import Link from "next/link";

// Data
import { useTranslation } from "react-i18next";

// Components
import { Mybadge, badgeVariants } from "../ui/mybadge";
import Text from "../ui/Text";
import { Button, ButtonVariants } from "../ui/button";
import Image from "../ui/image";
import {
  CustomCard,
  CardBody,
  CardContent,
  CardTitle,
  CardFooter,
  CardDescription
} from "@/components/ui/customCard";
import Heading from "../ui/Heading";

// Icons
import { ArrowRightIcon, CalendarIcon, ClockIcon, SewingPinFilledIcon } from "@radix-ui/react-icons";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import { DownloadIcon } from "@radix-ui/react-icons";

const deleteSpaces = (string) => {
  let cleanStr = "";
  for (const char of [...string]) {
    if (char != " ") {
      cleanStr += char;
    }
  }
  return cleanStr;
};

const Card = React.forwardRef((

  {
    className,
    title_en,
    title_es,
    description_en,
    description_es,
    date,
    time,
    location,
    category,
    route,
    keywords_en,
    keywords_es,
    img,
    type,
    agenda,
    link,
    article,
    eventInscription,
    document
  },
  key
) => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const keywords = currentLang === "es" ? keywords_es : keywords_en;

  const compactCard = (
    <div id={title_en}>
      <CustomCard
        className=
        " p-0 whitespace-nowrap rounded-md font-body text-sm text-text bg-background-300 border-none shadow-md hover:scale-[101%] transition-all overflow-hidden"

      >
        <Image
          className="min-w-24 max-h-32 bg-blue-400 p-0 rounded-md"
          src={img}
          fit="cover"
          alt={currentLang === "es"
            ? title_es
            : title_en}
        ></Image>

        <CardBody className="px-4 py-0">
          <CardContent className="gap-1">
            <Link rel="noopener noreferrer" target="_blank" href={route}>
              <CardTitle level="h5" className="text-pretty hover:underline hover:text-primary-200 underline-offset-4">
                {currentLang === "es"
                  ? title_es
                  : title_en}
              </CardTitle>
            </Link>
            <div className="flex">
              <Text type="small" className="font-bold text-sm ">
                {t(`newsEvents.newsEventsCard.category.${category}`)}
              </Text>
              <span className="mx-2 mb-2">·</span>
              <Text type="small">{date && date}</Text>
            </div>
            <Text type="small" className="mb-2 line-clamp-3 text-white/70" >
              {currentLang === "es"
                ? description_es
                : description_en}
            </Text>
            <div className="flex flex-wrap gap-1.5">
              {Array.isArray(keywords)
                ? keywords.map((keyword, index) => {
                  return (
                    <Mybadge
                      key={index}
                      size="sm"
                      className="bg-[#000000] border-none text-gray-300 capitalize"
                    >
                      {keyword}
                    </Mybadge>
                  );
                })
                : null}
            </div>
          </CardContent>
        </CardBody>
        <CardFooter className=" p-4 pt-0">
          {route ? (
            <Button asChild variant="link" size="sm" radius="rounded_sm">
              <Link rel="noopener noreferrer" target="_blank" href={route}>
                {t("newsEvents.newsEventsCard.readMore")}

                <ArrowRightIcon />
              </Link>
            </Button>
          ) : null}
        </CardFooter>
        {/*
          {console.log(date && date[0])} */}
      </CustomCard>
    </div>
  );

  const expandedCard = <div id={title_en}>
    <CustomCard className="py-6 flex flex-col items-start sm:flex-row gap-3 sm:gap-6 bg-transparent border-transparent shadow-none border-b-gray-500 border-b first:border-t first:border-t-gray-500 last:border-b-0 rounded-none ">
      <div
        className={`w-full min-w-[184px] sm:w-1/2 bg-cover sm:bg-center rounded-md`}
      >
        <Image
          className="rounded-md"
          src={img}
          fit="cover"
          layout="bottom-right"
          badgeVariant="secondary"
          badgeSize="md"

        />
        <div className="my-2">
          <Text type="small" className="mt-2 text-white/70">
            {t("newsEvents.newsEventsCard.archivedIn")}</Text>
          <Text type="small" className="mb-2 ml-2 font-bold text-sm ">
            {t(`newsEvents.newsEventsCard.category.${category}`)}s
          </Text>
        </div>
        {keywords &&
          <div className="flex flex-wrap gap-2">
            {keywords.map((keyword, index) => {
              return (
                <Mybadge
                  key={index}
                  size="lg"
                  variant="default"
                  className="bg-[#000000] border-none text-gray-300 capitalize"
                >
                  {keyword}
                </Mybadge>
              );
            })}

          </div>}
      </div>
      <CardBody>
        <CardContent className="gap-5 my-0.5 lg:mt-0 lg:gap-[22px]">

          <div className="flex flex-col gap-2">
            <Link
              href={route}
              rel="noopener noreferrer"
              target="_blank"
              className="flex flex-row w-full gap-4 items-start sm:items-center transition-all hover:!text-blue-400"
            >
              <CardTitle
                level="h4"
                className="hover:!text-blue-400 transition-all !mb-0"
              >
                {currentLang === "es"
                  ? title_es
                  : title_en}
              </CardTitle>

              <ExternalLinkIcon
                className="mt-2 sm:mt-1 flex-shrink-0"
                width={18}
                height={18}
              />
            </Link>
            {(time || date || location) &&
              <div className="flex flex-wrap gap-2">

                {time && <Mybadge variant="default" size="sm" className="flex gap-1.5">
                  <ClockIcon />
                  <Text type="p" className="font-bold text-sm flex flex-row gap-2">
                    {time}
                  </Text></Mybadge>}
                {date && <Mybadge variant="default" size="sm" className="flex gap-1.5">
                  <CalendarIcon />
                  <Text type="p" className="font-bold text-sm ">
                    {date}
                  </Text></Mybadge>}
                {location && <Mybadge variant="default" size="sm" className="flex gap-1.5">
                  <SewingPinFilledIcon />
                  <Text type="p" className="font-bold text-sm ">
                    {location}
                  </Text></Mybadge>}
              </div>}
          </div>
          <div className="gap-1 flex flex-col">
            {currentLang === "es" ?
              // separar texto en <p> por saltos de linea dobles. Sino el JSON pone 
              // todo el texto junto
              description_es.split('\n\n').map((line, index) =>
                <Text type="p" className="mb-2" id="description" key={index}>{line}</Text>
              )
              : description_en.split('\n\n').map((line, index) =>
                <Text type="p" className="mb-2" id="description" key={index}>{line}</Text>
              )}
          </div>


          {agenda &&
            <div className="bg-background-300 p-4 rounded-md w-full">
              <Heading level="h5" className="mb-3">Agenda</Heading>
              {Object.values(agenda).map((activity, index) => {
                return (
                  <div className="grid grid-cols-[3rem_1fr] gap-x-3 mt-3" key={index}>
                    <Text type="p" className="mb-1 font-bold ">
                      {activity.time}
                    </Text>
                    <Text type="p" className="mb-1 text-white/70" >
                      {activity.description}
                    </Text>
                  </div>)
              }
              )}
            </div>
          }
          <div className="flex gap-3 ">
            {link && <Link href={link?.url} target="_blank" rel="noopener noreferrer">
              <Button variant="outline">{t(`newsEvents.newsEventsCard.buttons.${link?.text}`)}</Button>
            </Link>
            }
            {eventInscription && <Link href={eventInscription?.url} target="_blank" rel="noopener noreferrer">
              <Button variant="outline">{t(`newsEvents.newsEventsCard.buttons.${eventInscription?.text}`)}
                <ArrowTopRightIcon />
              </Button>

            </Link>
            }
            {document && <Link href={document?.url} target="_blank" rel="noopener noreferrer">
              <Button variant="secondary">{t(`newsEvents.newsEventsCard.buttons.${document?.text}`)}

                <DownloadIcon />
              </Button>
            </Link>}
              {article && <Link href={article?.url} target="_blank" rel="noopener noreferrer">
              <Button variant="outline">{t(`newsEvents.newsEventsCard.buttons.${article?.text}`)}
                <ArrowTopRightIcon />
              </Button>
            </Link>
            }
            
          </div>

        </CardContent>
        <CardFooter className="flex flex-wrap gap-2 justify-start">

        </CardFooter>
      </CardBody>
    </CustomCard>
  </div>;
  return type === "compact" ? compactCard : expandedCard;
}
);

Card.displayName = "NewsEventsCard";

export default Card;
