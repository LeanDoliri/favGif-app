import { useContext } from "react";
import { FavsContext } from "../Contexts/FavsContext";

export function useFavs() {
  const context = useContext(FavsContext);

  return context;
}
