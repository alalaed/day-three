import { Component } from "react";
import { Modal, Alert, Button, ListGroup, Badge } from "react-bootstrap";

class CommentArea extends Component {
  componentDidMount = async () => {
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
      } else {
        <Alert variant="danger">OOPS!!!</Alert>;
      }
    } catch (error) {
      console.log(error);
    }
  };

  state = {
    previousComments: [],
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
              <ListGroup.Item>
                {comment.comment}
                <Badge variant="primary" pill>
                  {comment.rate}
                </Badge>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    );
  }
}
export default CommentArea;
