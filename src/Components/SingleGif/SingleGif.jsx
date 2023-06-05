import { useFavs } from "../../hooks/useFavs";
import { BtnAddToFavs, BtnDeleteFromFavs } from "../Buttons/Buttons";
import "./SingleGif.css";

export function SingleGif({ gif }) {
  const { title, url, username, source } = gif;
  const { favs } = useFavs();

  function checkGifInFavs({ id }) {
    return favs.some((gif) => gif.id === id);
  }

  const isInFavs = checkGifInFavs({ id: gif.id });

  return (
    <div className="SingleGif">
      <img src={url} alt={title} />
      <div className="SingleGif-data">
        <ul>
          {title != "" ? (
            <li>
              <strong>Title: </strong>
              {title}
            </li>
          ) : (
            ""
          )}
          {username != "" ? (
            <li>
              <strong>Username: </strong>
              {username}
            </li>
          ) : (
            ""
          )}
          {source != "" ? (
            <li>
              <strong>Source: </strong>
              <a href={source} target="_blank">
                {source}
              </a>
            </li>
          ) : (
            ""
          )}
        </ul>
        <div className="SingleGif-btn">
          {isInFavs ? (
            <BtnDeleteFromFavs gif={gif} />
          ) : (
            <BtnAddToFavs gif={gif} />
          )}
        </div>
      </div>
    </div>
  );
}
