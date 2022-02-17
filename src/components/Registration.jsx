import { useState } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import Username from "./Username";
import User from "./User";
import Card from "./Card";
import Address from "./Address";

const Registration = () => {
  const [name, SetName] = useState("");
  const [surname, SetSurname] = useState("");
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [confirmPassword, SetConfirmPassword] = useState("");
  const [year, SetYear] = useState("");
  const [street, SetStreet] = useState("");
  const [city, SetCity] = useState("");
  const [postCode, SetPostCode] = useState("");
  const [cardNr, SetCardNr] = useState("");
  const [isFormValidated, setIsFormValidated] = useState(false);

  const handleSubmit = (event) => {};
  return (
    <Container>
      <Row>
        <Col>
          {/*handleSubmit or (event)=>{handleSubmit(event)} */}
          <Form noValidate validated={isFormValidated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <User
                name={name}
                SetName={SetName}
                surname={surname}
                SetSurname={SetSurname}
                year={year}
                SetYear={SetYear}
              />
              <Username
                email={email}
                SetEmail={SetEmail}
                password={password}
                SetPassword={SetPassword}
                confirmPassword={confirmPassword}
                SetConfirmPassword={SetConfirmPassword}
              />
              <Address
                street={street}
                SetStreet={SetStreet}
                city={city}
                SetCity={SetCity}
                postCode={postCode}
                SetPostCode={SetPostCode}
              />
              <Card cardNr={cardNr} SetCardNr={SetCardNr} />
              <Button type="submit" variant="primary">
                Submit
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
export default Registration;
