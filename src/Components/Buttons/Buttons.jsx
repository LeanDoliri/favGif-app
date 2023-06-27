import { useFavs } from "../../hooks/useFavs";
import "./Buttons.css";

export function BtnAddToFavs({ gif }) {
  const { addToFavs } = useFavs();

  function handleClick() {
    addToFavs({ gif });
  }

  return (
    <span type="button" className="isInFavs text-nowrap" onClick={handleClick}>
      ➕❤️
    </span>
  );
}

export function BtnDeleteFromFavs({ gif }) {
  const { deleteFromFavs } = useFavs();

  function handleClick() {
    deleteFromFavs({ gif });
  }

  return (
    <span type="button" className="isInFavs text-nowrap" onClick={handleClick}>
      ✅❤️
    </span>
  );
}
