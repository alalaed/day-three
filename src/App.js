import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WarningSign from "./components/WarningSign";
import MyBadge from "./MyBadge";
import books from "../src/data/horror.json";
// import SingleBook from "./components/SingleBook";
import BookList from "./components/BookList";
// const book = books[Math.floor(Math.random() * books.length)];

// const { img, title } = book;

function App() {
  return (
    <div className="App">
      <WarningSign string="Ali" />
      <MyBadge text="hi giorgio" color="primary" />
      {/* <SingleBook title={title} image={img} /> */}

      <BookList category={books} />
    </div>
  );
}

export default App;
