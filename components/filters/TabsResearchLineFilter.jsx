"use client"

import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import clsx from "clsx";

import { useSearchParams } from 'next/navigation';


export default function TabsResearchLine({ handleResearchLineChange, researchLines, selectedResearchLine }) {
  const { t } = useTranslation();

  // Función para aplicar las clases a los botones de las categorías
  const classes = (researchLine) => clsx([
    "font-medium inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-base text-white ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    selectedResearchLine === researchLine
      ? "bg-primary-700" // Estilos para la categoría seleccionada
      : "bg-primary-400 hover:bg-primary-600/75", // Estilos para las categorías no seleccionadas
  ]);
  return (
    <div className="bg-primary-300/60 inline-flex items-center justify-center rounded-lg p-1 text-muted-foreground gap-1.5">
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
