import { Form } from "react-bootstrap";

const Username = ({
  email,
  SetEmail,
  password,
  SetPassword,
  confirmPassword,
  SetConfirmPassword,
}) => {
  return (
    <>
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
    </>
  );
};
export default Username;
