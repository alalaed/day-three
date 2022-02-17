import { Form } from "react-bootstrap";

const Card = (cardNr, SetCardNr) => {
  return (
    <>
      <Form.Control
        style={{
          border: cardNr.length < 10 ? "1px solid red" : "1px solid black",
        }}
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
