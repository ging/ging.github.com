"use client"

import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import clsx from "clsx";



export default function TabsResearchLine({ handleResearchLineChange, researchLines, selectedResearchLine }) {
  const { t } = useTranslation();

  // Función para aplicar las clases a los botones de las categorías
  const classes = (researchLine) => clsx([
    "font-medium inline-flex items-center justify-center whitespace-nowrap rounded-md px-4 py-3 text-base  ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    selectedResearchLine === researchLine
      ? "bg-[#A1A9CA] text-gray-900" // Estilos para la categoría seleccionada -
      : "bg-background-300 text-gray-400 hover:bg-background hyover:text-white", // Estilos para las categorías no seleccionadas
  ]);
  return (
    <div className="bg-background-300 inline-flex items-center justify-center rounded-lg p-1 text-muted-foreground gap-1">
      {researchLines.map((researchLine, index) => (
        <button
          key={index}
          className={classes(researchLine)}
          onClick={() => handleResearchLineChange(researchLine)}
        >
          {/* Renderizar el nombre de la categoría */}
          {researchLine.name === "all" ? t("projects.researchLines.all") : t(`projects.researchLines.${researchLine}`)}

        </button>
      ))}
    </div>
  );
}
