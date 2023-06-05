import "./Favs.css";
import { useId } from "react";
import { FavsIcon } from "../../assets/Icons";
import { useFavs } from "../../hooks/useFavs";
import { GifCard } from "../GifCard/GifCard";
import { Subtitle } from "../Subtitle/Subtitle";

export function Favs() {
  const favsCheckBoxId = useId();
  const { favs } = useFavs();

  return (
    <>
      <input
        id={favsCheckBoxId}
        type="checkbox"
        hidden
        className="FavsCheckbox"
      />
      <label htmlFor={favsCheckBoxId} className="Favs-btn">
        <FavsIcon />
      </label>
      <aside className="Favs">
        <Subtitle text={"My Favs Gifs: "} />
        <ul className="ListOfFavs">
          {favs.map((gif) => (
            <GifCard key={gif.id} gif={gif} />
          ))}
        </ul>
      </aside>
    </>
  );
}
