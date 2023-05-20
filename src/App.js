import "./App.css";
import Navbar from "./Navbar/Navbar";
import Drinks from "./Food/Drinks";
import Slider from "./Slider/Slider";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <Drinks />
      <Footer></Footer>
    </div>
  );
}

export default App;
