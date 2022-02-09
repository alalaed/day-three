import { Container, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";

const BookList = (props) => {
  return (
    <Container>
      <Row>
        {props.category.map((book) => (
          <SingleBook name={book.title} image={book.img} id={book.asin} />
        ))}
      </Row>
    </Container>
  );
};

export default BookList;
