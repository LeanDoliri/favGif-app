import { useEffect, useState } from "react";
import { getTrending } from "../services/apiGif";

export function useTrending() {
  const [loading, setLoading] = useState(false);
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    setLoading(true);

    getTrending().then((gifs) => {
      setGifs(gifs);
      setLoading(false);
      localStorage.setItem("lastKeyword", keyword);
    });
  }, []);

  return { loading, gifs };
}
