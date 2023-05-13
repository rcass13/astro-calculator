import React from "react";

export const tarotCardMap = {
    "Mars in Aries": "Two of Wands",
    "Sun in Aries": "Three of Wands",
    "Venus in Aries": "Four of Wands",
    "Saturn in Leo": "Five of Wands",
    "Jupiter in Leo": "Six of Wands",
    "Mars in Leo": "Seven of Wands",
    "Mercury in Sagittarius": "Eight of Wands",
    "Moon in Sagittarius": "Nine of Wands",
    "Saturn in Sagittarius": "Ten of Wands",
    "Venus in Cancer": "Two of Cups",
    "Mercury in Cancer": "Three of Cups",
    "Moon in Cancer": "Four of Cups",
    "Mars in Scorpio": "Five of Cups",
    "Sun in Scorpio": "Six of Cups",
    "Venus in Scorpio": "Seven of Cups",
    "Saturn in Pisces": "Eight of Cups",
    "Jupiter in Pisces": "Nine of Cups",
    "Mars in Pisces": "Ten of Cups",
    "Moon in Libra": "Two of Swords",
    "Saturn in Libra": "Three of Swords",
    "Jupiter in Libra": "Four of Swords",
    "Venus in Aquarius": "Five of Swords",
    "Mercury in Aquarius": "Six of Swords",
    "Moon in Aquarius": "Seven of Swords",
    "Jupiter in Gemini": "Eight of Swords",
    "Mars in Gemini": "Nine of Swords",
    "Sun in Gemini": "Ten of Swords",
    "Jupiter in Capricorn": "Two of Pentacles",
    "Mars in Capricorn": "Three of Pentacles",
    "Sun in Capricorn": "Four of Pentacles",
    "Mercury in Taurus": "Five of Pentacles",
    "Moon in Taurus": "Six of Pentacles",
    "Saturn in Taurus": "Seven of Pentacles",
    "Sun in Virgo": "Eight of Pentacles",
    "Venus in Virgo": "Nine of Pentacles",
    "Mercury in Virgo": "Ten of Pentacles",
  };

export function CardMap() {


  return (
    <div>
      {Object.keys(tarotCardMap).map((key) => (
        <div key={key}>
          {key} - {tarotCardMap[key]}
        </div>
      ))}
    </div>
  );
}

// export default CardMap;
