"use client";

import { useEffect, useState } from "react";
import { myteam } from "@/constants/team";
import { useTranslation } from "react-i18next";

// Components
import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import { Card, CardVariants } from "@/components/core/Cards";
import dynamic from "next/dynamic";

const Team = (props) => {
  console.log(myteam)
  // Puedes usar directamente el array 'team' en lugar de 'teamData', pero si prefieres manejar el estado:
  const [team, setMembers] = useState(myteam); // Inicializa el estado con los datos de 'team'
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  console.log(team);

  const renderMembers = (member) => {
    return team.map(
      (
        {
          name,
          description,
          description_es,
          position,
          img,
          github,
          email,
          center,
          roleTranslationKey,
          researchgate,
          orcid,
          webOfScience,
          googleScholar,
          linkedin,
          portalUpm
        },
        key
      ) => {
        const translatedRole = t(`${roleTranslationKey}`);
        const translatedPosition = t(position);
        return (
          <Card
            key={key}
            cardType={"team"}
            className={CardVariants({
              variant: "team",
            })}
            img={img}
            name={name}
            position={position}
            role={translatedRole}
            center={center}
            email={email}
            description_en={description}
            description_es={description_es}
            researchgate={researchgate}
            orcid={orcid}
            webOfScience={webOfScience}
            googleScholar={googleScholar}
            linkedin={linkedin}
            portalUpm={portalUpm}
          />
        );
      }
    );
  };

  return (
    <main className={"team page_" + currentLang}>
      <main className="padding_home">
        <Heading level="h2" className="mx-auto mb-8 sm:mx-0 text-center">
          {t("team.title")}
        </Heading>
        <section className="justify-center flex flex-wrap xs:gap-x-6 md:gap-x-8 gap-y-8 md:gap-y-12">
          {Array.isArray(team) && team.length > 0 ? (
            renderMembers(team)
          ) : (
            <p>No members found.</p>
          )}
        </section>
      </main>
    </main>
  );
};

export default dynamic(() => Promise.resolve(Team), { ssr: false });
