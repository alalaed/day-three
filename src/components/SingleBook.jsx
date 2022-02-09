import { Card, Col } from "react-bootstrap";
const SingleBook = (props) => {
  return (
    <Col md={6}>
      <div key={props.branding3}>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={props.branding2} />
          <Card.Body>
            <Card.Title>{props.branding}</Card.Title>
          </Card.Body>
        </Card>
      </div>
    </Col>
  );
};

export default SingleBook;
