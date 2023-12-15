import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./componet/Navbar";
const Home = () => (
  <div className="font-bold text-4xl my-4 text-gray-700 text-center">
    Home Page
  </div>
);
const About = () => (
  <div className="font-bold text-4xl my-4 text-gray-700 text-center">
    About Page
  </div>
);
const Contact = () => (
  <div className="font-bold text-4xl my-4 text-gray-700 text-center">
    Contact Page
  </div>
);

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
