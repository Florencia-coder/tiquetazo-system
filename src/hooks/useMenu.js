import { useState, useEffect } from "react";
import { getMenu } from "../services/api";

export const useMenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getMenu();
        setMenu(data);
      } catch (error) {
        console.error("Error fetching menu:", error);
      }
    };

    fetchData();
  }, []);

  return menu;
};
