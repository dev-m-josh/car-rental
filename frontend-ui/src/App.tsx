import { Routes, Route } from "react-router-dom";
import './App.css'
import Profile from "./components/pages/Profile";
import Navbar from "./components/Navbar";
import NotFound from "./components/pages/NotFound";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import { Home } from "./components/pages/Home";
import About from "./components/pages/About";
import Footer from "./components/Footer";
import { Dashboard } from "./components/pages/Dashboard";

function App() {

  return (
      <>
          <Navbar />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/about" element={<About />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
      </>
  );
}

export default App;
