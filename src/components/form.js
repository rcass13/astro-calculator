import React, { useState } from "react";
import { CardMap, tarotCardMap } from "./Map";

import myimg from "../assets/tarot-data/cards/c01.jpg"
let cardData = require("../assets/tarot-data/tarot-images.json");
const images = importAll(require.context('../assets/tarot-data/cards', false, /\.(png|jpe?g|svg)$/));




function importAll(r) {
  let imgs = {};
  r.keys().forEach((item, index) => { 
    // console.log(item)
    imgs[item.replace('./', '')] = r(item); 
    // console.log(imgs)
  
  });
 
  return imgs
}
function Card({ name, image }) {
    // console.log((images?.[0]))
  return (
    <div>
      <h2>{name}</h2>
      <img 
      src={images?.[image]} alt={name} />
    </div>
  );
}

function EnterChart() {
  const [result, setResult] = useState(null);
  const [birthChart, setBirthChart] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    const sun = document.getElementById("sun").value;
    const moon = document.getElementById("moon").value;
    const mercury = document.getElementById("mercury").value;
    const venus = document.getElementById("venus").value;
    const mars = document.getElementById("mars").value;
    const jupiter = document.getElementById("jupiter").value;
    const saturn = document.getElementById("saturn").value;
    const placements = [sun, moon, mercury, venus, mars, jupiter, saturn];
    const chart = placements.map((placement) => ({ planet: placement }));
    setBirthChart(chart);
    const result = chart.map(({ planet }) => {
      const tarotKey = "string";
    
      if (tarotKey) {
        console.log(planet);
        return (
          <li key={planet}>
            {planet} - {tarotCardMap[planet] || "nope"}
          </li>
        );
      } else {
        console.log(CardMap);
        console.log(tarotKey);
        console.log(planet);
        console.log();
        return <li key={planet}>{planet}</li>;
      }
    });
    setResult(<ul>{result}</ul>);
    console.log(placements);
  }
  return (
    <div>

    <div>
      <h1>ENTER BIRTH CHART</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>
          <div className="form-group">
            <label htmlFor="sun" className="form-label mt-4">
              Sun
            </label>
            <select className="form-select" id="sun">
              <option value="Sun in Aries">Aries</option>
              <option value="Sun in Taurus">Taurus</option>
              <option value="Sun in Gemini">Gemini</option>
              <option value="Sun in Cancer">Cancer</option>
              <option value="Sun in Leo">Leo</option>
              <option value="Sun in Virgo">Virgo</option>
              <option value="Sun in Libra">Libra</option>
              <option value="Sun in Scorpio">Scorpio</option>
              <option value="Sun in Sagittarius">Sagittarius</option>
              <option value="Sun in Capricorn">Capricorn</option>
              <option value="Sun in Aquarius">Aquarius</option>
              <option value="Sun in Pisces">Pisces</option>
            </select>
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="moon" className="form-label mt-4">
              Moon
            </label>
            <select className="form-select" id="moon">
              <option value="Moon in Aries">Aries</option>
              <option value="Moon in Taurus">Taurus</option>
              <option value="Moon in Gemini">Gemini</option>
              <option value="Moon in Cancer">Cancer</option>
              <option value="Moon in Leo">Leo</option>
              <option value="Moon in Virgo">Virgo</option>
              <option value="Moon in Libra">Libra</option>
              <option value="Moon in Scorpio">Scorpio</option>
              <option value="Moon in Sagittarius">Sagittarius</option>
              <option value="Moon in Capricorn">Capricorn</option>
              <option value="Moon in Aquarius">Aquarius</option>
              <option value="Moon in Pisces">Pisces</option>
            </select>
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="mercury" className="form-label mt-4">
              Mercury
            </label>
            <select className="form-select" id="mercury">
              <option value="Mercury in Aries">Aries</option>
              <option value="Mercury in Taurus">Taurus</option>
              <option value="Mercury in Gemini">Gemini</option>
              <option value="Mercury in Cancer">Cancer</option>
              <option value="Mercury in Leo">Leo</option>
              <option value="Mercury in Virgo">Virgo</option>
              <option value="Mercury in Libra">Libra</option>
              <option value="Mercury in Scorpio">Scorpio</option>
              <option value="Mercury in Sagittarius">Sagittarius</option>
              <option value="Mercury in Capricorn">Capricorn</option>
              <option value="Mercury in Aquarius">Aquarius</option>
              <option value="Mercury in Pisces">Pisces</option>
            </select>
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="venus" className="form-label mt-4">
              Venus
            </label>
            <select className="form-select" id="venus">
              <option value="Venus in Aries">Aries</option>
              <option value="Venus in Taurus">Taurus</option>
              <option value="Venus in Gemini">Gemini</option>
              <option value="Venus in Cancer">Cancer</option>
              <option value="Venus in Leo">Leo</option>
              <option value="Venus in Virgo">Virgo</option>
              <option value="Venus in Libra">Libra</option>
              <option value="Venus in Scorpio">Scorpio</option>
              <option value="Venus in Sagittarius">Sagittarius</option>
              <option value="Venus in Capricorn">Capricorn</option>
              <option value="Venus in Aquarius">Aquarius</option>
              <option value="Venus in Pisces">Pisces</option>
            </select>
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="mars" className="form-label mt-4">
              Mars
            </label>
            <select className="form-select" id="mars">
              <option value="Mars in Aries">Aries</option>
              <option value="Mars in Taurus">Taurus</option>
              <option value="Mars in Gemini">Gemini</option>
              <option value="Mars in Cancer">Cancer</option>
              <option value="Mars in Leo">Leo</option>
              <option value="Mars in Virgo">Virgo</option>
              <option value="Mars in Libra">Libra</option>
              <option value="Mars in Scorpio">Scorpio</option>
              <option value="Mars in Sagittarius">Sagittarius</option>
              <option value="Mars in Capricorn">Capricorn</option>
              <option value="Mars in Aquarius">Aquarius</option>
              <option value="Mars in Pisces">Pisces</option>
            </select>
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="jupiter" className="form-label mt-4">
              Jupiter
            </label>
            <select className="form-select" id="jupiter">
              <option value="Jupiter in Aries">Aries</option>
              <option value="Jupiter in Taurus">Taurus</option>
              <option value="Jupiter in Gemini">Gemini</option>
              <option value="Jupiter in Cancer">Cancer</option>
              <option value="Jupiter in Leo">Leo</option>
              <option value="Jupiter in Virgo">Virgo</option>
              <option value="Jupiter in Libra">Libra</option>
              <option value="Jupiter in Scorpio">Scorpio</option>
              <option value="Jupiter in Sagittarius">Sagittarius</option>
              <option value="Jupiter in Capricorn">Capricorn</option>
              <option value="Jupiter in Aquarius">Aquarius</option>
              <option value="Jupiter in Pisces">Pisces</option>
            </select>
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="saturn" className="form-label mt-4">
              Saturn
            </label>
            <select className="form-select" id="saturn">
              <option value="Saturn in Aries">Aries</option>
              <option value="Saturn in Taurus">Taurus</option>
              <option value="Saturn in Gemini">Gemini</option>
              <option value="Saturn in Cancer">Cancer</option>
              <option value="Saturn in Leo">Leo</option>
              <option value="Saturn in Virgo">Virgo</option>
              <option value="Saturn in Libra">Libra</option>
              <option value="Saturn in Scorpio">Scorpio</option>
              <option value="Saturn in Sagittarius">Sagittarius</option>
              <option value="Saturn in Capricorn">Capricorn</option>
              <option value="Saturn in Aquarius">Aquarius</option>
              <option value="Saturn in Pisces">Pisces</option>
            </select>
          </div>
          <br />
        </label>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
          >
          Submit
        </button>
      </form>
      {result && (
          <div>
          <h2>Your Tarot Birth Chart:</h2>
          {result}
        </div>
      )}
      </div>

      <div>
        <h1>Tarot Cards</h1>
        <div>
          {cardData.cards.map((card, index) => {
           // console.log("hey", index);
            return <Card key={card.name} name={card.name} image={card.img} />
          })}



        </div>
      </div>
    </div>
  );
}

export default EnterChart;
