import "./App.css";
<<<<<<< HEAD
import MainApp from "./app/index";
import { BrowserRouter as Router } from "react-router-dom";
=======
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
>>>>>>> e48df72864919162e79c76aa84a12beece010eae

function App() {
  return (
    <Router>
      <MainApp />
    </Router>
  );
}

export default App;
