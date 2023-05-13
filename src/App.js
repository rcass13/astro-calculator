import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import 'bootswatch/dist/zephyr/bootstrap.min.css'; // Added this :boom:
import './assets/styles/bootstrap.css';
// import './assets/styles/App.css';


export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
  
    </div>
  );
}

