import Button from "./Button";
import { Canvas } from "@react-three/fiber";

export default function Main() {
  return (
    <div className="frame">
      <Button />
      <Canvas className="canvas">
        <directionalLight position={[0, 0, 2]} />
        <mesh position={[1, 0, 0]}>
          <boxGeometry />
          <meshStandardMaterial color={"grey"} />
        </mesh>
      </Canvas>
    </div>
  );
}
