import { useGifs } from "../../hooks/useGifs";
import { Search } from "../../Components/Search/Search";
import { Title } from "../../Components/Title/Title";
import { Subtitle } from "../../Components/Subtitle/Subtitle";
import { ListOfGifs } from "../../Components/ListOfGifs/ListOfGifs";
import { Container, Row, Spinner } from "react-bootstrap";
import { FavsOffCanvas } from "../../Components/FavsOffCanvas/FavsOffCanvas";

export function SearchResults({ params }) {
  const { keyword } = params;
  const { loading, gifs } = useGifs({ keyword });

  return (
    <Container>
      <Row>
        <header className="d-flex flex-column align-items-center">
          <Title />
          <Search />
        </header>
      </Row>
      <Row>
        <main className="d-flex flex-column align-items-center container-fluid p-0">
          <Subtitle
            text={`Resultados de la búsqueda "${decodeURIComponent(
              keyword
            )}": `}
          />
          {loading ? <Spinner /> : <ListOfGifs gifs={gifs} />}
        </main>
      </Row>
      <FavsOffCanvas />
    </Container>
  );
}
