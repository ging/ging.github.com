"use client";

import clsx from "clsx";
import * as React from "react";
import { useState } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

import {
  CustomCard,
  CardContent,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/customCard";
import { Mybadge } from "../ui/mybadge";
import { Button, ButtonVariants } from "../ui/button";
import Image from "../ui/image";
import { Divider } from "../ui/divider";

// Icons
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";

const Card = React.forwardRef(
  (
    {
      description,
      description_en,
      description_es,
      img = "/placeholder.jpg",
      svg,
      name,
      role,
      email,
      researchgate,
      orcid,
      googleScholar,
      linkedin,
      portalUpm,
    },
    ref
  ) => {
    const { t, i18n } = useTranslation();
    const [isExpanded, setIsExpanded] = useState(false);
    const currentLang = i18n.language;    

    // Elegir la descripción según el idioma
    const description_translation =
      currentLang === "es" && description_es ? description_es : description_en;

    const toggleDescription = () => setIsExpanded(!isExpanded);

    return (
      <CustomCard className="w-80 bg-transparent border-none shadow-none items-start text-text">
        {(img || name) && (
          <div className="aspect-square h-40 max-h-40 min-h-40 rounded-full overflow-hidden bg-blue-700/30">
            <Image
              className="saturate-0 mix-blend-lighten"
              src={img || "placeholder.jpg"}
              fit="cover"
              alt={name || "Team member"}
            />
          </div>
        )}

        <CardContent className="flex flex-col items-start mb-auto">
          <CardTitle level="title-sm" className="text-inherit text-center">
            <b>{name}</b>
          </CardTitle>
          {role && <CardDescription type="short-p">{role}</CardDescription>}

          {email && (
            <Mybadge
              size="sm"
              variant="secondary"
              className="font-semibold break-words mt-1 text-gray-300 bg-background-300"
            >
              <MailOutlinedIcon
                className="text-gray-300 mr-1"
                sx={{ fontSize: 16 }}
              />
              {email}
            </Mybadge>
          )}

          <Divider />

          <div className="pb-3">
            <p
              className={clsx("text-white", {
                "line-clamp-none": isExpanded,
                "line-clamp-3": !isExpanded,
              })}
            >
              {description_translation}
            </p>
            <Button
              size="sm"
              variant="link"
              className="min-w-fit p-0 font-bold hover:text-blue-300 text-white underline underline-offset-2"
              onClick={toggleDescription}
            >
              {isExpanded
                ? t("projects.card.toggleLess")
                : t("projects.card.toggleMore")}
            </Button>
          </div>

          <CardFooter className="justify-start mb-6">
            {researchgate && (
              <Link
                target="_blank"
                href={researchgate}
                className={
                  " icon_link_publication relative text-left mb-1 lg:mb-1.5 hover:underline flex flex-row items-center cursor-pointer"
                }
              >
                <Button
                  href="#"
                  className={
                    ButtonVariants({
                      variant: "default",
                      size: "icon",
                      radius: "rounded_full",
                    }) +
                    " bg-blue-600 hover:bg-blue-700 p-[6px] overflow-hidden"
                  }
                >
                  <Image
                    className="w-full h-full contrast-200 saturate-50"
                    src="/assets/img/logos/researchgate.png"
                    alt="Research Gate icon"
                    fit="cover"
                  />
                  <Mybadge
                    variant="secondary"
                    size="xs"
                    className="link_publication absolute left-0 bottom-7 bg-[#00000097]"
                  >
                    ResearchGate
                  </Mybadge>
                </Button>
              </Link>
            )}
            {/* {researchgate && renderIconLink(researchgate, "/assets/img/logos/researchgate.png", "ResearchGate", "bg-blue-600 hover:bg-blue-700 !p-[6px] !saturate-150")} */}
            {orcid &&
              renderIconLink(
                orcid,
                "/assets/img/logos/orcid-1.png",
                "Orcid",
                "bg-green-600 hover:bg-green-700"
              )}
            {/* {webOfScience && <Link target="_blank" href={webOfScience}
                className={"text-left mb-1 lg:mb-1.5 hover:underline flex flex-row items-center cursor-pointer"}>
                <Button href="#" className={ButtonVariants({
                  variant: "default",
                  size: "icon",
                  radius: "rounded_full",
                }) + " bg-green-700 hover:bg-green-800 p-0 overflow-hidden"}>
                  <Image
                    src="/assets/img/logos/researchgate.png"
                    alt="Research Gate icon"
                    fit="contain"
                  />
                </Button>
              </Link>} */}
            {googleScholar &&
              renderIconLink(
                googleScholar,
                "/assets/img/logos/google-scholar.png",
                "Google Scholar",
                "bg-blue-800 hover:bg-blue-900"
              )}
            {linkedin &&
              renderIconLink(
                linkedin,
                "/assets/img/logos/linkedin.png",
                "LinkedIn",
                "bg-[#006198] hover:bg-[#006198]"
              )}
            {portalUpm &&
              renderIconLink(
                portalUpm,
                null,
                "Portal UPM",
                "bg-blue-600 hover:bg-blue-700",
                "UPM"
              )}
          </CardFooter>
        </CardContent>
      </CustomCard>
    );
  }
);

const renderIconLink = (href, imgSrc, label, className, text = null) => (
  <Link
    target="_blank"
    href={href}
    className="icon_link_publication relative mb-1 lg:mb-1.5 flex items-center"
  >
    <Button
      href="#"
      className={clsx(
        ButtonVariants({
          variant: "default",
          size: "icon",
          radius: "rounded_full",
        }),
        className,
        "p-0 overflow-hidden"
      )}
    >
      {imgSrc ? (
        <Image src={imgSrc} alt={`${label} icon`} fit="contain" />
      ) : (
        <p className="text-2xs font-bold">{text}</p>
      )}
      <Mybadge
        variant="secondary"
        size="xs"
        className="link_publication bg-[#00000097] absolute -translate-x-1/2 left-1/2 bottom-7"
      >
        {label}
      </Mybadge>
    </Button>
  </Link>
);

Card.displayName = "TeamCard";

export default Card;
