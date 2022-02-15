import { useState } from "react";
import SingleBook from "./SingleBook";
import { Container, Row, Col, Form } from "react-bootstrap";
import CommentArea from "./CommentArea";

const BookList = ({ array }) => {
  // state = {
  //   query: "",
  //   id: null,
  // };

  const [query, setQuery] = useState("");
  const [id, setID] = useState(null);

  const changeId = (bookId) => {
    // this.setState({ ...this.state, id: bookId });
    setID(bookId);
  };

  return (
    <Container>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Search</Form.Label>
          <Form.Control
            type="text"
            placeholder="Search"
            // value={this.setState.query}
            value={query}
            // onChange={(e) => this.setState({ query: e.target.value })}
            onChange={(e) => setQuery(e.target.value)}
          />
        </Form.Group>
      </Form>
      <Row>
        <Col xs={9}>
          <Row>
            {array
              .filter((b) => b.title.toLowerCase().includes(query))
              .map((book) => (
                <Col md={4} key={book.asin}>
                  <SingleBook
                    bookChangeId={changeId}
                    bookTitle={book.title}
                    bookImage={book.img}
                    bookId={book.asin}
                  />
                </Col>
              ))}
          </Row>
        </Col>
        <Col xs={3}>
          <CommentArea id={id} />
        </Col>
      </Row>
    </Container>
  );
};

export default BookList;
