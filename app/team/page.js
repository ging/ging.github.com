"use client";

import { useEffect, useState } from "react";
import { myteam } from "@/constants/team";
import { useTranslation } from "react-i18next";

// Components
import Heading from "@/components/ui/Heading";
import TeamCard from "@/components/cards/TeamCard";
import dynamic from "next/dynamic";
import { Divider } from "@/components/ui/divider";

const Team = (props) => {
  console.log(myteam);
  const [team, setMembers] = useState(myteam); // Inicializa el estado con los datos de 'team'
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  console.log(team);

  const renderMembers = () => {
    return team.map(
      (
        {
          name,
          description_en,
          description_es,
          position,
          img,
          svg,
          github,
          email,
          center,
          researchgate,
          orcid,
          webOfScience,
          googleScholar,
          linkedin,
          portalUpm,
          role,
        },
        key
      ) => {
        const translatedRole = t("team.professorCards.roles." + role);
       console.log(translatedRole)
        return (
          <TeamCard
            key={key}
            img={img}
            name={name}
            position={position}
            role={translatedRole}
            center={center}
            email={email}
            description_en={description_en}
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
    <main className={"standard_margin-s team page_" + currentLang}>
      <Heading level="h2" className="mx-auto mb-8 sm:mx-0 text-center">
        {t("team.title")}
      </Heading>
      <Divider size="md"/>
      <section className="justify-center flex flex-wrap xs:gap-x-8 md:gap-x-10 gap-y-8 md:gap-y-12">
        {Array.isArray(team) && team.length > 0 ? (
          renderMembers(team)
        ) : (
          <p>No members found.</p>
        )}
      </section>
    </main>
  );
};

export default dynamic(() => Promise.resolve(Team), { ssr: false });
