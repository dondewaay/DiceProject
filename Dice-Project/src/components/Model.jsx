export default function Model() {
  return (
    <mesh position={[1, 1, 1]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={"grey"} />
    </mesh>
  );
}
