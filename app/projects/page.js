"use client";

import { useTranslation } from "react-i18next";
import { usePathname } from "next/navigation";
import TabsResearchLineFilter from "@/components/filters/TabsResearchLineFilter";
import { projects } from "@/constants/projects";
import { Card } from "@/components/core/Cards";
import { researchlines } from "@/constants/researchlines";
import { usePageFilter } from "@/components/filters/usePageFilter.tsx";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text"

export default function Projects() {

  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  const {filteredItems, handleResearchLineChange , handleBasePath, loading, selectedResearchLine  = "all"} = usePageFilter(projects)

  console.log(selectedResearchLine)
  // 2. Agregar objeto "all", que sería "todas las líneas de inv."
  let researchLines = ["all", ...researchlines];

  const pathname = "/projects";


  if (loading) {
    return (<div>
      <TabsResearchLineFilter
      researchLines={researchLines}
      handleResearchLineChange={handleResearchLineChange}
      selectedResearchLine={selectedResearchLine}
      handleBasePath={handleBasePath}
      pathname={pathname}
      />
    <p className="min-h-screen">loading...</p>
    </div>)
  }

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

      <TabsResearchLineFilter
        className="flex justify-center"
        researchLines={researchLines}
        handleResearchLineChange={handleResearchLineChange}
        selectedResearchLine={selectedResearchLine}
        handleBasePath={handleBasePath}
        pathname={pathname}
      />
      </div>
      <div className="project_cards standard_margin my-4 sm:my-6 lg:my-10 sm:gap-4">
        {filteredItems.map(
          (
            {
              year,
              title,
              description,
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
              description={description}
              projectType={projectType}
            ></Card>
          )
        )}
      </div>
    </div>
    </div>
  );
}
