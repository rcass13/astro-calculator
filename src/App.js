import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AstroTarotCalc from "./components/pages/AstroTarotCalc";
import PersonalityCard from "./components/pages/PersonalityCard";
import 'bootswatch/dist/yeti/bootstrap.min.css'; // Added this :boom:
import './assets/styles/bootstrap.css';
// import './assets/styles/App.css';


export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/astroTarotCalc" element={<AstroTarotCalc />} />
          <Route path="/personalityCard" element={<PersonalityCard/>} />
        </Routes>
      </BrowserRouter>
  
    </div>
  );
}

