import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { removeFromFavouritesAction } from "../redux/actions";

const Favourites = () => {
  const favourites = useSelector((state) => state.favourites.list);
  const dispatch = useDispatch();

  const handleRemove = (company) => {
    dispatch(removeFromFavouritesAction(company));
  };

  return (
    <Container>
      <Row>
        <Col className="my-3">
          <h1 className="display-4">Your Favourite Companies</h1>
          {favourites.length === 0 ? (
            <p>No favourites yet</p>
          ) : (
            favourites.map((company) => (
              <Row
                key={company}
                className="mx-0 mt-3 p-3"
                style={{ border: "1px solid #00000033", borderRadius: 4 }}
              >
                <Col xs={8}>
                  <Link to={`/${company}`}>{company}</Link>
                </Col>
                <Col xs={4} className="text-end">
                  <Button
                    variant="outline-danger"
                    onClick={() => handleRemove(company)}
                  >
                    <i className="bi bi-x-lg"></i> Remove
                  </Button>
                </Col>
              </Row>
            ))
          )}
        </Col>
        <Col xs={12} className="mb-3">
          <Link to="/">
            <Button variant="light">Back to Search</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Favourites;
