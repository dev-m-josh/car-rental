import { Routes, Route } from "react-router-dom";
import './App.css'
// import Cars from "./components/Cars";
// import Features from "./components/Features";
// import Footer from "./components/Footer";
// import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import NotFound from "./components/pages/NotFound";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import { Home } from "./components/pages/Home";

function App() {

  return (
      <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </>
  );
}

export default App;
