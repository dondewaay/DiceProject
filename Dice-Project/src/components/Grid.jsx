import Card from "./Card";
import NewCard from "./NewCard";

export default function Grid() {
  return (
    <div className="grid">
      <Card name="Potion" />
      <Card name="Claymore" />
      <Card name="Saving Throw" />
      <Card name="Initiave" />
      <Card name="Custom" />
      <Card name="Custom" />
      <NewCard />
    </div>
  );
}
