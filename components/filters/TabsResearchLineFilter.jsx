"use client"

import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import clsx from "clsx";

import { useSearchParams } from 'next/navigation';

import { useRouter } from "next/navigation";

export default function TabsResearchLine({ cards, onFilter, researchLines }) {
  const [selectedResearchLine, setSelectedResearchLine] = useState("all");
  const { t } = useTranslation();

  let searchParams = useSearchParams()
  let researchLineURL = searchParams.get('researchline')
  console.log(searchParams)
  console.log(researchLineURL)

  const router = useRouter();  // Hook para manipular la URL
  // Función para manejar el cambio de categoría

  // Al cargar el componente, se revisa la URL para obtener la researchLine actual
  useEffect(() => {

    const researchLineFromURL = researchLineURL || "all"; // Si no hay researchline, por defecto 'all'
    setSelectedResearchLine(researchLineFromURL);
    console.log(researchLineFromURL)

    // 2. Filtrar las tarjetas según la researchLine de la URL
    if (researchLineFromURL === "all") {
      onFilter(cards);  // Mostrar todas las tarjetas
    } else {
      const filteredCards = cards.filter((card) => card.researchLine === researchLineFromURL);
      onFilter(filteredCards);  // Mostrar tarjetas filtradas
    }

  }, [router, cards, onFilter]); // Se ejecuta cada vez que cambia 'router.query' o 'cards'

  // Función para manejar el cambio de categoría
  const handleResearchLineChange = (researchLine) => {
    setSelectedResearchLine(researchLine);

    // 1. Cambiar la URL según la researchLine escogida sin recargar la página
    router.push(`/projects/?researchline=${researchLine}`, undefined, { shallow: true });
    console.log(router.asPath)
    if (researchLine === "all") {
      // Si la categoría es "all", devolvemos todas las tarjetas
      onFilter(cards);
    } else {
      // Filtrar las tarjetas que coincidan con la researchLine seleccionada
      // const filteredCards = cards.filter((card) => card.researchLine === researchLine);
      // onFilter(filteredCards);

      const filteredCards = cards.filter((card) => card.researchLine.some(researchLineCard => researchLineCard === researchLine));
      onFilter(filteredCards);



      // console.log(researchLine[2])
    }
  };

  // Al montar el componente, cargar todas las tarjetas

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