import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AvailableBus from "./pages/AvailableBus";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/AvailableBus" element={<AvailableBus />} />
    </Routes>
  );
}

export default App;