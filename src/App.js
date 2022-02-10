import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import WarningSign from "./components/WarningSign";
// import MyBadge from "./MyBadge";
import books from "../src/data/horror.json";
// import SingleBook from "./components/SingleBook";
import BookList from "./components/BookList";

function App() {
  return (
    <div className="App">
      {/* <WarningSign string="Ali" />
      <MyBadge text="hi Ali" color="primary" /> */}

      <BookList array={books} />
    </div>
  );
}

export default App;
