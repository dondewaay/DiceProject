import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { Canvas } from "@react-three/fiber";
import "./App.css";

function App() {
  return (
    <>
      <div className="hero">
        <Header />
        <Main />
      </div>
      <Footer />
    </>
  );
}

export default App;
