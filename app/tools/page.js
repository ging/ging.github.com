"use client";

import Header from "@/components/core/Header";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { mytools } from "@/constants/tools";
import { useTranslation } from "react-i18next";
import FaceIcon from "@mui/icons-material/Face";
import Text from "@/components/ui/text";
import Heading from "@/components/ui/Heading";
import { Mybadge, badgeVariants } from "@/components/ui/mybadge";
import { Button, buttonVariants } from "@/components/ui/button";

import ArrowOutwardIcon from "@mui/icons-material/ArrowOutwardRounded";
import { GitHub } from "@mui/icons-material";
import Image from "@/components/ui/image";
import { Divider, DividerVariants } from "@/components/ui/divider";

export default function Tools(props) {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const [tools, setTools] = useState([]);

  // Update tools when language changes
  useEffect(() => {
    const translatedTools = mytools.map(
      ({
        img,
        route,
        title,
        translationKey,
        github,
        gradient,
        key,
        description,
      }) => ({
        title,
        img,
        route,
        github,
        gradient,
        key,
        description: t(translationKey),
      })
    );
    setTools(translatedTools);
  }, [i18n.language, t]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={"tools page_" + currentLang}>
      {/* <Header route="/tools" /> */}
      <div className="standard_margin ">
        <Heading level="h2">{t("tools.title")}</Heading>
        <Text type="p" className="pb-8 xs:p-6 md:p-0">{t("tools.description")}</Text>
      </div>
      <main className="standard_margin">
        <div className="grid sm:gap-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
          {tools.map(({ title, description, route, img, github }) => {
            return (
              <div className="tool" key={title}>
                <div className="relative card-researchline rounded-md  flex justify-center items-center aspect-square bg-blue-500 max-w-[300px]">
                  <Image className={'p-6'} src={img} alt="herramientas / tools" fit="contain"></Image>
                  <Link
                    className="icon_link_publication"
                    target="_blank"
                    href={route}
                  >
                    <ArrowOutwardIcon className=" text-white text-5xl absolute right-2 hover:right-0 bottom-1 transition-all hover:bottom-2 font-bold opacity-75 hover:opacity-100" />
                    <Mybadge
                      variant="secondary"
                      size="sm"
                      className="link_publication absolute right-2 bottom-14"
                    >
                      {" "}
                      {t("tools.toolCards.button")}{" "}
                    </Mybadge>
                  </Link>
                </div>

                <div className="tool_content">
                  <h6 className="pt-4 font-normal text-2xl text-white py-3">
                    {" "}
                    {title}{" "}
                  </h6>
                  <div className="tool_description ">
                    <Text className="font-light">{description}</Text>
                  </div>
                  <div className="tool_button_container mt-4 flex flex-wrap justify-between gap-2">
                    <Button variant="outline" size="sm" className="">
                      <Link target="_blank"  href={route}> {t("tools.toolCards.button")}</Link>
                    </Button>
                    <Button variant="ghost" size="sm" className="gap-1">
                      <GitHub className="h-5" />
                      <Link target="_blank" href={github}>Github</Link>
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
      <Divider size="xl"/>
    </div>
  );
}

const CreateLink = (props) => {
  return props.route.match(/^http/) ? (
    <a target="_blank" href={props.route} rel="noopener noreferrer">
      {props.children}
    </a>
  ) : (
    <Link to={props.route}>{props.children}</Link>
  );
};
