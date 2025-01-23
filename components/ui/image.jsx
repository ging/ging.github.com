"use client";

import React from "react";
import clsx from "clsx";
import { Mybadge } from "./mybadge";

const Image = ({
  fit = "cover",
  src,
  alt = "",
  className,
  layout = "top-right",
  hasMybadge = false,
  badgeVariant = "",
  badgeSize = "",
  badgeContent = "badge",
  svgCode,  // SVG en formato de código
}) => {

  /**----------------------------------
   * Component Styles
   * ----------------------------------
   */
  const imageContainerClasses = "relative flex w-full h-full overflow-hidden " + className;

  const imageClasses = clsx(
    "w-full h-full flex items-center justify-center", 
    {
      "object-cover": fit === "cover",
      "object-contain": fit === "contain",
    }
  );

  const badgeLayout = clsx(
    "absolute", 
    {
      "top-2 left-2": layout === "top-left",
      "top-2 right-2": layout === "top-right",
      "bottom-2 left-2": layout === "bottom-left",
      "bottom-2 right-2": layout === "bottom-right",
      "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2": layout === "center",
    }
  );

  return (
    <div className={imageContainerClasses}>
      {/* Se pinta si hay código svg */}
      {svgCode && (
        <div
          className={imageClasses + ""}
          dangerouslySetInnerHTML={{ __html: svgCode }} // Renderizamos SVG
        />
      )}
      {/* Se pinta si hay una ruta de imagen */}
      { src && (
        <img src={src} alt={alt} className={imageClasses} />
      )}
      {hasMybadge && (
        <Mybadge className={badgeLayout} variant={badgeVariant} size={badgeSize}>
          {badgeContent}
        </Mybadge>
      )}
    </div>
  );
};

export default Image;
