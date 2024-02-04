import Button from "./Button";
import { Canvas } from "@react-three/fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

export default function Main() {
  return (
    <div className="frame">
      <Button />
      <Canvas></Canvas>
    </div>
  );
}
