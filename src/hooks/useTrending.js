import { useEffect, useState } from "react";
import { getTrending } from "../services/apiGif";

export function useTrending() {
  const [loading, setLoading] = useState(false);
  const [loadingNextPage, setLoadingNextPage] = useState(false);
  const [page, setPage] = useState(0);
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    setLoading(true);

    getTrending().then((gifs) => {
      setGifs(gifs);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    if (page === 0 ) return 
    
    setLoadingNextPage(true);

    getTrending({ page }).then((nextGifs) => {
      setGifs(prevGifs => prevGifs.concat(nextGifs));
      setLoadingNextPage(false);
    });
  }, [page]);

  return { loading, loadingNextPage, gifs, setPage };
}
