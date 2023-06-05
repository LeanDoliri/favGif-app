import { AddToFavsIcon, DeleteFromFavsIcon } from "../../assets/Icons";
import { useFavs } from "../../hooks/useFavs";
import "./Buttons.css";

export function BtnAddToFavs({ gif }) {
  const { addToFavs } = useFavs();

  function handleClick() {
    addToFavs({ gif });
  }

  return (
    <div className="AddToFavsBtn" onClick={handleClick}>
      <AddToFavsIcon />
    </div>
  );
}

export function BtnDeleteFromFavs({ gif }) {
  const { deleteFromFavs } = useFavs();

  function handleClick() {
    deleteFromFavs({ gif });
  }

  return (
    <div className="DeleteFromFavs" onClick={handleClick}>
      <DeleteFromFavsIcon />
    </div>
  );
}
