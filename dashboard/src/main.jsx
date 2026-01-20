import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import GeneralContext from "./components/GeneralContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GeneralContext>
        <Routes>
        <Route path="/*" element={<Home />} />

      </Routes>
      </GeneralContext>
    </BrowserRouter>
  </React.StrictMode>
);