import RollHeroText from "./RollHeroText";
import CreateNew from "./CreateNew";
import "../styles/Roll.css";

export default function RollMain() {
  return (
    <>
      <div className="hero">
        <RollHeroText />
        <CreateNew />
      </div>
    </>
  );
}
