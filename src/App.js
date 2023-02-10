import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "../src/components/pages/HomePage";
import AvailableBus from "../src/components/pages/AvailableBus";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/AvailableBus" element={<AvailableBus />} />
    </Routes>
  );
}

export default App;