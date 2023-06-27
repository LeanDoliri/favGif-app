import Masonry from "react-masonry-css";
import { GifCard } from "../GifCard/GifCard";
import "./ListOfGifs.css";
import { Container } from "react-bootstrap";

export function ListOfGifs({ gifs }) {
  const breakpointCols = { default: 5, 600: 2 };

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
    </Container>
  );
}
