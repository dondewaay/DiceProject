import RollHero from "../components/RollHero";
import Grid from "../components/Grid";
import "../styles/Roll.scss";

export default function Roll() {
  return (
    <div className="mainDiv">
      <RollHero />
      <Grid />
    </div>
  );
}
