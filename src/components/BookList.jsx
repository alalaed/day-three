import { Component } from "react";
import SingleBook from "./SingleBook";
import { Container, Row, Col, Form } from "react-bootstrap";

class BookList extends Component {
  state = {
    query: "",
  };

  render() {
    return (
      <Container>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Search</Form.Label>
            <Form.Control
              type="text"
              placeholder="Search"
              value={this.setState.query}
              onChange={(e) => this.setState({ query: e.target.value })}
            />
          </Form.Group>
        </Form>
        <Row>
          {this.props.array
            .filter((b) => b.title.toLowerCase().includes(this.state.query))
            .map((book) => (
              <Col md={4} key={book.asin}>
                <SingleBook
                  title={book.title}
                  image={book.img}
                  id={book.asin}
                />
              </Col>
            ))}
        </Row>
      </Container>
    );
  }
}

export default BookList;
