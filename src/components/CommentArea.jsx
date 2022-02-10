import { Component } from "react";
import { Card, Form, ListGroup, Badge, Alert } from "react-bootstrap";

class Comment extends Component {
  render() {
    return (
      <Form key={this.props.id}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
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
        <ListGroup>
          <h4>Previous Comments</h4>
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
            key={this.props.asin}
          >
            <div className="ms-2 me-auto">Nice!!!</div>
            <Badge variant="primary" pill>
              14
            </Badge>
          </ListGroup.Item>
        </ListGroup>
      </Form>
    );
  }
}

export default Comment;
