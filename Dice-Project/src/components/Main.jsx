import Button from "./Button";
import Model from "./Model";
import { Canvas } from "@react-three/fiber";

export default function Main() {
  return (
    <div className="canvas">
      <div className="threed">
        <Canvas>
          <directionalLight position={[2, 2, 2]} />
          <Model position={[0, 0, 0]} size={2.5} detail={0} color={"grey"} />
        </Canvas>
      </div>
      <div className="billboard">
        <h1>
          A New Way <br />
          to <span>Roll</span>
        </h1>
        <Button />
      </div>
    </div>
  );
}
