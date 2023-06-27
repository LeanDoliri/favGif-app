import { useEffect, useState } from "react";
import { getTrendingSearch } from "../services/apiGif";

export function useTrendingSearch() {
  const [loading, setLoading] = useState(false);
  const [trendingSearch, setTrendingSearch] = useState([]);

  useEffect(() => {
    setLoading(true);
    getTrendingSearch().then((res) => {
      setTrendingSearch(res);
      setLoading(false);
    });
  }, []);

  return { loading, trendingSearch };
}
