import { Component } from "react";
import { Card, Col } from "react-bootstrap";

class SingleBook2 extends Component {
  state = {
    selected: false,
  };

  render() {
    return (
      <div>
        <Col md={6}>
          <div key={this.props.id}>
            <Card>
              <Card.Img variant="top" src={this.props.image} />
              <Card.Body
                onClick={() =>
                  this.setState({ selected: !this.state.selected })
                }
                style={{
                  border: this.state.selected ? "3px solid red " : "none",
                }}
              >
                <Card.Title>{this.props.name}</Card.Title>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </div>
    );
  }
}
export default SingleBook2;
