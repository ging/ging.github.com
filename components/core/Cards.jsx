"use client";

import clsx from "clsx";
import * as React from "react";
import { useState } from "react";
import Link from "next/link";

import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Data
import { useTranslation } from "react-i18next";
import { researchlines } from "@/constants/researchlines";

// Components
import Heading from "../ui/Heading";
import { Mybadge, badgeVariants } from "../ui/mybadge";
import Text from "../ui/text";
import { Button, ButtonVariants } from "../ui/button";
import Image from "../ui/image";
import { Divider } from "../ui/divider";
// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger,
// } from "@/components/ui/tooltip";
import ResearchlineIllust from "../illustrations/ResearchlineIllust";
import {
  CustomCard,
  CardBody,
  CardContent,
  CardTitle,
  CardSubtitle,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/customCard";

// Icons
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import ArticleIcon from "@mui/icons-material/Article";

const CardVariants = cva(
  "min-w-20 p-4 sm:py-4 inline-flex flex-col gap-4 items-center whitespace-nowrap rounded-md font-body text-sm text-text drop-shadow-md hover:scale-[101%] transition-all overflow-hidden",
  {
    variants: {
      direction: {
        default: "flex flex-col", // horizontal
        vertical: "flex",
      },
    },
    defaultVariants: {
      direction: "default",
    },
  }
);

const deleteSpaces = (string) => {
  let cleanStr = "";
  for (const char of [...string]) {
    if (char != " ") {
      cleanStr += char;
    }
  }
  return cleanStr;
};

// Las cards comentadas son las que ya están aisladas en la carpeta cards
const Card = React.forwardRef(
  (
    {
      variant,
      direction,
      className,
      title,
      subtitle,
      description,
      description_en,
      description_es,
      img,
      svg,
      tags,
      date,
      category,
      route,
      name,
      position,
      center,
      email,
      author,
      doi,
      github,
      buttonText,
      cardType,
      role,
      researchLine,
      logo,
      projectType = "european-project",
      keywords,
      researchgate,
      orcid,
      webOfScience,
      googleScholar,
      linkedin,
      portalUpm,
    },
    ref
  ) => {
    const { t, i18n } = useTranslation();
    const currentLang = i18n.language;

    // PARA PROJECTCARD / teamcard
    // Manejo de estado para ver si se ha expandido el "ver más" del texto
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleDescription = () => {
      setIsExpanded((prevState) => !prevState); // Alterna entre true y false,
    };

    //elegir description o description_es según el currentLang
    let description_translation = description_en;
    if (currentLang == "es" && description_es) {
      description_translation = description_es;
    }

    // fondo researchline cards - project cards
    let backgroundColor;

    // coge solo la primera researchline para ponerle el fondo
    switch (researchLine && researchLine[0]) {
      case "data":
        backgroundColor = "bg-data_bg"; // Para la categoría 'data'
        break;
      case "videoconference":
        backgroundColor = "bg-videoconference_bg"; // Para la categoría 'videoconference'
        break;
      case "ai":
        backgroundColor = "bg-ai_bg"; // Para la categoría 'ai'
        break;
      case "computing":
        backgroundColor = "bg-networks_bg"; // Para la categoría 'ai'
        break;
      case "e-learning":
        backgroundColor = "bg-eLearning_bg"; // Para la categoría 'ai'
        break;
      default:
        backgroundColor = "bg-gray-600/50"; // Valor por defecto si no hay coincidencia
        break;
    }

    //si tiene más de una researchline le ponemos all al link a las publicaciones
    let pubResearchLine = "all";
    if (researchLine && researchLine.length == 1) {
      pubResearchLine = researchLine[0];
    }

   
    const researchLineCard = (
      <CustomCard className="card-researchline w-fit max-w-[300px] h-fit mb-8 md:mb-0">
        <ResearchlineIllust researchLine={researchLine} />
        <CardContent>
          <CardTitle level='h4' className="font-semibold text-2xl text-white">
            {" "}
            {title}{" "}
          </CardTitle>
          <Text className="font-light">{description}</Text>
          {/* <Button asChild variant="outline" size="sm" radius="rounded_sm" className="mt-4">
              <Link rel="noopener noreferrer" target="_blank" href={`projects?researchline=${researchLine}`} >
                {t("front.ResearchLines.button")}
                <ArrowRightIcon />
              </Link>
            </Button> */}
        </CardContent>
      </CustomCard>
    );

    // Usar el prop cardType para determinar qué tipo de tarjeta renderizar
    switch (cardType) {
      default:
        return projectCard;
      case "project":
        return projectCard;
      case "course":
        return courseCard;
      case "publication":
        return publicationCard;
      case "team":
        return teamCard;
      case "tool":
        return toolCard;
      case "researchline":
        return researchLineCard;
    }
  }
);

Card.displayName = "Card";

export { Card, CardVariants };
