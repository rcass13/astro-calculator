import React, { useState } from "react";
import { CardMap } from "./Map";
let cardData = require("../assets/tarot-data/tarot-images.json");
const images = importAll(
  require.context("../assets/tarot-data/cards", false, /\.(png|jpe?g|svg)$/)
);

//import images
function importAll(r) {
  let imgs = {};
  r.keys().forEach((item, index) => {
    imgs[item.replace("./", "")] = r(item);
  });
  return imgs;
}

//Tarot Card data from dataset
function TarotCard({name, image, astroPlacement}) {

  
  return (
    <div>
      
      <h4 className="text-dark">{astroPlacement} - {name}</h4>
      <br/>
      <img style={{ maxWidth: "150px" }} src={images?.[image]} alt={name} />
    </div>
  );
}

//Find corresponding card from the entered astrology placement
function GetTarotCardFromAstroPlacement(astroPlacement) {
  const cards = cardData.cards;
  return cards.find((card) => {
    return card.Astrology === astroPlacement;
  });
}

//form for users to enter birth chart info
function EnterChart() {
  const [result, setResult] = useState(null);
  const [birthChart, setBirthChart] = useState([]);

  //handle submit of birth chart data
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
    const chart = placements.map((placement) => ({
      astroPlacement: placement,
    }));
    setBirthChart(chart);

    //result of Astrology placement and any corresponding tarot cards
    const result = chart.map(({ astroPlacement }) => {
      const tarotKey = "string";
      if (tarotKey) {
        const astroCard = GetTarotCardFromAstroPlacement(astroPlacement);
        //console.log("AstroCard:", astroCard);
        //console.log("Astrology Placement:", astroPlacement);

        return (
          <div className="card row text-white bg-info mb-3 p-4">
          <div className="row" key={astroPlacement}>
            {astroCard ? (
              <TarotCard
                key={astroCard.name}
                name={astroCard.name || astroCard.name}
                image={astroCard.img}
                astroPlacement={astroPlacement}
              />
            ) : (
              " No corresponding card to this planet placement"
            )}
          </div>
          </div>
        );
      } else {
        console.log(CardMap);
        console.log(tarotKey);
        console.log(astroPlacement);
        console.log();
        return <li key={astroPlacement}>{astroPlacement}</li>;
      }
    });
    setResult(<ul>{result}</ul>);
    console.log(placements);
  }


  return (
    <div>
      <div>
        <h1 className="margin-10px text-danger mb-4">ENTER BIRTH CHART</h1>
        <div className="card row text-white bg-success mb-3 p-4">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="row">
              <div className="col-md-6">
                <div className="row">
                  <div className="form-group col-md-6">
                    <label htmlFor="sun" className="form-label">
                      Sun ☉
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
                  <div className="form-group col-md-6">
                    <label htmlFor="moon" className="form-label">
                      Moon ☽
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
                  <div className="form-group col-md-6">
                    <label htmlFor="mercury" className="form-label">
                      Mercury ☿
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
                      <option value="Mercury in Sagittarius">
                        Sagittarius
                      </option>
                      <option value="Mercury in Capricorn">Capricorn</option>
                      <option value="Mercury in Aquarius">Aquarius</option>
                      <option value="Mercury in Pisces">Pisces</option>
                    </select>
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="venus" className="form-label">
                      Venus ♀
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
                </div>
              </div>
              <div className="col-md-6">
                <div className="row">
                  <div className="form-group col-md-6">
                    <label htmlFor="mars" className="form-label">
                      Mars ♂
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
                  <div className="form-group col-md-6">
                    <label htmlFor="jupiter" className="form-label">
                      Jupiter ♃
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
                      <option value="Jupiter in Sagittarius">
                        Sagittarius
                      </option>
                      <option value="Jupiter in Capricorn">Capricorn</option>
                      <option value="Jupiter in Aquarius">Aquarius</option>
                      <option value="Jupiter in Pisces">Pisces</option>
                    </select>
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="saturn" className="form-label">
                      Saturn ♄
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
                </div>
              </div>
            </div>
            <br />
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </form>
        </div>
        {result && (
          <div>
            <h2 className="text-danger">Your Tarot Birth Chart:</h2>
            {result}
          </div>
        )}
      </div>
    </div>
  );
}

export default EnterChart;