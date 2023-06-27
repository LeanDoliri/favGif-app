import { Search } from "../../Components/Search/Search";
import { Title } from "../../Components/Title/Title";
import { Subtitle } from "../../Components/Subtitle/Subtitle";
import { ListOfGifs } from "../../Components/ListOfGifs/ListOfGifs";
import { Container, Row } from "react-bootstrap";
import { FavsOffCanvas } from "../../Components/FavsOffCanvas/FavsOffCanvas";
import { useTrending } from "../../hooks/useTrending";
import { TrendingSearch } from "../../Components/TrendingSearch/TrendingSearch";

export function Home() {
  const { loadingNextPage, gifs, setPage } = useTrending();
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
          <Subtitle text={"↗️ Tendencias: "} />
          <TrendingSearch />
          <ListOfGifs
            gifs={gifs}
            setPage={setPage}
            loadingNextPage={loadingNextPage}
          />
        </main>
      </Row>
      <FavsOffCanvas />
    </Container>
  );
}
