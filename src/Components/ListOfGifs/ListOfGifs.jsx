import Masonry from "react-masonry-css";
import { GifCard } from "../GifCard/GifCard";
import "./ListOfGifs.css";

export function ListOfGifs({ gifs }) {
  const breakpointCols = { default: 5, 600: 2 };

  return (
    <main>
      <Masonry
        breakpointCols={breakpointCols}
        className="ListOfGifs my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {gifs.map((gif) => (
          <GifCard key={gif.id} gif={gif} />
        ))}
      </Masonry>
    </main>
  );
}
