import "./Favs.css";
import { useId } from "react";
import { FavsIcon } from "../../assets/Icons";
import { useFavs } from "../../hooks/useFavs";
import { GifCard } from "../GifCard/GifCard";
import { Subtitle } from "../Subtitle/Subtitle";
import Masonry from "react-masonry-css";

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
        <Masonry breakpointCols={2} className="ListOfFavs my-masonry-grid" columnClassName="my-masonry-grid_column">
          {favs.map((gif) => (
            <GifCard key={gif.id} gif={gif} />
          ))}
        </Masonry>
      </aside>
    </>
  );
}
