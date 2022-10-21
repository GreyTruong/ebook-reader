import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Chapter from "./components/Chapter";
import Ebook from "./components/Ebook";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/ebook" />} />
      <Route exact path="/chapter" element={<Chapter />} />
      <Route exact path="/ebook" element={<Ebook />} />
    </Routes>
  );
}

export default App;
