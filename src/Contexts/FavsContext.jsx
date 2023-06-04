import { useState } from "react";
import { createContext } from "react";

export const FavsContext = createContext();

export function FavsProvider({ children }) {
  const [favs, setFavs] = useState([]);

  return <FavsContext.Provider>{children}</FavsContext.Provider>;
}
