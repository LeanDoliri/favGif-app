import { useEffect, useState } from "react";
import { createContext } from "react";

export const FavsContext = createContext();

export function FavsProvider({ children }) {
  const [favs, setFavs] = useState(()=> {
    const favsInMemory = window.localStorage.getItem("FavGifs");
    return favsInMemory ? JSON.parse(favsInMemory) : [];
  });

  function addToFavs({ gif }) {
    const newFavs = structuredClone(favs);
    newFavs.push(gif);
    setFavs(newFavs);
  }

  function deleteFromFavs({ gif }) {
    const newFavs = favs.filter((gifInFav) => gifInFav.id !== gif.id);
    setFavs(newFavs);
  }

  useEffect (()=> {
    window.localStorage.setItem("FavGifs", JSON.stringify(favs))
  }, [favs])

  return (
    <FavsContext.Provider value={{ favs, addToFavs, deleteFromFavs }}>
      {children}
    </FavsContext.Provider>
  );
}
