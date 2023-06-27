import { useGifs } from "../../hooks/useGifs";
import { Search } from "../../Components/Search/Search";
import { Title } from "../../Components/Title/Title";
import { Subtitle } from "../../Components/Subtitle/Subtitle";
import { ListOfGifs } from "../../Components/ListOfGifs/ListOfGifs";
import { Container, Row, Spinner } from "react-bootstrap";
import { FavsOffCanvas } from "../../Components/FavsOffCanvas/FavsOffCanvas";


export function Home() {
  const { loading, gifs } = useGifs();

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
          <Subtitle text={"Última búsqueda: "} />
          {loading ? <Spinner /> : <ListOfGifs gifs={gifs} />}
        </main>
      </Row>
      <FavsOffCanvas />
    </Container>
  );
}
