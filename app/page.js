"use client";
import * as React from "react";

import { useEffect, useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { useTranslation } from "react-i18next";

import { Button, ButtonVariants } from "@/components/ui/button";
import Heading from "@/components/ui/Heading";
import { Divider, DividerVariants } from "@/components/ui/divider";
import Text from "@/components/ui/text";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "@/components/ui/image";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import CategoryIcon from "@mui/icons-material/Category";
import HubIcon from "@mui/icons-material/Hub";
import { Card, CardVariants } from "@/components/core/Cards";

import {
  CustomCard,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/customCard";

//Banner
import {
  Banner,
  BannerTitle,
  BannerDescription,
  BannerButton,
  BannerContent,
  BannerImg,
  BannerLogo,
} from "@/components/core/Banner";
import PruebaRectangulos from "@/components/pruebas/pruebaRectangulos";

// UI
export default function Page() {
  //const [projects, setProjects] = useState(myprojectCards);

  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  // <p className="basis-3/4">{t("project.Intro.title")}</p>

  return (
    <main>
      <Banner>
        {/* <PruebaRectangulos></PruebaRectangulos> */}

        <BannerImg></BannerImg>

        <BannerContent className="absolute ">
          <BannerLogo></BannerLogo>
          <BannerTitle className={"text-white "}>
            {t("front.title")}
          </BannerTitle>
          <BannerDescription className="h-full text-balance flex flex-col gap-2 font-normal">
            {t("front.description")}
          </BannerDescription>
          <Divider />
          <Link
            href="#researchlines"
            // scroll={false}
            className={ButtonVariants({
              variant: "outline",
              size: "lg",
              radius: "rounded_sm",
            })}
          >
            {t("front.action-button")}{" "}
            <ArrowForwardIcon className="mt-0.5" sx={{ fontSize: 22 }} />
          </Link>
        </BannerContent>
      </Banner>

      <section className="padding_group_description bg-background-200">
        <Divider size="lg" className="hidden md:flex"></Divider>
        <Divider size="sm"></Divider>

        <Heading level="h3">{t("front.section1Title")}</Heading>
        <Heading level="subtitle"> {t("front.section1Description")}</Heading>

        <Divider size="md"></Divider>
        <Divider size="xxl" className="hidden md:flex"></Divider>
        <div id="researchlines"></div>
      </section>

      <section
        className="margin_researchlines section-researchlines"
        id="researchlines"
      >
        <Divider size="md"></Divider>
        <Heading level="h3" className="mb-8">
          {t("front.ResearchLines.sectionTitle")}
        </Heading>
        {/* Cards con iconos */}

        <section className="flex flex-col gap-4 mx-auto pb-12 justify-center items-center sm:items-start sm:grid sm:grid-cols-2 sm:place-items-center md:grid-cols-3 auto-rows-min xl:grid-cols-5 ">
          <Card
            cardType={"researchline"}
            researchLine="videoconference"
            title={t("front.ResearchLines.ResearchLine4.ResearchLineTitle")}
            description={t(
              "front.ResearchLines.ResearchLine4.ResearchLineBody"
            )}
          />

          <Card
            cardType={"researchline"}
            researchLine="data"
            title={t("front.ResearchLines.ResearchLine1.ResearchLineTitle")}
            description={t(
              "front.ResearchLines.ResearchLine1.ResearchLineBody"
            )}
          />
          <Card
            cardType={"researchline"}
            researchLine="ai"
            title={t("front.ResearchLines.ResearchLine3.ResearchLineTitle")}
            description={t(
              "front.ResearchLines.ResearchLine3.ResearchLineBody"
            )}
          />
          <Card
            cardType={"researchline"}
            researchLine="e-learning"
            title={t("front.ResearchLines.ResearchLine2.ResearchLineTitle")}
            description={t(
              "front.ResearchLines.ResearchLine2.ResearchLineBody"
            )}
          />
          <Card
            cardType={"researchline"}
            researchLine="computing"
            title={t("front.ResearchLines.ResearchLine5.ResearchLineTitle")}
            description={t(
              "front.ResearchLines.ResearchLine5.ResearchLineBody"
            )}
          />
        </section>
        <Divider size="md"></Divider>
      </section>
    </main>
  );
}
