import { Component } from "react";
import { Card, Form } from "react-bootstrap";

class SingleBook extends Component {
  state = {
    selected: false,
    comment: "",
    rate: "",
    previousComments: [],
  };
  render() {
    return (
      <Card
        onClick={() => this.setState({ selected: !this.state.selected })}
        style={{
          height: "40rem",
          border: this.state.selected ? "3px red solid" : "none",
        }}
      >
        <Card.Img
          style={{ height: "20rem", objectFit: "cover" }}
          variant="top"
          src={this.props.image}
        />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          {this.state.selected && (
            <Form key={this.props.asin}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  type="text"
                  placeholder="comment"
                  value={this.state.comment}
                  onChange={(e) => this.setState({ comment: e.target.value })}
                />
                <Form.Control
                  type="text"
                  placeholder="rate"
                  value={this.state.rate}
                  onChange={(e) => this.setState({ rate: e.target.value })}
                />
              </Form.Group>
            </Form>
          )}
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
