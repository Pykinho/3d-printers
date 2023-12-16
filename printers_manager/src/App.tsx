import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Materials from "./pages/Materials";
import SchedulePage from "./pages/Schedule/SchedulePage";
import Tasks from "./pages/Tasks";

import "./App.css";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        {/* <div className="page"> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/materials" element={<Materials />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/schedule" element={<SchedulePage />} />
        </Routes>
        {/* </div> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
