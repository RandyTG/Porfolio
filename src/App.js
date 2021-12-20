import "./App.css";
import { Routes, Route } from "react-router-dom";

import NavBar from "./navBar/NavBar";
import Home from "./home/Home";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
