import { Col, Container, Row, Form, Button } from "react-bootstrap";

const Registration = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                className="mb-2 mt-2"
                type="text"
                placeholder="Name"
              />
              <Form.Control
                className="mb-2 mt-2"
                type="text"
                placeholder="Surname"
              />
              <Form.Control
                className="mb-2 mt-2"
                type="email"
                placeholder="Email"
              />
              <Form.Control
                className="mb-2 mt-2"
                type="password"
                placeholder="Password"
              />
              <Form.Control
                className="mb-2 mt-2"
                type="password"
                placeholder="Password Confirm"
              />
              <Form.Control
                className="mb-2 mt-2"
                type="date"
                placeholder="Year of Birth"
              />
              <Form.Control
                className="mb-2 mt-2"
                type="text"
                placeholder="Address"
              />
              <Form.Control
                className="mb-2 mt-2"
                type="text"
                placeholder="City"
              />
              <Form.Control
                className="mb-2 mt-2"
                type="number"
                placeholder="Post Code"
              />
              <Form.Control
                className="mb-2 mt-2"
                type="number"
                placeholder="Credit Card"
              />
            </Form.Group>
            <Button variant="primary">Submit</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
export default Registration;
