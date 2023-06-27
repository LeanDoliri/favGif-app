import Masonry from "react-masonry-css";
import { GifCard } from "../GifCard/GifCard";
import "./ListOfGifs.css";
import { Button, Container, Spinner } from "react-bootstrap";

export function ListOfGifs({ loadingNextPage, gifs, setPage }) {
  const breakpointCols = { default: 5, 600: 2 };

  function handleClick() {
    setPage((prevPage) => prevPage + 1);
  }

  return (
    <Container className="p-0">
      <Masonry
        breakpointCols={breakpointCols}
        className="ListOfGifs my-masonry-grid m-2 pb-1"
        columnClassName="my-masonry-grid_column"
      >
        {gifs.map((gif) => (
          <GifCard key={gif.id} gif={gif} />
        ))}
      </Masonry>
      <div className=" d-flex flex-column align-items-center">
        {loadingNextPage ? <Spinner /> : ""}
        <Button onClick={handleClick} className="VerMas-btn border-0 w-50 my-3">
          Ver más
        </Button>
      </div>
    </Container>
  );
}
