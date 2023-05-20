import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginModal from "./pages/LoginModal";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/LoginModal" element={<LoginModal />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
