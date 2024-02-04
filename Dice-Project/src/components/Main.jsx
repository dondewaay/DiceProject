import Button from "./Button"
import { Canvas } from "@react-three/fiber";

export default function Main() {
  return (
    <div className="frame">
      <Button />
      <Canvas>
      </Canvas>
    </div>
  );
}
