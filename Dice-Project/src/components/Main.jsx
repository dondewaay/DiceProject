import Button from "./Button";
import { Canvas } from "@react-three/fiber";

export default function Main() {
  return (
    <Canvas className="canvas">
      <directionalLight position={[0, 0, 5]} />
      <mesh position={[1, 1, 1]}>
        <boxGeometry args={[4, 4, 4]} />
        <meshStandardMaterial color={"grey"} />
      </mesh>
    </Canvas>
  );
}
