import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Roll from "./pages/Roll"
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/roll" element={<Roll />} />
      </Routes>
    </>
  );
}

export default App;
