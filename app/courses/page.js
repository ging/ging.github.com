"use client";

import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { courses } from "@/constants/courses";
import { useTranslation } from "react-i18next";
import Text from "@/components/ui/text";
import Heading from "@/components/ui/Heading";

import ArrowOutwardIcon from "@mui/icons-material/ArrowOutwardRounded";
import { GitHub } from "@mui/icons-material";
import Image from "@/components/ui/image";
import { Divider, DividerVariants } from "@/components/ui/divider";
import CourseCard from "@/components/cards/CourseCard";

export default function Tools(props) {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className={"standard_margin courses page_" + currentLang}>
      {/* <Header route="/courses" /> */}
      <div className="">
        <Heading level="h2">{t("courses.title")}</Heading>
        <Text type="p" className="pb-8 xs:p-6 md:p-0">
          {t("courses.description")}
        </Text>
      </div>
      <Divider size="md"/>
      <section className="grid gap-8 md:grid-cols-2">
        {courses.map(({title, title_es, subtitle, description_en, description_es, date, edition, route}, key) => {
          return (
            <CourseCard
              // key={key}
              title = {title} 
              title_es = {title_es} 
              subtitle = {subtitle}
              description_en = {description_en}
              description_es = {description_es}
              date = {date}
              category = {edition}
              route = {route}
          ></CourseCard>
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
