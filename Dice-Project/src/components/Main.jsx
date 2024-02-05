import Button from "./Button";
import Model from "./Model";
import { Canvas } from "@react-three/fiber";

export default function Main() {
  return (
    <div className="canvas">
      <Canvas>
        <directionalLight position={[2, 2, 2]} />
        <Model position={[1.2, 0, 1]} size={2} detail={0} color={"grey"} />
      </Canvas>
      <div className="billboard">
        <h1>
          Polymer? <br />I hardl-
        </h1>
        <Button />
      </div>
    </div>
  );
}
