import { GifCard } from "../GifCard/GifCard";
import "./ListOfGifs.css"

export function ListOfGifs({ gifs }) {
  return (
    <main className="ListOfGifs">
      {gifs.map((gif) => (
        <GifCard key={gif.id} id={gif.id} title={gif.title} url={gif.url} />
      ))}
    </main>
  );
}
