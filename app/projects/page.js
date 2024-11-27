"use client";

import { useTranslation } from "react-i18next";
import TabsResearchLineFilter from "@/components/filters/TabsResearchLineFilter";
import { projects as p } from "@/constants/projects";
import { useEffect, useState } from "react";
import { Card } from "@/components/core/Cards";
import { researchlines } from "@/constants/researchlines";
import { usePageFilter } from "@/components/filters/usePageFilter.tsx";
import { useSearchParams } from "next/navigation";

export default function Projects() {
  // const [projects, setProjects] = useState(myprojectCards);
  // const [selectedResearchLine, setSelectedResearchLine] = useState("all");
  const { t, i18n } = useTranslation();

  const currentLang = i18n.language;
  //  Funcion y array de categorias de Tabs
  const [projects, setProjects] = useState(p);
  const {filteredItems, handleResearchLineChange, loading} = usePageFilter(projects)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  

  // LÍNEAS DE INVESTIGACIÓN
  //
  // 1. Extraer las líneas de investigación
  // 1.1. eliminando duplicados con "new Set" (mapeo de atributos "researchLine"
  //      del array "projects")
  // 1.2. durante el mapeo, crear un objeto para cada línea con los
  //      atributos "name" y "translationKey", para que siempre estén
  //      vinculados (que sino, hay problemas)

  let uncutResearchLines = Array.from(
    new Set(projects.map((project) => project.researchLine)) // "uncut" de "en bruto"
  );

  // console.log(uncutResearchLines)

  // 2. Agregar objeto "all", que sería "todas las líneas de inv."
  let researchLines = ["all", ...researchlines];

  // 3. Cambiar línea "other" de lugar para que siempre se encuentre
  //    al final del array, y se pinte también al final del componente
  //    de pestañas

  // 3.1. Filtrar para mover "other" al final
  let orderedResearchLines = researchLines.filter((line) => line !== "other");
  // console.log(orderedResearchLines)
  // 3.2. Agregar "other" al final
  orderedResearchLines.push("other");

  // console.log(filteredCards)

  let allResearchLines = orderedResearchLines.map((line) => ({
    name: line,
    translationKey: `projects.researchLines.${line}`,
  }));


  if (loading) {
    return <p className="min-h-screen">loading...</p>
  }

  // console.log(allResearchLines)
  return (
    <div>
      <TabsResearchLineFilter
        researchLines={researchLines}
        handleResearchLineChange={handleResearchLineChange}
      />
      <div className="project_cards my-4 sm:my-6 lg:my-10 sm:grid sm:grid-cols-2 sm:gap-4">
        {filteredItems.map(
          (
            {
              year,
              title,
              description,
              researchLine,
              researchLineTranslationKey,
              logo,
              route,
            },
            index
          ) => (
            <Card
              key={index}
              cardType={"project"}
              year={year}
              researchLine={researchLine}
              title={title}
              description={description}
            ></Card>
          )
        )}
      </div>
    </div>
  );
}
