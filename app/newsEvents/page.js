"use client";
import React from "react";
import Heading from "@/components/ui/Heading";
import { useTranslation } from "react-i18next";
import NewsEventsCard from "@/components/cards/NewsEventsCard";
import { newsEvents } from "@/constants/newsEvents";

const NewsEvents = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  return (
    <div className="standard_margin">
      <Heading level="h3" className="mt-3">
        {t("newsEvents.titleArchive")}
      </Heading>
      <div>
        {" "}
        {newsEvents.map(
          (
            {
              className,
              title_en,
              title_es,
              description_en,
              description_es,
              date,
              time,
              location,
              category,
              route,
              keywords_en,
              keywords_es,
              img,
              agenda,
              link,
              document,
              eventInscription,
              article,
            },
            key
          ) => {
            return (
              <NewsEventsCard
                type="expanded"
                className={className}
                key={key}
                date={date}
                time={time}
                category={category}
                title_en={title_en}
                title_es={title_es}
                description_en={description_en}
                description_es={description_es}
                location={location}
                route={route}
                keywords_en={keywords_en}
                keywords_es={keywords_es}
                img={img}
                agenda={agenda}
                link={link}
                document={document}
                eventInscription={eventInscription}
                article={article}
              ></NewsEventsCard>
            );
          }
        )}
      </div>
    </div>
  );
};

export default NewsEvents;
