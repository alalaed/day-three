import { Badge } from "react-bootstrap";

const MyBadge = (props) => (
  <h1>
    <Badge variant={props.color}>{props.text}</Badge>
  </h1>
);

export default MyBadge;
