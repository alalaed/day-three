import { Component } from "react";
import { Container, Row, Form } from "react-bootstrap";
import SingleBook2 from "./SingleBook";

class BookList extends Component {
  state = {
    query: "",
  };

  handleChange = (property, value) => {
    this.setState({
      [property]: value,
    });
  };

  render() {
    return (
      <div>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Search</Form.Label>
            <Form.Control
              type="text"
              placeholder="Search"
              value={this.state.query}
              onChange={(e) => this.handleChange("query", e.target.value)}
            />
          </Form.Group>
        </Form>

        <Container>
          <Row>
            {this.props.category
              .filter((b) => b.title.toLowerCase().includes(this.state.query))
              .map((book) => (
                <SingleBook2
                  name={book.title}
                  image={book.img}
                  id={book.asin}
                />
              ))}
          </Row>
        </Container>
      </div>
    );
  }
}

export default BookList;
