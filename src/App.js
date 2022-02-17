import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import WarningSign from "./components/WarningSign";
// import MyBadge from "./MyBadge";
import books from "../src/data/horror.json";
// import SingleBook from "./components/SingleBook";
import BookList from "./components/BookList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registration from "./components/Registration";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/registration" element={<Registration />} />
          <Route path="/" element={<BookList array={books} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
