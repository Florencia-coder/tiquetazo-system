import { useMemo } from "react";

export const useFilteredMenu = (menu, selectedCategory) => {
  return useMemo(
    () => menu.filter((item) => item.categories === selectedCategory),
    [menu, selectedCategory]
  );
};
