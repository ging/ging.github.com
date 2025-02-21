"use client";

import * as React from "react";
import { useState, useRef, useEffect } from "react";
import clsx from "clsx";

import { useTranslation } from "react-i18next";

import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/text";
import { Button, ButtonVariants } from "@/components/ui/button";



/** --------------------------------------
 * CARD CONTAINER
 * ---------------------------------------
 */
const CustomCard = React.forwardRef(({ className, ...props }, ref) => (
  <article
    ref={ref}
    className={cn(
      "h-full w-full flex flex-col justify-start gap-4 overflow-hidden",
      className
    )}
    {...props}
  />
));
CustomCard.displayName = "CustomCard";

/** --------------------------------------
 * CARD HEADER
 * ---------------------------------------
 */
const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <header
    ref={ref}
    className={cn("w-full pb-3 flex gap-2 justify-start", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

/** --------------------------------------
 * CARD TITLE
 * ---------------------------------------
 */
const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <Heading ref={ref} level="h3" className={cn(" ", className)} {...props} />
));
CardTitle.displayName = "CardTitle";

/** --------------------------------------
 * CARD SUBTITLE
 * ---------------------------------------
 */
const CardSubtitle = React.forwardRef(({ className, ...props }, ref) => (
  <Heading ref={ref} level="h6" className={cn(className)} {...props} />
));
CardSubtitle.displayName = "CardSubtitle";

/** --------------------------------------
 * CARD DESCRIPTION
 * ---------------------------------------
 */
// const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
//   <Text
//     ref={ref}
//     className={cn("text-muted-foreground", className)}
//     {...props} />
// ))
// CardDescription.displayName = "CardDescription"

const CardDescription = React.forwardRef(
  ({ className, children, lines = 3, ...props }, ref) => {
    const { t, i18n } = useTranslation();
    const currentLang = i18n.language;
    const [isTruncated, setIsTruncated] = useState(false); // Si el texto está truncado
    const [isExpanded, setIsExpanded] = useState(false); // Si el texto está desplegado
    const textRef = useRef(null); // Referencia al párrafo

    // Verifica si el contenido está truncado
    useEffect(() => {
      if (textRef.current) {
        const isContentTruncated =
          textRef.current.scrollHeight > textRef.current.offsetHeight;

        setIsTruncated(isContentTruncated);
      }
    }, [children, lines]);

    return (
      <div>
        <Text
          ref={textRef}
          className={clsx(
            "text-muted-foreground overflow-hidden",
            isExpanded ? "line-clamp-none" : `line-clamp-${lines}`,
            className
          )}
          style={{
            display: "-webkit-box",
            WebkitLineClamp: isExpanded ? "none" : lines, // Fallback dinámico para estilos inline
            WebkitBoxOrient: "vertical",
            overflow: isExpanded ? "visible" : "hidden",
          }}
          {...props}
        >
          {children}
        </Text>

        {/* Botón dinámico */}
        {isTruncated && (
          <Button
            className="min-w-fit p-0 pt-2 cursor-pointer font-bold hover:text-blue-300 text-white underline underline-offset-2"
            size="sm"
            variant="link"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded
              ? t("projects.card.toggleLess")
              : t("projects.card.toggleMore")}
          </Button>
        )}
      </div>
    );
  }
);
CardDescription.displayName = "CardDescription";

export default CardDescription;

/** -----------------------------------
 * CARD BODY
 * ------------------------------------
 */
const CardBody = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("h-full w-full flex flex-col justify-between", className)}
    {...props}
  />
));
CardBody.displayName = "CardBody";

/**
 * CARD CONTENT
 * Component for grouping content inside a main Card part (Header, Body, Footer)
 */
const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("h-full w-full flex flex-col justify-start", className)}
    {...props}
  />
));
CardContent.displayName = "CardContent";

/** --------------------------------------
 * CARD FOOTER
 * ---------------------------------------
 */
const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
  <footer
    ref={ref}
    className={cn("pt-2 w-full flex gap-3 justify-end items-center", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export {
  CustomCard,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  CardSubtitle,
  CardDescription,
  CardContent,
};
