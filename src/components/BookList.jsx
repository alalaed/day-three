import { Container, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";

const BookList = (props) => {
  return (
    <Container>
      <Row>
        {props.branding4.map((book) => (
          <SingleBook
            branding={book.title}
            branding2={book.img}
            branding3={book.id}
          />
        ))}
      </Row>
    </Container>
  );
};

export default BookList;
