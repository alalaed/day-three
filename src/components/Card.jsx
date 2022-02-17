import { Form } from "react-bootstrap";

const Card = (cardNr, SetCardNr) => {
  return (
    <>
      <Form.Control
        onChange={(e) => SetCardNr(e.target.value)}
        value={cardNr}
        required
        className="mb-2 mt-2"
        type="number"
        placeholder="Credit Card"
      />
    </>
  );
};
export default Card;
