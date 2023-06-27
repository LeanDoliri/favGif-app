import { useEffect, useState } from "react";
import { getGifs } from "../services/apiGif";

export function useGifs({ keyword }) {
  const [loading, setLoading] = useState(false);
  const [loadingNextPage, setLoadingNextPage] = useState(false);
  const [page, setPage] = useState(0);
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    setLoading(true);

    getGifs({ keyword }).then((gifs) => {
      setGifs(gifs);
      setLoading(false);
    });
  }, [keyword]);

  useEffect(() => {
    if (page === 0) return;

    setLoadingNextPage(true);

    getGifs({ keyword, page }).then((nextGifs) => {
      setGifs((prevGifs) => prevGifs.concat(nextGifs));
      setLoadingNextPage(false);
    });
  }, [keyword, page]);

  return { loading, loadingNextPage, gifs, setPage };
}
