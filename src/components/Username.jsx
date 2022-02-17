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
        style={{
          border: email.length < 3 ? "1px solid red" : "1px solid black",
        }}
        onChange={(e) => SetEmail(e.target.value)}
        value={email}
        required
        className="mb-2 mt-2"
        type="email"
        placeholder="Email"
      />
      <Form.Control
        style={{
          border: password.length < 3 ? "1px solid red" : "1px solid black",
        }}
        onChange={(e) => SetPassword(e.target.value)}
        value={password}
        required
        className="mb-2 mt-2"
        type="password"
        placeholder="Password"
      />
      <Form.Control
        style={{
          border:
            confirmPassword.length < 3 ? "1px solid red" : "1px solid black",
        }}
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
