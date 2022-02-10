import { Component } from "react";
import { Card, Form, ListGroup, Badge, Alert } from "react-bootstrap";

class SingleBook extends Component {
  state = {
    selected: false,
    comment: "",
    rate: "",
    id: "",
    previousComments: [],
  };

  componentDidMount = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWZhNjM5OTgyZWExZDAwMTViYjAzZTkiLCJpYXQiOjE2NDM3OTk0NTAsImV4cCI6MTY0NTAwOTA1MH0.5dZKYBo7eP4on-pcM8VC0B42JNHHlwPOAqk70FWRG1M",
          },
        }
      );
      if (response.ok) {
        let data = await response.json();
        this.setState({
          previousComments: data,
        });
      } else {
        <Alert variant="danger">OOPS!!!</Alert>;
      }
    } catch (error) {
      console.log(error);
    }
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
          )}
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
