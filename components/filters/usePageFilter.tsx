"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export const usePageFilter = (items) => {
  const router = useRouter(); // Hook para manipular la URL
  let searchParams = useSearchParams()
  const [filteredItems, setFilteredItems] = useState(items);
  const [loading, setLoading] = useState(true)

  // Función para manejar el cambio de categoría
  const handleResearchLineChange = (researchLine) => {
    if (researchLine == "all") {
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
    if (researchLineURL) {
      handleResearchLineChange(researchLineURL)
    } else {
      setLoading(false)
    }
  }, [])

  return {
    filteredItems,
    handleResearchLineChange,
    loading
  };
};
