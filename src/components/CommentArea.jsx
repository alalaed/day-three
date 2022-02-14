import { Component } from "react";
import { Modal, Alert, Button, ListGroup, Badge, Form } from "react-bootstrap";

class CommentArea extends Component {
  state = {
    comments: {
      comment: "",
      rate: "",
      elementId: "",
    },

    previousComments: [],
  };

  getApi = async () => {
    let httpFetch =
      "https://striveschool-api.herokuapp.com/api/comments/" + this.props.id;
    try {
      let response = await fetch(httpFetch, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWZhNjM5OTgyZWExZDAwMTViYjAzZTkiLCJpYXQiOjE2NDM3OTk0NTAsImV4cCI6MTY0NTAwOTA1MH0.5dZKYBo7eP4on-pcM8VC0B42JNHHlwPOAqk70FWRG1M",
        },
      });
      if (response.ok) {
        let data = await response.json();
        this.setState({ ...this.state, previousComments: data });
        console.log(this.state.previousComments);
      } else {
        <Alert variant="danger">OOPS!!!</Alert>;
      }
    } catch (error) {
      console.log(error);
    }
  };
  componentDidMount = async () => {
    this.getApi();
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.id !== this.props.id) {
      this.getApi();
    }
  };

  handleSubmit = (e) => {
    // e.preventDefault();
    let httpFetch = "https://striveschool-api.herokuapp.com/api/comments/";
    fetch(httpFetch, {
      method: "POST",
      body: JSON.stringify({
        comment: this.state.comment,
        rate: this.state.rate,
        elementId: this.props.id,
      }),
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWZhNjM5OTgyZWExZDAwMTViYjAzZTkiLCJpYXQiOjE2NDM3OTk0NTAsImV4cCI6MTY0NTAwOTA1MH0.5dZKYBo7eP4on-pcM8VC0B42JNHHlwPOAqk70FWRG1M",
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  render() {
    return (
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Reviews</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <ListGroup>
            {this.state.previousComments.map((comment) => (
              <ListGroup.Item key={comment._id}>
                {comment.comment}
                <Badge variant="primary" pill>
                  {comment.rate}
                </Badge>
              </ListGroup.Item>
            ))}
          </ListGroup>

          <Form.Control
            type="text"
            placeholder="comment"
            value={this.state.comment}
            onChange={(e) =>
              this.setState({ ...this.state, comment: e.target.value })
            }
          />
          <Form.Control
            type="text"
            placeholder="rate"
            value={this.state.rate}
            onChange={(e) =>
              this.setState({ ...this.state, rate: e.target.value })
            }
          />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" onClick={(e) => this.handleSubmit(e)}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    );
  }
}
export default CommentArea;
