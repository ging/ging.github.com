"use client";
import * as React from "react";

import Link from "next/link";
import { useTranslation } from "react-i18next";

import { Button, ButtonVariants } from "@/components/ui/button";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import { Divider, DividerVariants } from "@/components/ui/divider";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import EventIcon from '@mui/icons-material/Event';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PlaceIcon from '@mui/icons-material/Place';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { FileDownloadOutlined } from "@mui/icons-material";

import ResearchLineCard from "@/components/cards/ResearchLineCard";
import Text from "@/components/ui/Text";
import Image from "@/components/ui/image";

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

<<<<<<< HEAD
      <section className="padding_group_description bg-background-200" >
        <Divider size="xl" className="hidden md:flex"  id="section2"></Divider>
=======
      <section className="padding_group_description" style={{backgroundImage: "linear-gradient(to right, #948CFFDD, #2c2e33)" }}>
        <Divider size="lg" className="hidden md:flex"></Divider>
        <Divider size="sm"></Divider>

        <Heading level="h3">40 Aniversario de internet en España</Heading>
        <div className="flex gap-4">
          <Heading level="subtitle" className="flex items-center gap-1 line"><AccessTimeIcon className="mt-0.5" sx={{ fontSize: 22 }} /> 12:30</Heading>
          <Heading level="subtitle" className="flex items-center gap-1 line"><EventIcon className="mt-0.5" sx={{ fontSize: 22 }} /> 2 de diciembre</Heading>
          <Heading level="subtitle" className="flex items-center gap-1 line"><PlaceIcon className="mt-0.5" sx={{ fontSize: 22 }} />Salón de actos del Edificio C de la ETSIT</Heading>
        </div>
        
        
        <Text
          type="p"
          className="mb-1"
        >La primera conexión a internet en España fue realizada en 1985 desde la Escuela Técnica Superior de Ingenieros de Telecomunicación (ETSIT) de la Universidad Politécnica de Madrid (UPM). El envío de un email de prueba por una red TCP/IP conectada al servicio de correo electrónico de internet a través de EUnet, cuya transcendencia histórica ignoraban sus propios protagonistas, marcó el comienzo de la expansión en nuestro país de la que acabaría siendo en poco tiempo la red de redes. El acto para conmemorar este hito incluirá la participación por videoconferencia de los estadounidenses Vinton Cerf y Robert Kahn, considerados los padres de internet.</Text>
        <div className="flex gap-4 mt-8">
          <a href="https://eventos.upm.es/143851/detail/40o-aniversario-de-internet-en-espana.html" target="_blank">
                <Button variant="outline" className="mb-8 gap-1 pb-2.5 flex items-center">
                  Inscripciones
                  <ArrowForwardIcon className="h-6"/>
                </Button>
              </a>
          <a href="/assets/documents/Articulo_FHT.pdf" download="Articulo_FHT.pdf">
                <Button variant="outline" className="mb-8 gap-1 pb-2.5 flex items-center">
                  Descargar artículo
                  <FileDownloadOutlined className="h-6"/>
                </Button>
              </a>
        </div>
        
        {/* <Divider size="md"></Divider> */}
        <Divider size="xxl" className="hidden md:flex"></Divider>
      </section>

      <section className="padding_group_description bg-background-200">
        <Divider size="lg" className="hidden md:flex"></Divider>
        <Divider size="sm"></Divider>
>>>>>>> bcf65e195e638c1f613124bf434852606fdbd771

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
