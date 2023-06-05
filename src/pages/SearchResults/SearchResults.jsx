import { useGifs } from "../../hooks/useGifs";
import { Search } from "../../Components/Search/Search";
import { Title } from "../../Components/Title/Title";
import { Subtitle } from "../../Components/Subtitle/Subtitle";
import { ListOfGifs } from "../../Components/ListOfGifs/ListOfGifs";
import { Spinner } from "../../Components/Spinner/Spinner";
import { Favs } from "../../Components/Favs/Favs";

export function SearchResults({ params }) {
  const { keyword } = params;
  const { loading, gifs } = useGifs({ keyword });

  return (
    <>
      <Title />
      <Search />
      <Subtitle text={`Resultados de la búsqueda "${keyword}": `} />
      {loading ? <Spinner /> : <ListOfGifs gifs={gifs} />}
      <Favs />
    </>
  );
}
