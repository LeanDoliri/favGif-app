import { useLocation } from "wouter";
import "./GifCard.css";

export function GifCard({ title, id, url }) {
  const [path, pushLocation] = useLocation();
  function handleClick() {
    pushLocation(`/gif/${id}`);
  }

  return (
    <div onClick={handleClick} className="GifCard">
      {title !== "" ? (
        <p className="TitleGif">{title}</p>
      ) : (
        <p className="TitleGif">...</p>
      )}
      <img src={url} alt={title} className="GifImg" />
    </div>
  );
}
