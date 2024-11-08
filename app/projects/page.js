"use client";

import { useTranslation } from 'react-i18next';
import TabsResearchLineFilter from '@/components/TabsResearchLineFilter';
import { projects } from "@/constants/projects";
import { useEffect, useState } from "react";
import { Card } from '@/components/core/Cards';
export default function Projects() {
    // const [projects, setProjects] = useState(myprojectCards);
    const { t, i18n } = useTranslation();
    const currentLang = i18n.language;
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    const [state, setState] = useState({
        items: projects,
        search: "",
        description: undefined,
        year: undefined,
        researchLine: undefined,
        logo: "",
        route: "",
       // papersToShow: 6, // Number of papers to show initially
      });

       //  Funcion y array de categorias de Tabs
   const [filteredCards, setFilteredCards] = useState(projects);

    // desestructuración state
  const { items, search, description, year, researchLine, logo, route, papersToShow } = state;

  // creado array de categorías de publications 
  console.log(projects)
  const researchLines = [...new Set(projects.map(project => project.researchLine))];
console.log(researchLines)

    return (
        <div>
         <TabsResearchLineFilter
            cards={projects}
            onFilter={setFilteredCards} 
        /> 
        <div className="project_cards my-4 sm:my-6 lg:my-10 sm:grid sm:grid-cols-2 sm:gap-4">
        {filteredCards.map(
          (
            { year, title, description, researchLine, logo, route },
            index
          ) => (
            <Card
              key={index}
              cardType={"project"}
              year={year}
              researchLine={researchLine}
              title={title}
              description={description}
            //   logo={logo}
            //   route={route}
            ></Card>
          )
        )}
      </div> 
      </div>
        
    )
}  