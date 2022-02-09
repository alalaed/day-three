import { Alert } from "react-bootstrap";

const WarningSign = (props) => (
  <Alert variant={"danger"}>I am an alert !{props.string}</Alert>
);

export default WarningSign;
