"use client";
import * as React from "react";

import { useEffect, useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { useTranslation } from "react-i18next";

import { Button, ButtonVariants } from "@/components/ui/button";
import Heading from "@/components/ui/Heading";
import { Divider, DividerVariants } from "@/components/ui/divider";
import Text from "@/components/ui/Text";
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
        <Image
          className={"hidden md:flex"}
          src="ging_logo.png"
          alt="Descripción de la imagen"
          fit="cover"
          hasBadge={false}
        />

        <BannerContent className={"w-full"}>
          <BannerTitle className={"text-white "}>{t("front.title")}</BannerTitle>
          <BannerDescription className="h-full text-balance flex flex-col gap-2 font-normal">
            {t("front.description")}
        
          </BannerDescription>
          <Divider />
          <Button
            href="#"
            className={ButtonVariants({
              variant: "default",
              size: "lg",
              radius: "rounded_sm",
            })}
          >
            {t("front.action-button")} <ArrowForwardIcon className=" h-4 w-4" />
          </Button>
        </BannerContent>
      </Banner>
      {/* <BannerPum></BannerPum> */}
    
      <section className="standard_padding">
        
      <Heading level="h3">{t("front.section1Title")}</Heading>
        <Text type="p"> {t("front.section1Description")}</Text>

        
      </section>
      <section className="margin_researchlines section-researchlines ">
      <Heading level="h3" className="mb-8">
          {t("front.ResearchLines.sectionTitle")}
          
        </Heading>
        {/* Cards con iconos */}
        
        <div className="flex flex-col gap-4 pb-12 sm:grid sm:grid-cols-2 md:grid-cols-3  auto-rows-min lg:grid-cols-5 ">
      
          <Card 
          cardType={"researchline"} 
          researchLine="videoconference"
          title={t("front.ResearchLines.ResearchLine4.ResearchLineTitle")}
          description={t("front.ResearchLines.ResearchLine4.ResearchLineBody")}
          />
      
          <Card 
          cardType={"researchline"} 
          researchLine="data"
          title={t("front.ResearchLines.ResearchLine1.ResearchLineTitle")}
          description={t("front.ResearchLines.ResearchLine1.ResearchLineBody")}
          />
            <Card 
          cardType={"researchline"} 
          researchLine="ai"
          title={t("front.ResearchLines.ResearchLine3.ResearchLineTitle")}
          description={t("front.ResearchLines.ResearchLine3.ResearchLineBody")}
          />
                 <Card 
          cardType={"researchline"} 
          researchLine="e-learning"
          title={t("front.ResearchLines.ResearchLine2.ResearchLineTitle")}
          description={t("front.ResearchLines.ResearchLine2.ResearchLineBody")}
          />
        <Card 
          cardType={"researchline"} 
          researchLine="networks"
          title={t("front.ResearchLines.ResearchLine5.ResearchLineTitle")}
          description={t("front.ResearchLines.ResearchLine5.ResearchLineBody")}
          />
       
          
        </div>
        </section>
       

    </main>
  );
}
