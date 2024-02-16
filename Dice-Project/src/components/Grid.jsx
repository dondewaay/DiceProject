import Card from "./Card";
import NewCard from "./NewCard";
import { useState } from "react";

export default function Grid() {
  let cards = [
    "Potion",
    "Claymore",
    "Saving Throw",
    "Initiave",
    "Custom",
    "Custom",
  ];

  class DiceSet {
    constructor(name, d2, d4, d6, d8, d10, d12, d20, d100) {
      this.name = name;
      this.d2 = d2;
      this.d4 = d4;
      this.d6 = d6;
      this.d8 = d8;
      this.d10 = d10;
      this.d12 = d12;
      this.d20 = d20;
      this.d100 = d100;
    }
  }

  function roll(DiceSet) {
    let total = 0;
    for (let i = 0; i < DiceSet.d2; i++) {
      total += randInt(2);
    }
    return total;
  }

  function randInt(max) {
    return Math.floor(Math.random() * max);
  }

  const listItems = cards.map((name) => <Card name={name}></Card>);
  return (
    <div className="grid-container">
      <div className="grid">
        {listItems}
        <NewCard />
      </div>
    </div>
  );
}
