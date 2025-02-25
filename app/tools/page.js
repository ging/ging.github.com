"use client";

import ToolCard from "@/components/cards/ToolCard";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { tools } from "@/constants/tools";
import { useTranslation } from "react-i18next";
import FaceIcon from "@mui/icons-material/Face";
import Text from "@/components/ui/text";
import Heading from "@/components/ui/Heading";

import ArrowOutwardIcon from "@mui/icons-material/ArrowOutwardRounded";
import { GitHub } from "@mui/icons-material";
import Image from "@/components/ui/image";
import { Divider, DividerVariants } from "@/components/ui/divider";
import { Mybadge } from "@/components/ui/mybadge";
import { Button } from "@/components/ui/button";

export default function Tools(props) {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  // const [tools, setTools] = useState([]);

  // Update tools when language changes
  // useEffect(() => {
  //   const translatedTools = tools.map(
  //     ({ img, route, title, translationKey, github, key, description }) => ({
  //       title,
  //       img,
  //       route,
  //       github,
  //       key,
  //       description: t(translationKey),
  //     })
  //   );
  //   setTools(translatedTools);
  // }, [i18n.language, t]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className={"tools page_" + currentLang}>
      {/* <Header route="/tools" /> */}
      <div className="standard_margin ">
        <Heading level="h2">{t("tools.title")}</Heading>
        <Text type="p" className="pb-8 xs:p-6 md:p-0">
          {t("tools.description")}
        </Text>
      </div>
      <section className="standard_margin grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {tools.map(({ title, description_en, description_es, route, img, github }, key) => {
          return (
            <ToolCard
            key={key}
            title={title}
            img={img}
            route={route}
            description_en={description_en}
            description_es={description_es}
            github={github}
          ></ToolCard>
          );
        })}
      </section>
      <Divider size="xl" />
    </main>
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
