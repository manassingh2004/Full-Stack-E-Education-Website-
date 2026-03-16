import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Home from "./pages/Home";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Payment from "./pages/Payment";
import Success from "./pages/Success";

function App() {
  return (
    <Router>

      {/* Navbar */}
      <Navbar />

      {/* Routes */}
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/courses" element={<Courses />} />

        <Route path="/course/:id" element={<CourseDetail />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/payment" element={<Payment />} />

        <Route path="/success" element={<Success />} />

      </Routes>

      {/* Footer */}
      <Footer />

    </Router>
  );
}

export default App;