import React from 'react';
import Header from '../Header';

class PersonalityCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      birthMonth: '',
      birthDay: '',
      birthYear: '',
      personalityCard: null,
      soulCard: null,
      error: ''
    };
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      personalityCard: null,
      soulCard: null,
      error: ''
    });
  }

  calculateCards = () => {
    const { birthMonth, birthDay, birthYear } = this.state;

    // Validate input
    if (!birthMonth || !birthDay || !birthYear) {
      this.setState({ error: 'Please enter your birthdate correctly.' });
      return;
    }

    // Calculate personality card
    let personalityNumber = this.calculateNumber(birthMonth) + this.calculateNumber(birthDay) + this.calculateNumber(birthYear);
    while (personalityNumber > 22) {
      personalityNumber = this.calculateNumber(personalityNumber.toString());
    }

    // Calculate soul card
    let soulNumber = this.calculateNumber(birthMonth) + this.calculateNumber(birthDay) + this.calculateNumber(birthYear);
    while (soulNumber > 22 || soulNumber === personalityNumber) {
      soulNumber = this.calculateNumber(soulNumber.toString());
    }

    this.setState({
      personalityCard: personalityNumber,
      soulCard: soulNumber,
      error: ''
    });
  }

  calculateNumber = (number) => {
    const digits = number.toString().split('').map(Number);
    return digits.reduce((sum, digit) => sum + digit, 0);
  }

  render() {
    const { personalityCard, soulCard, error } = this.state;

    return (
        <div>
          < Header />
        <h2>Tarot Personality and Soul Cards Calculator</h2>
        <div>
          <label>Birth Month:</label>
          <input type="number" name="birthMonth" onChange={this.handleInputChange} />
        </div>
        <div>
          <label>Birth Day:</label>
          <input type="number" name="birthDay" onChange={this.handleInputChange} />
        </div>
        <div>
          <label>Birth Year:</label>
          <input type="number" name="birthYear" onChange={this.handleInputChange} />
        </div>
        <button onClick={this.calculateCards}>Calculate</button>
        {error && <p>{error}</p>}
        {personalityCard && (
          <p>Personality Card: {personalityCard}</p>
        )}
        {soulCard && (
          <p>Soul Card: {soulCard}</p>
        )}
      </div>
    );
  }
}

export default PersonalityCard;
