import { useState } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";

const Registration = () => {
  const [name, SetName] = useState();
  const [surname, SetSurname] = useState();
  const [email, SetEmail] = useState();
  const [password, SetPassword] = useState();
  const [confirmPassword, SetConfirmPassword] = useState();
  const [year, SetYear] = useState();
  const [street, SetStreet] = useState();
  const [city, SetCity] = useState();
  const [postCode, SetPostCode] = useState();
  const [cardNr, SetCardNr] = useState();

  const handleSubmit = () => {};
  return (
    <Container>
      <Row>
        <Col>
          <Form>
            <Form.Group
              onSubmit={() => handleSubmit()}
              className="mb-3"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Control
                onChange={(e) => SetName(e.target.value)}
                value={name}
                required
                className="mb-2 mt-2"
                type="text"
                placeholder="Name"
              />
              <Form.Control
                onChange={(e) => SetSurname(e.target.value)}
                value={surname}
                required
                className="mb-2 mt-2"
                type="text"
                placeholder="Surname"
              />
              <Form.Control
                onChange={(e) => SetEmail(e.target.value)}
                value={email}
                required
                className="mb-2 mt-2"
                type="email"
                placeholder="Email"
              />
              <Form.Control
                onChange={(e) => SetPassword(e.target.value)}
                value={password}
                required
                className="mb-2 mt-2"
                type="password"
                placeholder="Password"
              />
              <Form.Control
                onChange={(e) => SetConfirmPassword(e.target.value)}
                value={confirmPassword}
                required
                className="mb-2 mt-2"
                type="password"
                placeholder="Password Confirm"
              />
              <Form.Control
                onChange={(e) => SetYear(e.target.value)}
                value={year}
                required
                className="mb-2 mt-2"
                type="date"
                placeholder="Year of Birth"
              />
              <Form.Control
                onChange={(e) => SetStreet(e.target.value)}
                value={street}
                required
                className="mb-2 mt-2"
                type="text"
                placeholder="Address"
              />
              <Form.Control
                onChange={(e) => SetCity(e.target.value)}
                value={city}
                required
                className="mb-2 mt-2"
                type="text"
                placeholder="City"
              />
              <Form.Control
                onChange={(e) => SetPostCode(e.target.value)}
                value={postCode}
                required
                className="mb-2 mt-2"
                type="number"
                placeholder="Post Code"
              />
              <Form.Control
                onChange={(e) => SetCardNr(e.target.value)}
                value={cardNr}
                required
                className="mb-2 mt-2"
                type="number"
                placeholder="Credit Card"
              />
            </Form.Group>
            <Button type="submit" variant="primary">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
export default Registration;
