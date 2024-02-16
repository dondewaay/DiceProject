import Card from "./Card";
import NewCard from "./NewCard";

export default function Grid() {
  let cards = [];

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
    roll() {
      let total = 0;
      for (let i = 0; i < this.d2; i++) {
        total += randInt(2);
      }
      for (let i = 0; i < this.d4; i++) {
        total += randInt(4);
      }
      for (let i = 0; i < this.d6; i++) {
        total += randInt(6);
      }
      for (let i = 0; i < this.d8; i++) {
        total += randInt(8);
      }
      for (let i = 0; i < this.d10; i++) {
        total += randInt(10);
      }
      for (let i = 0; i < this.d12; i++) {
        total += randInt(12);
      }
      for (let i = 0; i < this.d20; i++) {
        total += randInt(20);
      }
      for (let i = 0; i < this.d100; i++) {
        total += randInt(100);
      }
      return total;
    }
  }

  function randInt(max) {
    return Math.floor(Math.random() * max) + 1;
  }

  const listItems = cards.map((name) => <Card name={name}></Card>);
  return (
    <div className="grid-container">
      <div className="grid">
        {listItems}
        <NewCard onClick={addCard()} />
      </div>
    </div>
  );
}
