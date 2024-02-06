import RollHero from "../components/RollHero";
import Grid from "../components/Grid";
import "../styles/Roll.css";

export default function Roll() {
  return (
    <div className="mainDiv">
      <RollHero>
        <div className="restDiv" />
      </RollHero>

      <Grid />
    </div>
  );
}
