import Button from "./Button";
import Model from "./Model";
import { Canvas } from "@react-three/fiber";

export default function Main() {
  return (
    <div className="canvas">
      <Button />
      <Canvas>
        <directionalLight position={[0, 0, 15]} />
        <Model />
      </Canvas>
    </div>
  );
}
