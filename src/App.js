import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WarningSign from "./components/WarningSign";
import MyBadge from "./MyBadge";

function App() {
  return (
    <div className="App">
      <WarningSign string="Ali" />
      <MyBadge text="This is Ali" color="primary" />
    </div>
  );
}

export default App;
