import "./App.css";
import Navbar from "./Navbar";
import Drinks from "./Drinks";
import Slider from "./Slider";
import Foods from "./Foods";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <Drinks />
      <Foods />
      <Footer></Footer>
    </div>
  );
}

export default App;
