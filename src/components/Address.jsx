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
        style={{
          border: street.length < 3 ? "1px solid red" : "1px solid black",
        }}
        onChange={(e) => SetStreet(e.target.value)}
        value={street}
        required
        className="mb-2 mt-2"
        type="text"
        placeholder="Address"
      />
      <Form.Control
        style={{
          border: city.length < 3 ? "1px solid red" : "1px solid black",
        }}
        onChange={(e) => SetCity(e.target.value)}
        value={city}
        required
        className="mb-2 mt-2"
        type="text"
        placeholder="City"
      />
      <Form.Control
        style={{
          border: postCode.length < 3 ? "1px solid red" : "1px solid black",
        }}
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
