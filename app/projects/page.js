"use client";

import { useTranslation } from "react-i18next";
import TabsResearchLineFilter from "@/components/filters/TabsResearchLineFilter";
import { projects } from "@/constants/projects";
import { Card } from "@/components/core/Cards";
import { researchlines } from "@/constants/researchlines";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text"
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function Projects() {

  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  const router = useRouter(); // Hook para manipular la URL
  let searchParams = useSearchParams(); 

  const [researchLine, setResearchLine] = useState("all");

  const pathname = "/projects";

  // 2. Agregar objeto "all", que sería "todas las líneas de inv."
  let researchLines = ["all", ...researchlines];

  //actualizar la URL cuando cambia algo en el estado, usamos router.push
  useEffect(() => {
    let query = {};
    if (researchLine) query.researchline = researchLine;
    router.push(`${pathname}/?${new URLSearchParams(query).toString()}`, undefined);
  }, [researchLine]);


  // función para obtener todos los parámetros de la URL
  useEffect(() => {
    let researchLineURL = searchParams.get('researchline');    
    console.log("researchLineURL: " + researchLineURL);
    setResearchLine(researchLineURL ? researchLineURL : "all");
  }, []);
  
  // Filtrar los proyectos por línea de investigación
  const filteredItems = projects.filter(
    (item) => researchLine === "all" || item.researchLine.includes(researchLine)
  );

  return (
    <div >
      <div className="standard_margin" id="banner-publications">
      <Heading level="h2">{t("projects.title")}</Heading>
        <Text type="p">
          {t("projects.description")}
        </Text>
        </div>
    <div>
    <p className="text-red-500 standard_margin">filtro de tipos de proyecto</p>
      <div className="flex justify-center">
      <TabsResearchLineFilter researchLines={researchLines} changeResearhLine={setResearchLine} researchLine={researchLine} />
      </div>
      <div className="project_cards standard_margin my-4 sm:my-6 lg:my-10 sm:gap-4">
        {filteredItems.map(
          (
            {
              year,
              title,
              description,
              description_es,
              researchLine,
              logo,
              route,
              projectType
            },
            index
          ) => (
            <Card
              key={index}
              cardType={"project"}
              year={year}
              researchLine={researchLine}
              title={title}
              logo={logo}
              route={route}
              description_en={description}
              description_es={description_es}
              projectType={projectType}
            ></Card>
          )
        )}
      </div>
    </div>
    </div>
  );
}
