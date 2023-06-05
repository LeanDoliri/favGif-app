import { GifCard } from "../GifCard/GifCard";
import "./ListOfGifs.css";

export function ListOfGifs({ gifs }) {
  return (
    <main>
      <ul className="ListOfGifs">
        {gifs.map((gif) => (
          <GifCard key={gif.id} gif={gif} />
        ))}
      </ul>
    </main>
  );
}
