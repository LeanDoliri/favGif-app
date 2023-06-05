import "./GifCard.css";
import { BtnAddToFavs, BtnDeleteFromFavs } from "../Buttons/Buttons";
import { useFavs } from "../../hooks/useFavs";

export function GifCard({ gif }) {
  const { id, title, url } = gif;
  const { favs } = useFavs();

  function checkGifInFavs({ id }) {
    return favs.some((gif) => gif.id === id);
  }

  const isInFavs = checkGifInFavs({ id: gif.id });

  return (
    <div className="GifCard">
      <a href={`/gif/${id}`}>
        <img src={url} alt={title} className="GifImg" />
      </a>
      <div className="GifCard-data">
        {title !== "" ? (
          <p className="TitleGif">{title}</p>
        ) : (
          <p className="TitleGif">...</p>
        )}
        {isInFavs ? (
          <BtnDeleteFromFavs gif={gif} />
        ) : (
          <BtnAddToFavs gif={gif} />
        )}
      </div>
    </div>
  );
}
