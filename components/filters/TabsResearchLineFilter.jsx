"use client"

import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import clsx from "clsx";


export default function TabsResearchLineFilter({ changeResearhLine, researchLines, researchLine }) {
  const { t } = useTranslation();

  // transformar researchlines a formato tailwind para que puedan coger 
  // las clases del color de fondo de cada línea (NO FUNCIONO ASI QUE LO ELIMINÉ,
  // PERO HE AQUÍ EL RECUERDO DE QUE LO INTENTÉ, NO INTENTARLO DE NUEVO)

  // Función para aplicar las clases a los botones de las categorías
  const classes = (item) => {
    let backgroundColor;
  
    switch (item) {
      case 'data':
        backgroundColor = 'bg-data-500';  // Para la categoría 'data'
        break;
      case 'videoconference':
        backgroundColor = 'bg-videoconference-500';  // Para la categoría 'videoconference'
        break;
      case 'ai':
        backgroundColor = 'bg-ai-700';  // Para la categoría 'ai'
        break;
        case 'networks':
        backgroundColor = 'bg-networks-500';  // Para la categoría 'ai'
        break;
        case 'e-learning':
          backgroundColor = 'bg-eLearning-600';  // Para la categoría 'ai'
          break;
              case 'all': 
          backgroundColor = 'bg-gray-700';
          break;
      default:
        backgroundColor = 'bg-gray-700';  // Valor por defecto si no hay coincidencia
        break;
    }

    let selectedResearchLine = researchLine ? researchLine : "all";
  
    // Retornamos las clases combinadas
    return clsx([
      "font-medium inline-flex items-center justify-center whitespace-nowrap rounded-md px-4 py-3 text-base ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      selectedResearchLine === item
        ? `${backgroundColor} text-white` // Si está seleccionado, aplicamos el color dinámico
        : "bg-background-300 text-gray-400 hover:bg-background-600 md:hover:bg-background hover:text-white", // Si no está seleccionado
    ]);
  };



  //IMPORTANTE: probé a poner dentro de clsx el bg-${researchLine}-400, pero 
  //resulta que Tailwind no puede interpretar correctamente este valor dinámico y generar las clases correspondientes.
  //Explicación de Chatgpt: Tailwind CSS utiliza una técnica llamada purga de CSS (o "tree-shaking") para eliminar las clases no utilizadas en tu archivo final de CSS, de manera que el archivo resultante sea lo más pequeño posible. Esto significa que Tailwind solo incluirá en el CSS final aquellas clases que se encuentren explícitamente en el código JavaScript o HTML de tu proyecto.
  return (
    <div className="bg-none flex flex-wrap mx-4 gap-3 justify-start md:flex-nowrap md:bg-background-300  md:items-center md:justify-center rounded-lg p-1 text-muted-foreground md:gap-1">
      {researchLines.map((item, index) => (
        <button key={index} className={classes(item)} onClick={() => { changeResearhLine(item) }}>
          {item.name === "all" ? t("projects.researchLines.all") : t(`projects.researchLines.${item}`)}
        </button>
      ))}
    </div>
  );
}
