import { Col, Container, Image, Row } from "react-bootstrap";
import { useFavs } from "../../hooks/useFavs";
import { BtnAddToFavs, BtnDeleteFromFavs } from "../Buttons/Buttons";
import "./SingleGif.css";

export function SingleGif({ gif }) {
  const { title, url, username, source } = gif;
  const { favs } = useFavs();

  function checkGifInFavs({ id }) {
    return favs.some((gif) => gif.id === id);
  }

  const isInFavs = checkGifInFavs({ id: gif.id });

  return (
    <Container>
      <Row className="flex-column align-items-center">
        <Col xs={12} md={6}>
          <Image src={url} alt={title} className="w-100 rounded-top" />
          <Container className="SingleGif-data d-flex flex-column align-items-start rounded-bottom p-3 m-0">
            {title != "" ? (
              <h4 className="text-start fw-normal p-0 m-0">
                <strong className="fw-bold">Title: </strong>
                {title}
              </h4>
            ) : (
              ""
            )}
            <div>
              {username != "" ? (
                <p className="p-0 m-0">
                  <strong className="fw-bold">Username: </strong>
                  {username}
                </p>
              ) : (
                ""
              )}
              {source != "" ? (
                <p className="text-break p-0 m-0">
                  <strong className="fw-bold">Source: </strong>
                  <a href={source} target="_blank">
                    {source}
                  </a>
                </p>
              ) : (
                ""
              )}
            </div>
            {isInFavs ? (
              <BtnDeleteFromFavs gif={gif} />
            ) : (
              <BtnAddToFavs gif={gif} />
            )}
          </Container>
        </Col>
      </Row>
    </Container>
  );
}
