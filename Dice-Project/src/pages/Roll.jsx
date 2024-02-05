import RollHero from "../components/RollHero";
import Grid from "../components/Grid";
import "../styles/Roll.css";

export default function Roll() {
  return (
    <>
      <div className="maindiv">
        <RollHero />
        <Grid />
      </div>
    </>
  );
}
