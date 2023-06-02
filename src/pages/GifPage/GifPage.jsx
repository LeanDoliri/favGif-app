import { Search } from "../../Components/Search/Search";
import { Title } from "../../Components/Title/Title";
import { Spinner } from "../../Components/Spinner/Spinner";
import { useGifById } from "../../hooks/useGifByID";
import { Subtitle } from "../../Components/Subtitle/Subtitle";

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
        <div>
          <Subtitle text={gif.title}/>
          <img src={gif.url} alt={gif.title}/>
        </div>
      )}
    </>
  );
}
