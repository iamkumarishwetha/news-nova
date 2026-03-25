import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Login from "./components/Login";
import Register from "./components/Register";
import NewsDetails from "./components/NewsDetails";
function App() {
  return (
   
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/news/:id" element={<NewsDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;