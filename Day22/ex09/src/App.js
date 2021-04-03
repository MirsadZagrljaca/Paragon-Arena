// src/App.js
import logo from "./logo.svg";
import "./App.css";
import Flower from "./Flower";

function App() {
  const color = "red";

  return (
    <div className="App">
      <Flower color={color} />
    </div>
  );
}

export default App;
