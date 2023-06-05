import { Search } from "../../Components/Search/Search";
import { Title } from "../../Components/Title/Title";
import { Spinner } from "../../Components/Spinner/Spinner";
import { useGifById } from "../../hooks/useGifByID";
import { Subtitle } from "../../Components/Subtitle/Subtitle";
import { SingleGif } from "../../Components/SingleGif/SingleGif";
import { Favs } from "../../Components/Favs/Favs";

export function GifPage({ params }) {
  const { id } = params;
  const { loading, gif } = useGifById({ id });

  return (
    <>
      <Title />
      <Search />
      {loading ? (
      <Spinner />
      ) : (
        <main>
          <Subtitle text={gif.title}/>
          <SingleGif gif={gif} />
        </main>
      )}
      <Favs />
    </>
  );
}
