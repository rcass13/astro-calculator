import React, { useState } from "react";
import cardData from "../../assets/tarot-data/tarot-info.json";
import Header from "../Header";
import { images } from "../../scripts/images";

function CardList() {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (cardName) => {
    if (selectedCard === cardName) {
      setSelectedCard(null);
    } else {
      setSelectedCard(cardName);
    }
  };

  const renderCardContent = (card) => {
    return (
      <div>
        <p>Number: {card.number}</p>
        <p>Arcana: {card.arcana}</p>
        <p>Suit: {card.suit}</p>
        <img src={images[card.img]} alt={card.name} />
        <h3>Fortune Telling</h3>
        <ul>
          {card.fortune_telling.map((fortune) => (
            <li key={fortune}>{fortune}</li>
          ))}
        </ul>
        <h3>Keywords</h3>
        <ul>
          {card.keywords.map((keyword) => (
            <li key={keyword}>{keyword}</li>
          ))}
        </ul>
        <h3>Meanings</h3>
        <div>
          <h4>Light</h4>
          <ul>
            {card.meanings.light.map((meaning) => (
              <li key={meaning}>{meaning}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Shadow</h4>
          <ul>
            {card.meanings.shadow.map((meaning) => (
              <li key={meaning}>{meaning}</li>
            ))}
          </ul>
        </div>
        {card.Archetype && <p>Archetype: {card.Archetype}</p>}
        {card["Hebrew Alphabet"] && <p>Hebrew Alphabet: {card["Hebrew Alphabet"]}</p>}
        {card.Numerology && <p>Numerology: {card.Numerology}</p>}
        {card.Elemental && <p>Elemental: {card.Elemental}</p>}
        {card["Mythical/Spiritual"] && <p>Mythical/Spiritual: {card["Mythical/Spiritual"]}</p>}
        <h3>Questions to Ask</h3>
        <ul>
          {card["Questions to Ask"].map((question) => (
            <li key={question}>{question}</li>
          ))}
        </ul>
        <hr />
      </div>
    );
  };

  return (
    <div className="justify-content-center align-items-center margin-50px padding-100px">
      <Header />
      <div style={{ maxWidth: "600px" }} className="card row text-white bg-success mb-3 p-4 accordion" id="accordionExample">
        <h1>Tarot Card List</h1>
        {cardData.cards.map((card) => (
          <div className="accordion-item" key={card.name}>
            <h2 className="accordion-header" id={`heading${card.name}`}>
              <button
                className={`accordion-button ${
                  selectedCard === card ? "" : "collapsed"
                }`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${card.name}`}
                aria-expanded={selectedCard === card ? "true" : "false"}
                aria-controls={`collapse${card.name}`}
                onClick={() => handleCardClick(card)}
              >
                {card.name}
              </button>
            </h2>
            <div
              id={`collapse${card.name}`}
              className={`accordion-collapse collapse ${
                selectedCard === card ? "show" : ""
              }`}
              aria-labelledby={`heading${card.name}`}
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                {renderCardContent(card)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardList;
