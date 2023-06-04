import "./Favs.css";
import { useId } from "react";
import { FavsIcon } from "../../assets/Icons";

export function Favs() {
  const favsCheckBoxId = useId();
  return (
    <>
      <label htmlFor={favsCheckBoxId} className="Favs-btn">
        <FavsIcon />
      </label>
      <input id={favsCheckBoxId} type="checkbox" hidden />
      <aside className="Favs">
        <h1>My Favs Gifs</h1>
        <ul>
          <li>
            <img
              src="https://media0.giphy.com/media/KDnxbHF3N7EDKhZIGE/giphy.gif?cid=5150c85b1t4zildknm1bota2dk1ndgnxgx7mr22o6qc2o377&ep=v1_gifs_search&rid=giphy.gif&ct=g"
              alt=""
            />
          </li>
        </ul>
      </aside>
    </>
  );
}
