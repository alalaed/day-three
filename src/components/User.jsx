import { Form } from "react-bootstrap";

const User = ({ name, SetName, surname, SetSurname, year, SetYear }) => {
  return (
    <>
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
        onChange={(e) => SetYear(e.target.value)}
        value={year}
        required
        className="mb-2 mt-2"
        type="date"
        placeholder="Year of Birth"
      />
    </>
  );
};
export default User;
