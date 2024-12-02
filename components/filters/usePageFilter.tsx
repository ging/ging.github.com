"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export const usePageFilter = (items) => {
  const router = useRouter(); // Hook para manipular la URL
  let searchParams = useSearchParams()
  const [filteredItems, setFilteredItems] = useState(items);
  const [loading, setLoading] = useState(true);
  const [selectedResearchLine, setSelectedResearchLine] = useState("all")

  // Función para manejar el cambio de categoría
  const handleResearchLineChange = (researchLine) => {
    
  console.log(selectedResearchLine)
          setSelectedResearchLine(researchLine)
          //esto no se activa hasta que alguien no le da click
    if (researchLine === "all") {
      setFilteredItems(items);
      router.push(`/projects`, undefined);

    } else {
      const newFilteredCards = items.filter((proj) =>
        proj.researchLine.some((l) => l === researchLine)
      );
      setFilteredItems(newFilteredCards);
      router.push(`/projects/?researchline=${researchLine}`, undefined);
    }
    setLoading(false)
  };
  

  useEffect(() => {
    let researchLineURL = searchParams.get('researchline')
    // este operador sirve para que setSelectedResearchLine no pase a ser "null", cuando estén
    // todas las líneas seleccionadas
    setSelectedResearchLine(researchLineURL === null ? (researchLineURL = "all") : (researchLineURL))
    if (researchLineURL) {
      handleResearchLineChange(researchLineURL)
    } else {
      setLoading(false)
    }
  }, [])

  return {
    filteredItems,
    handleResearchLineChange,
    loading,
    selectedResearchLine,
  };
};
