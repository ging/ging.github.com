import React from "react";

import { useTranslation } from "react-i18next";
import Link from "next/link";

// Components
import { Mybadge, badgeVariants } from "../ui/mybadge";
import { Button, ButtonVariants } from "../ui/button";
import Image from "../ui/image";

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

// icons
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { GitHub } from "@mui/icons-material";

const Card = React.forwardRef(
  (
    {title, img, route, description, description_es, github},
    ref
  ) => {
    const { t, i18n } = useTranslation();
    const currentLang = i18n.language;    

    // Elegir la descripción según el idioma
    const description_translation =
      currentLang === "en" && description_es ? description_es : description;

    return (
      <CustomCard>
        {img && (
          <Image
            src={process.env.PUBLIC_URL + img || "placeholder.jpg"}
            alt={/* process.env.PUBLIC_URL */ +img || "placeholder.jpg"}
            className={"!h-[250px] p-6 bg-primary-500 rounded-md"}
            fit="contain"
          />
        )}
        <CardBody className="h-fit">
          <CardContent>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description_translation}</CardDescription>
          </CardContent>
        </CardBody>
        <CardFooter className="align-end justify-between">
          {github && (
            <Button variant="ghost" size="sm" className="gap-1">
              <GitHub className="h-5"/>
              <Link target="_blank" href={github}>
                Github
              </Link>
            </Button>
          )}
          <Button variant="outline" size="sm" className="">
            <Link target="_blank" href={route}>
              {" "}
              {t("tools.toolCards.button")}
            </Link>
          </Button>
        </CardFooter>
      </CustomCard>
    );
  }
);

Card.displayName = "ToolCard";

export default Card;
