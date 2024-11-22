"use client";

import { useTranslation } from "react-i18next";
import TabsResearchLineFilter from "@/components/TabsResearchLineFilter";
import { projects } from "@/constants/projects";
import { useEffect, useState } from "react";
import { Card } from "@/components/core/Cards";

export default function Projects() {
  // const [projects, setProjects] = useState(myprojectCards);
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  // estado de filtro (REVISAR SI HACE FALTA CONSERVAR ESTO)
  const [state, setState] = useState({
    items: projects,
    search: "",
    description: undefined,
    year: undefined,
    researchLine: undefined,
    // papersToShow: 6, // Number of papers to show initially
  });

  //  Funcion y array de categorias de Tabs
  const [filteredCards, setFilteredCards] = useState(projects);

  // desestructuración state (REVISAR)
  const {
    items,
    search,
    description,
    year,
    researchLine,
    logo,
    route,
    papersToShow,
  } = state;

  // LÍNEAS DE INVESTIGACIÓN
  //
  // 1. Extraer las líneas de investigación
  // 1.1. eliminando duplicados con "new Set" (mapeo de atributos "researchLine"
  //      del array "projects")
  // 1.2. durante el mapeo, crear un objeto para cada línea con los
  //      atributos "name" y "translationKey", para que siempre estén
  //      vinculados (que sino, hay problemas)

  let uncutResearchLines = Array.from(
    new Set( // "uncut" de "en bruto"
      projects.map((project) => project.researchLine)
    )
  );

  // console.log(uncutResearchLines)

  // 2. Agregar objeto "all", que sería "todas las líneas de inv."
  let researchLines = [ "all"
  ,
    ...uncutResearchLines,
  ];

  // 3. Cambiar línea "other" de lugar para que siempre se encuentre
  //    al final del array, y se pinte también al final del componente
  //    de pestañas

  // 3.1. Filtrar para mover "other" al final
  let orderedResearchLines = researchLines.filter(
    (line) => line !== "other"
  );
  // console.log(orderedResearchLines)
  // 3.2. Agregar "other" al final
  orderedResearchLines.push("other");

  let allResearchLines = orderedResearchLines.map((line) => ({
    name: line,
    translationKey: `projects.researchLines.${line}`,
  })) 

  // console.log(allResearchLines)
  return (
    <div>
      <TabsResearchLineFilter
        cards={projects}
        allResearchLines={allResearchLines}
        onFilter={setFilteredCards}
      />
      <div className="project_cards my-4 sm:my-6 lg:my-10 sm:grid sm:grid-cols-2 sm:gap-4">
        {filteredCards.map(
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
