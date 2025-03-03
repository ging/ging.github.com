import React from "react";

import { useTranslation } from "react-i18next";
import Link from "next/link";
import { cn } from "@/lib/utils";

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
import { ExternalLinkIcon } from "@radix-ui/react-icons";

const Card = React.forwardRef(
  (
    {title, title_es, subtitle, description_en, description_es, date, category, route},
    ref
  ) => {
    const { t, i18n } = useTranslation();
    const currentLang = i18n.language;

    let description_translation = description_en;
    if (currentLang === "es" && description_es) {
      description_translation = description_es;
    }

    let title_translation = title;
    if (currentLang === "es" && description_es) {
      title_translation = title_es;
    }

    return (
      <CustomCard
        className={'px-3 bg-cover bg-center bg-no-repeat border border-pink-400'}
        style={{
          backgroundImage: "url('assets/fondos/background_image.png')",
        }}
      >
        <header className="flex w-full gap-2 items-center">
          <Mybadge variant="primary" size="md">
            {date}
          </Mybadge>
          <Mybadge variant="primary" size="md">
            {category}
          </Mybadge>
          <span className="spacer w-full" />
          <Button href={route} variant="ghost" size="lg">
            Ir al curso <ExternalLinkIcon className="w-5 h-5" />
          </Button>
        </header>
        {/* <Image
            className={"h-40"}
            src={img || "placeholder.jpg"}
            alt={title || "Image"}
            fit="cover"
          /> */}
        <CardBody>
          <CardContent>
            <CardTitle level="h5">{title_translation}</CardTitle>
            <CardSubtitle level="h6">{subtitle}</CardSubtitle>
            <CardDescription description={description_translation}></CardDescription>
            {/* <div className={tagContainerClasses}>{renderTags(tags)}</div> */}
          </CardContent>
        </CardBody>
      </CustomCard>
    );
  }
);

Card.displayName = "CourseCard";

export default Card;
