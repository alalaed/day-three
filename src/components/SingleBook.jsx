import { Card, Col } from "react-bootstrap";
const SingleBook = (props) => {
  return (
    <Col md={4} key={props.branding3}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.branding2} />
        <Card.Body>
          <Card.Title>{props.branding}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleBook;
