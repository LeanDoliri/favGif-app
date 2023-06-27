import { Search } from "../../Components/Search/Search";
import { Title } from "../../Components/Title/Title";
import { useGifById } from "../../hooks/useGifByID";
import { Subtitle } from "../../Components/Subtitle/Subtitle";
import { SingleGif } from "../../Components/SingleGif/SingleGif";
import { Container, Row, Spinner } from "react-bootstrap";
import { FavsOffCanvas } from "../../Components/FavsOffCanvas/FavsOffCanvas";
import { TrendingSearch} from "../../Components/TrendingSearch/TrendingSearch";

export function GifPage({ params }) {
  const { id } = params;
  const { loading, gif } = useGifById({ id });

  return (
    <Container>
      <Row>
        <header className="d-flex flex-column align-items-center">
          <Title />
          <Search />
        </header>
      </Row>
      <Row>
        <main className="d-flex flex-column align-items-center container-fluid p-3">
          {loading ? (
            <Spinner />
          ) : (
            <>
              <Subtitle text={gif.title} />
              <SingleGif gif={gif} />
            </>
          )}

          <Subtitle text={"Tendencias: "} />
          <TrendingSearch />
        </main>
      </Row>
      <FavsOffCanvas />
    </Container>
  );
}
