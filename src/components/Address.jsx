import { Form } from "react-bootstrap";

const Address = ({
  street,
  SetStreet,
  city,
  SetCity,
  postCode,
  SetPostCode,
}) => {
  return (
    <>
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
    </>
  );
};
export default Address;
