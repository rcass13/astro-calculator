import React from "react";
import Header from "../Header";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
        <Header/>
      <h1>Welcome to the Home Page!</h1>
      <div>
        <Link to="/astroTarotCalc">
          <button>Astro Tarot Calculator</button>
        </Link>
        <Link to="/personalityCard">
          <button>Personality Card</button>
        </Link>
        <Link to="/cardMeanings">
          <button>Card Meanings</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
