import { Card } from "react-bootstrap";

const SingleBook = ({ bookTitle, bookId, bookChangeId, bookImage }) => {
  return (
    <Card onClick={(e) => bookChangeId(bookId)}>
      <Card.Img variant="top" src={bookImage} />
      <Card.Body>
        <Card.Title>{bookTitle}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default SingleBook;
