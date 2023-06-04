import { useGifs } from "../../hooks/useGifs";
import { Search } from "../../Components/Search/Search";
import { Title } from "../../Components/Title/Title";
import { Subtitle } from "../../Components/Subtitle/Subtitle";
import { ListOfGifs } from "../../Components/ListOfGifs/ListOfGifs";
import { Spinner } from "../../Components/Spinner/Spinner";
import { Favs } from "../../Components/Favs/Favs";

export function Home() {
  const { loading, gifs } = useGifs();

  return (
    <>
      <Title />
      <Search />
      <Subtitle text={"Última búsqueda: "} />
      {loading ? <Spinner /> : <ListOfGifs gifs={gifs} />}
      <Favs />
    </>
  );
}
