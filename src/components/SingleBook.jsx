import { Component } from "react";
import { Card } from "react-bootstrap";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  render() {
    return (
      <Card
        style={{
          minHeight: "40rem",
          border: this.state.selected ? "3px red solid" : "none",
        }}
      >
        <Card.Img
          onClick={() =>
            this.setState({ ...this.state, selected: !this.state.selected })
          }
          style={{ objectFit: "cover" }}
          variant="top"
          src={this.props.image}
        />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
        </Card.Body>
        {this.state.selected && <CommentArea id={this.props.id} />}
      </Card>
    );
  }
}

export default SingleBook;
