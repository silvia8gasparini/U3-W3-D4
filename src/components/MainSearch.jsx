import { useState } from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Job from "./Job";
import { useDispatch, useSelector } from "react-redux";
import { fetchResultsAction } from "../redux/actions";

const MainSearch = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const jobs = useSelector((state) => state.results.jobs);
  const isLoading = useSelector((state) => state.results.isLoading);
  const isError = useSelector((state) => state.results.isError);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      dispatch(fetchResultsAction(query));
    }
  };

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1">Remote Jobs Search</h1>
        </Col>
        <Col xs={10} className="mx-auto mb-3">
          <Link to="/favourites">
            <Button variant="warning">
              <i className="bi bi-star me-2 "></i>
              View Favourites
            </Button>
          </Link>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="Type and press Enter"
            />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {isLoading && <p className="text-info">Loading jobs...</p>}
          {isError && (
            <p className="text-danger">There was an error fetching results.</p>
          )}
          {!isLoading && !isError && jobs.length === 0 && (
            <p className="text-muted">Start typing to find a job!</p>
          )}
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
