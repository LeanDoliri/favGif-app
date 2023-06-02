import { useState } from "react";
import { useLocation } from "wouter";
import "./Search.css";
import searchIcon from "../../assets/search.svg"

export function Search() {
  const [keyword, setKeword] = useState();

  // eslint-disable-next-line
  const [path, pushLocation] = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (keyword) {
      pushLocation(`/search/${keyword}`);
    }
  };

  const handleChange = (e) => {
    setKeword(e.target.value);
  };

  return (
    <form className="Search" onSubmit={handleSubmit}>
      <input
        className="Search-Input"
        type="text"
        value={keyword}
        placeholder="Search gifs..."
        onChange={handleChange}
      />
      <button className="Search-Btn">
        <img src={searchIcon} alt="searchIcon" />
      </button>
    </form>
  );
}
