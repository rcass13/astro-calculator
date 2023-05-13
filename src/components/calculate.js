import React, { useState } from "react";
import swe, { swe_julday } from "swisseph";

function NatalChart() {
  const [birthDate, setBirthDate] = useState({ year: 1990, month: 6, day: 15 });
  const [birthTime, setBirthTime] = useState({
    hour: 8,
    minute: 30,
    second: 0,
  });
  const [birthLocation, setBirthLocation] = useState({
    latitude: 37.7749,
    longitude: -122.4194,
  });
  const [chartData, setChartData] = useState(null);

  const handleCalculateChart = () => {
    // Calculate the Julian Day Number
    var swisseph = require("swisseph");
    var date = { year: 2015, month: 1, day: 1, hour: 0 };

    var jdn = swisseph.swe_julday(
      date.year,
      date.month,
      date.day,
      date.hour,
      swisseph.SE_GREG_CAL
    );

    // Calculate the positions of the planets
    const planets = [];
    for (let i = 0; i < swe.NPLANETS; i++) {
      const planet = swe.calc_ut(jdn, i);
      planets.push({
        name: swe.get_planet_name(i),
        longitude: planet[0],
        latitude: planet[1],
      });
    }

    // Calculate the Ascendant and Midheaven
    const houses = swe.houses(
      jdn,
      birthLocation.latitude,
      birthLocation.longitude,
      "P"
    );
    const ascendant = houses[0];
    const midheaven = houses[10];

    // Update the chart data state
    setChartData({ ascendant, midheaven, planets });
  };

  return (
    <div>
      <h1>Astrology Natal Chart Calculator</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>
          Sun Sign
          <input
            type="dropdown"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
          />
        </label>
        <br />
        <label>
        <div className="form-group">
          <label for="exampleSelect1" class="form-label mt-4">
            Example select
          </label>
          <select class="form-select" id="exampleSelect1">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        </label>
        <br />
        <label>
          Birth Time:
          <input
            type="time"
            value={birthTime}
            onChange={(e) => setBirthTime(e.target.value)}
          />
        </label>
        <br />
        <label>
          Birth Location Latitude:
          <input
            type="number"
            step="any"
            value={birthLocation.latitude}
            onChange={(e) =>
              setBirthLocation({ ...birthLocation, latitude: e.target.value })
            }
          />
        </label>
        <br />
        <label>
          Birth Location Longitude:
          <input
            type="number"
            step="any"
            value={birthLocation.longitude}
            onChange={(e) =>
              setBirthLocation({ ...birthLocation, longitude: e.target.value })
            }
          />
        </label>
        <br />
        <button onClick={handleCalculateChart}>Calculate Chart</button>
      </form>
      {chartData && (
        <div>
          <h2>
            Natal Chart for {birthDate.year}-{birthDate.month}-{birthDate.day}{" "}
            {birthTime.hour}:{birthTime.minute} GMT
          </h2>
          <p>Ascendant: {chartData.ascendant}</p>
          <p>Midheaven: {chartData.midheaven}</p>
          <ul>
            {chartData.planets.map((planet) => (
              <li key={planet.name}>
                {planet.name} longitude: {planet.longitude}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default NatalChart;
