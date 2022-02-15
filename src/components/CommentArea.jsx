import { useEffect, useState } from "react";
import { Modal, Alert, Button, ListGroup, Badge, Form } from "react-bootstrap";

const CommentArea = ({ id }) => {
  // state = {
  //   comments: {
  //     comment: "",
  //     rate: "",
  //     elementId: "",
  //   },

  //   previousComments: [],
  // };

  const [comments, setComments] = useState({
    comment: "",
    rate: "",
    elementId: "",
  });

  const [previousComments, setPreviousComments] = useState([]);

  const getApi = async () => {
    let httpFetch = "https://striveschool-api.herokuapp.com/api/comments/" + id;
    try {
      let response = await fetch(httpFetch, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWZhNjM5OTgyZWExZDAwMTViYjAzZTkiLCJpYXQiOjE2NDM3OTk0NTAsImV4cCI6MTY0NTAwOTA1MH0.5dZKYBo7eP4on-pcM8VC0B42JNHHlwPOAqk70FWRG1M",
        },
      });
      if (response.ok) {
        let data = await response.json();
        // this.setState({ ...this.state, previousComments: data });
        setPreviousComments(data);
      } else {
        <Alert variant="danger">OOPS!!!</Alert>;
      }
    } catch (error) {
      console.log(error);
    }
  };
  // componentDidMount = async () => {
  //   this.getApi();
  // };

  useEffect(() => getApi(), []);

  // componentDidUpdate = (prevProps, prevState) => {
  //   if (prevProps.chosenId !== this.props.chosenId) {
  //     this.getApi();
  //   }
  // };

  useEffect(() => getApi(), [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let httpFetch = "https://striveschool-api.herokuapp.com/api/comments/";
    fetch(httpFetch, {
      method: "POST",
      body: JSON.stringify({
        comment: comments.comment,
        rate: comments.rate,
        elementId: id,
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

  return (
    <Modal.Dialog>
      <Modal.Header closeButton>
        <Modal.Title>Reviews</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <ListGroup>
          {previousComments.map((comment) => (
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
          value={comments.comment}
          onChange={(e) =>
            // this.setState({ ...this.state, comment: e.target.value })
            setComments(...comments, { comment: e.target.value })
          }
        />
        <Form.Control
          type="text"
          placeholder="rate"
          value={comments.rate}
          onChange={(e) =>
            // this.setState({ ...this.state, rate: e.target.value })
            setComments(...comments, { rate: e.target.value })
          }
        />
      </Modal.Body>

      <Modal.Footer>
        <Button variant="primary" onClick={(e) => handleSubmit(e)}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal.Dialog>
  );
};
export default CommentArea;
