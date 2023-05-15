import "./App.css";
import Navbar from "./Navbar";
import Drinks from "./Drinks";
import Slider from "./Slider";
import Foods from "./Foods";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <Drinks />
      <Foods />
    </div>
  );
}

export default App;
