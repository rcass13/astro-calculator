import React from "react";
import cardData from "../../assets/tarot-data/tarot-info.json";
import Header from "../Header";
import { images } from "../../scripts/images";
import "../../assets/styles/cards.css";

const combinations = {
  10: ["The Wheel of Fortune", "The Magician"],
  11: ["Justice", "The High Priestess"],
  12: ["The Hanged Man", "The Empress"],
  13: ["Death", "The Emperor"],
  14: ["Temperance", "The Hierophant"],
  15: ["The Devil", "The Lovers"],
  16: ["The Tower", "The Chariot"],
  17: ["The Star", "Strength"],
  18: ["The Moon", "The Hermit"],
  19: ["The Sun", "The Wheel of Fortune"],
  20: ["Judgement", "The High Priestess"],
  21: ["The World", "The Empress"],
  1: ["The Magician", "The Wheel of Fortune"],
  2: ["Justice", "The High Priestess"],
  3: ["The Empress", "The Hanged Man"],
  4: ["The Emperor", "Death"],
  5: ["The Hierophant", "Temperance"],
  6: ["The Lovers", "The Devil"],
  7: ["The Chariot", "The Tower"],
  8: ["Strength", "The Star"],
  9: ["The Hermit", "The Moon"],
};

function PersonalityTarotCard({ name, number }) {
  const card = cardData.cards.find((card) => card.name === name);

  return (
    <div>
      <h4 className="text-dark">
        {number} - {name}
      </h4>
      <br />
      <img style={{ maxWidth: "150px" }} src={images[card.img]} alt={name} />
    </div>
  );
}

class PersonalityCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      birthMonth: "",
      birthDay: "",
      birthYear: "",
      personalityCard: null,
      soulCard: null,
      error: "",
    };
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      personalityCard: null,
      soulCard: null,
      error: "",
    });
  };

  calculateNumber = (input) => {
    let number = 0;
    for (let i = 0; i < input.length; i++) {
      number += parseInt(input[i]);
    }
    return number;
  };

  calculateBirthdateNumber = () => {
    const { birthMonth, birthDay, birthYear } = this.state;

    // Validate input
    if (!birthMonth || !birthDay || !birthYear) {
      this.setState({ error: "Please enter your birthdate correctly." });
      return;
    }

    // Calculate birthdate number
    let birthdateNumber =
      this.calculateNumber(birthMonth) +
      this.calculateNumber(birthDay) +
      this.calculateNumber(birthYear);

    while (birthdateNumber > 21) {
      birthdateNumber = this.calculateNumber(birthdateNumber.toString());
    }

    // Get combination from dictionary
    const combinationNames = combinations[birthdateNumber];
    if (combinationNames) {
      const cards = combinationNames.map((cardName) =>
        cardData.cards.find((card) => card.name === cardName)
      );
      this.setState({ birthdateNumber, combinationNames, cards, error: "" });
    } else {
      this.setState({
        birthdateNumber: null,
        combinationNames: null,
        cards: [],
        error: "Combination not found",
      });
    }
  };

  render() {
    const {
      birthMonth,
      birthDay,
      birthYear,
      birthdateNumber,
      combinationNames,
      cards,
      error,
    } = this.state;

    return (
      <div>
        <Header />
        <div style={{ justifyContent: "center", alignItems: "center" }}>
          <h1 className="margin-10px text-danger mb-4">
            CALCULATE PERSONALITY AND SOUL CARDS
          </h1>
          <div
            style={{ maxWidth: "500px" }}
            className="card row text-white bg-success mb-3 p-4"
          >
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="row">
                <div className="form-group col-md-4">
                  <label htmlFor="birthMonth" className="form-label">
                    Birth Month
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="birthMonth"
                    name="birthMonth"
                    value={birthMonth}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="form-group col-md-4">
                  <label htmlFor="birthDay" className="form-label">
                    Birth Day
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="birthDay"
                    name="birthDay"
                    value={birthDay}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="form-group col-md-4">
                  <label htmlFor="birthYear" className="form-label">
                    Birth Year
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="birthYear"
                    name="birthYear"
                    value={birthYear}
                    onChange={this.handleInputChange}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={this.calculateBirthdateNumber}
              >
                Calculate
              </button>
            </form>
          </div>
          {error && <div className="text-danger">{error}</div>}
          {birthdateNumber && combinationNames && (
            <div className="bg-danger align-items-center justify-content-center">
              <h4>Birthdate Number: {birthdateNumber}</h4>
              <h4>Combination: {combinationNames.join(" & ")}</h4>
              {cards && (
                <div className="card-container">
                  {cards.map((card, index) => (
                    <div key={index} className="card-item">
                      <PersonalityTarotCard
                        name={card.name}
                        number={card.number}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default PersonalityCard;
