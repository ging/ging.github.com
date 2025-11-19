"use client";
import * as React from "react";

import Link from "next/link";
import { useTranslation } from "react-i18next";

import { Button, ButtonVariants } from "@/components/ui/button";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import { Divider, DividerVariants } from "@/components/ui/divider";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ResearchLineCard from "@/components/cards/ResearchLineCard";

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
     
        <Link href="#section2" scroll={true} class="arrowScroll arrows" >  </Link>
  
      <Banner>
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

      <section className="padding_group_description bg-background-200" >
        <Divider size="xl" className="hidden md:flex"  id="section2"></Divider>

        <Heading level="h3">{t("front.section1Title")}</Heading>
        <Heading level="subtitle"> {t("front.section1Description")}</Heading>

        <Divider size="md" className="hidden md:flex" ></Divider>
         <Divider size="xs" className="flex md:hidden"></Divider>
        <div className="statisticsContainer">
          <div className="statisticItemContainer"> 
            <h1 className="numbersFront"> +400</h1> 
            <p className="unitFront">{t("front.statistics.papers")}</p>
          </div>
           <div className="statisticItemContainer"> 
            <h1 className="numbersFront">+6K</h1> 
            <p className="unitFront">{t("front.statistics.citations")}</p>
          </div>
           <div className="statisticItemContainer"> 
            <h1 className="numbersFront">+150</h1> 
            <p className="unitFront">{t("front.statistics.projects")}</p>
          </div>
           <div className="statisticItemContainer"> 
            <h1 className="numbersFront">45</h1> 
            <p className="unitFront">H-Index</p>
          </div>
           
        </div>
        <Divider size="xxl" className="hidden md:flex"></Divider>
        <div id="researchlines"></div>
      </section>

      <section
        className="standard_margin-s section-researchlines"
        id="researchlines"
      >
        <Divider size="md"></Divider>
        <Heading level="h3" className="mb-8 text-center md:text-left">
          {t("front.ResearchLines.sectionTitle")}
        </Heading>
        {/* Cards con iconos */}

        <section className="pb-12 flex flex-col justify-center justify-items-center gap-4 mx-auto md:mx-0 place-items-center sm:grid sm:grid-cols-2 sm:items-start md:grid-cols-3 md:w-fit auto-rows-min xl:grid-cols-5">
          <ResearchLineCard
            researchLine="videoconference"
            title={t("front.ResearchLines.ResearchLine4.ResearchLineTitle")}
            description={t(
              "front.ResearchLines.ResearchLine4.ResearchLineBody"
            )}
          />

          <ResearchLineCard
            researchLine="data"
            title={t("front.ResearchLines.ResearchLine1.ResearchLineTitle")}
            description={t(
              "front.ResearchLines.ResearchLine1.ResearchLineBody"
            )}
          />
          <ResearchLineCard
            researchLine="ai"
            title={t("front.ResearchLines.ResearchLine3.ResearchLineTitle")}
            description={t(
              "front.ResearchLines.ResearchLine3.ResearchLineBody"
            )}
          />
          <ResearchLineCard
            researchLine="e-learning"
            title={t("front.ResearchLines.ResearchLine2.ResearchLineTitle")}
            description={t(
              "front.ResearchLines.ResearchLine2.ResearchLineBody"
            )}
          />
          <ResearchLineCard
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
