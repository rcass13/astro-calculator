import React from "react";
import Header from "../Header";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Header />
      <div className="container">
        <h1 className="mt-5">Explore the world of tarot with Explorot!</h1>
        <p className="lead">
          Using the iconic artwork of the Smith-Waite tarot deck drawn by Pamela Colman
          Smith
        </p>
        <p className="lead">By Rose Cassidy</p>
        <div className="row justify-content-center mt-5">
          <div className="col-md-4 mb-3">
            <div className="card bg-warning">
              <div className="card-body text-center">
                <h5 className="card-title">Astrology Tarot Calculator</h5>
                <p className="card-text">
                  Calculate your astrological tarot cards based on your
                  birthdate. Discover the connection between your birthchart and
                  tarot.
                </p>
                <Link to="/astroTarotCalc" className="btn btn-primary">
                  Go to Astrology Tarot Calculator
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card bg-success">
              <div className="card-body text-center">
                <h5 className="card-title">Personality/Soul Cards</h5>
                <p className="card-text">
                  Explore personality and soul cards (or birth cards).
                  Find out which tarot cards represent your personality and soul
                  traits based on numerology.
                </p>
                <Link to="/personalityCard" className="btn btn-primary">
                  Go to Personality/Soul Cards
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card bg-info">
              <div className="card-body text-center">
                <h5 className="card-title">Tarot Card Meanings</h5>
                <p className="card-text">
                  Discover the meanings and interpretations of different tarot
                  cards. Enhance your understanding of the symbolism and
                  messages behind each card.
                </p>
                <Link to="/cardMeanings" className="btn btn-primary">
                  Go to Tarot Card Meanings
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
