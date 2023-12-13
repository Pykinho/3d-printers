import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Materials from "./pages/Materials";
import Printers from "./pages/Printers";
import Tasks from "./pages/Tasks";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/materials" element={<Materials />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/printers" element={<Printers />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
