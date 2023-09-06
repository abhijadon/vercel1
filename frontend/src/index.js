import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "aos/dist/aos.css";
import "remixicon/fonts/remixicon.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <App />
      <Routes>
        <Route exact path="/" element={""} />
      </Routes>
    </Router>
  </React.StrictMode>
);
