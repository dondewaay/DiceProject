import Button from "./Button";
import Model from "./Model";
import { Canvas } from "@react-three/fiber";

export default function Main() {
  return (
    <div className="canvas">
      <Canvas>
        <directionalLight position={[0, 0, 1]} />
        <Model />
      </Canvas>
      <div className="billboard">
        <h1>
          Dice rolling, <br />
          made easy
        </h1>
        <Button />
      </div>
    </div>
  );
}
