import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WarningSign from "./components/WarningSign";

function App() {
  return (
    <div className="App">
      <WarningSign string="Ali" />
    </div>
  );
}

export default App;
