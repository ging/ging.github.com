"use client";

import React from "react";
import clsx from "clsx";
import { useRef } from "react";

/* 
  ------------------------------------------------------------------
  Componente para los titulos y etiquetas <h> -> jerarquías de texto // para esto se usa el Heading, este para bloques de texto
  ------------------------------------------------------------------
*/

const Text = React.forwardRef(({ type = "p", children, className, ...props }, ref) => {
  // Determinar el componente HTML según el nivel
  let Component;
  switch (type) {
    case "p":
      Component = "p";
      break;
    case "small":
      Component = "small";
      break;
      case "short-p":
        Component = "p";
        break;
    default:
      Component = "p"; // Por defecto, usar h1 si no se especifica nivel válido
      break;
  }

  // clsx, aplica clases según el valor del atributo level de manera dinámica
  const classes = clsx([
    "font-main text-text",
    {/*"text-balance"*/},
    {
      "text-base max-w-[65ch] xl:max-w-[70ch] 2xl:max-w-[90ch] text-pretty": type === "p",
      "text-sm text-wrap leading-normal": type === "small",
      "text-base max-w-[66ch] xl:max-w-[71ch] 2xl:max-w-[83ch]": type === "short-p",
    },
    className
  ])

  return <Component ref={ref} className={classes} {...props}>{children}</Component>;
});

export default Text;
