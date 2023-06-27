import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Subtitle } from "../Subtitle/Subtitle";
import { useFavs } from "../../hooks/useFavs";
import Masonry from "react-masonry-css";
import { GifCard } from "../GifCard/GifCard";
import "./FavsOffcanvas.css";
import { CloseButton } from "react-bootstrap";

export function FavsOffCanvas() {
  const { favs } = useFavs();
  const [show, setShow] = useState(false);

  const handleShow = () => {
    const newValue = !show;
    setShow(newValue);
  };

  const FavsBtnLeft = show ? "FavsBtn-positionLeft" : "";

  return (
    <>
      <Button
        className={`${FavsBtnLeft} Favs-btn fs-1 border-0 rounded-circle shadow-lg p-1`}
        variant="primary"
        onClick={handleShow}
      >
        ❤️
      </Button>

      <Offcanvas
        className="Favs"
        placement="end"
        show={show}
      >
        <Offcanvas.Header className="py-0 px-3">
          <Offcanvas.Title>
            <Subtitle text={"My Favs Gifs: "} />
          </Offcanvas.Title>
          <CloseButton onClick={handleShow} variant="white"/>
        </Offcanvas.Header>
        <Masonry
          breakpointCols={2}
          className="ListOfFavs container p-2 mb-1 my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {favs.map((gif) => (
            <GifCard key={gif.id} gif={gif} />
          ))}
        </Masonry>
      </Offcanvas>
    </>
  );
}
