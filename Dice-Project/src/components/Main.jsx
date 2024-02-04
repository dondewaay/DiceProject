import Button from "./Button";
import Model from "./Model";
import { Canvas } from "@react-three/fiber";

export default function Main() {
  return (
    <div className="canvas">
      <Button />
      <Canvas>
        <directionalLight position={[0, 0, 5]} />
        <mesh position={[1, 1, 1]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color={"grey"} />
        </mesh>
      </Canvas>
      </div>
  );
}
