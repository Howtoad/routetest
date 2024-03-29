import "./App.css";
import Home from "./pages/Home";
import { Routes, Route, Link } from "react-router-dom";
import About from "./pages/About";
function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
