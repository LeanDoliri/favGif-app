import { Spinner } from "react-bootstrap";
import { useTrendingSearch } from "../../hooks/useTrendingSearch";
import { useLocation } from "wouter";
import "./TrendingSearch.css"

export function TrendingSearch() {
  const { loading, trendingSearch } = useTrendingSearch();

  const [path, pushLocation] = useLocation();
  function handleClick({ string }) {
    pushLocation(`/search/${string}`);
  }

  return (
    <div className="d-flex gap-2 flex-wrap justify-content-center align-items-center fs-6 px-2 mb-3">
      {loading ? (
        <Spinner />
      ) : (
        trendingSearch.map((string) => (
          <span
            key={`trending-${string}`}
            onClick={() => handleClick({ string })}
            type="button"
            className="BadgeTrending rounded-pill px-3"
          >
            {string}
          </span>
        ))
      )}
    </div>
  );
}
