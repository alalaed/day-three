import { Form } from "react-bootstrap";

const User = ({ name, SetName, surname, SetSurname, year, SetYear }) => {
  return (
    <>
      <Form.Control
        style={{
          border: name.length < 2 ? "1px solid red" : "1px solid black",
        }}
        onChange={(e) => {
          SetName(e.target.value);
          console.log("isItShort");
        }}
        value={name}
        required
        className="mb-2 mt-2"
        type="text"
        placeholder="Name"
      />
      <Form.Control
        style={{
          border: surname.length < 3 ? "1px solid red" : "1px solid black",
        }}
        onChange={(e) => SetSurname(e.target.value)}
        value={surname}
        required
        className="mb-2 mt-2"
        type="text"
        placeholder="Surname"
      />
      <Form.Control
        style={{
          border: year < 1910 ? "1px solid red" : "1px solid black",
        }}
        onChange={(e) => SetYear(e.target.value)}
        value={year}
        required
        className="mb-2 mt-2"
        type="text"
        placeholder="Year of Birth"
      />
    </>
  );
};
export default User;
