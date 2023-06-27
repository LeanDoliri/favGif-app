import "./GifCard.css";
import { BtnAddToFavs, BtnDeleteFromFavs } from "../Buttons/Buttons";
import { useFavs } from "../../hooks/useFavs";
import { Card } from "react-bootstrap";

export function GifCard({ gif }) {
  const { id, title, url } = gif;
  const { favs } = useFavs();

  function checkGifInFavs({ id }) {
    return favs.some((gif) => gif.id === id);
  }

  const isInFavs = checkGifInFavs({ id: gif.id });

  return (
    <Card className="border-0">
      <a href={`/gif/${id}`}>
        <Card.Img
          variant="top"
          type="button"
          src={url}
          alt={title}
        />
      </a>
      <Card.Body className="GifCard-data rounded-bottom d-flex align-items-center justify-content-between p-1">
        <Card.Title className="text-light fs-6 fw-normal text-truncate ps-1 m-0">
          {title}
        </Card.Title>
        {isInFavs ? (
          <BtnDeleteFromFavs gif={gif} />
        ) : (
          <BtnAddToFavs gif={gif} />
        )}
      </Card.Body>
    </Card>
  );
}
