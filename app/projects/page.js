"use client";

import { useTranslation } from "react-i18next";
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

  const {filteredItems, handleResearchLineChange, loading, selectedResearchLine} = usePageFilter(projects)

  // 2. Agregar objeto "all", que sería "todas las líneas de inv."
  let researchLines = ["all", ...researchlines];

  if (loading) {
    return (<div>
      <TabsResearchLineFilter
      researchLines={researchLines}
      handleResearchLineChange={handleResearchLineChange}
      selectedResearchLine={selectedResearchLine}
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
      <div className="flex justify-center">
      <TabsResearchLineFilter
      className="flex justify-center"
        researchLines={researchLines}
        handleResearchLineChange={handleResearchLineChange}
        selectedResearchLine={selectedResearchLine}

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
              logo={logo}
              description={description}
            ></Card>
          )
        )}
      </div>
    </div>
    </div>
  );
}
