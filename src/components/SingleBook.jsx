import { Card, Col } from "react-bootstrap";
const SingleBook = (props) => {
  return (
    <Col md={6}>
      <div key={props.id}>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={props.image} />
          <Card.Body>
            <Card.Title>{props.name}</Card.Title>
          </Card.Body>
        </Card>
      </div>
    </Col>
  );
};

export default SingleBook;
