import { useLocation } from "wouter";
import heart from "../../assets/heart.svg";
import "./GifCard.css";

export function GifCard({ title, id, url }) {
  const [path, pushLocation] = useLocation();
  function handleClick() {
    pushLocation(`/gif/${id}`);
  }

  return (
    <div className="GifCard">
      <img onClick={handleClick} src={url} alt={title} className="GifImg" />
      <div className="GifCard-data">
        {title !== "" ? (
          <p className="TitleGif">{title}</p>
        ) : (
          <p className="TitleGif">...</p>
        )}
        <img src={heart} alt="add to favs" className="AddToFav" />
      </div>
    </div>
  );
}
