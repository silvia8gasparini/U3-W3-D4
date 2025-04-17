import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { addToFavouritesAction } from "../redux/actions";

const Job = ({ data }) => {
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.favourites.list);

  const handleAddToFavourites = () => {
    dispatch(addToFavouritesAction(data.company_name));
  };

  const isFavourite = favourites.includes(data.company_name);

  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: "1px solid #00000033", borderRadius: 4 }}
    >
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={6}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
      <Col xs={3} className="text-end">
        {!isFavourite && (
          <Button variant="outline-primary" onClick={handleAddToFavourites}>
            <i className="bi bi-star me-2"></i> Add
          </Button>
        )}
      </Col>
    </Row>
  );
};

export default Job;
