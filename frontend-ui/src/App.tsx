import { Routes, Route } from "react-router-dom";
import './App.css'
import Profile from "./components/pages/Profile";
import Navbar from "./components/Navbar";
import NotFound from "./components/pages/NotFound";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import { Home } from "./components/pages/Home";
import About from "./components/pages/About";
import { AdminDash } from "./components/pages/AdminDash";

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
              <Route path="/admin" element={<AdminDash />} />
              <Route path="*" element={<NotFound />} />
          </Routes>
      </>
  );
}

export default App;
