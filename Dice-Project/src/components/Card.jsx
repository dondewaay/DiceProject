export default function Card({ name, config }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>d2: {config.d2}</p>
      <p>d3: {config.d3}</p>
      <p>d4: {config.d4}</p>
      <p>d6: {config.d6}</p>
      <p>d8: {config.d8}</p>
      <p>d10: {config.d10}</p>
      <p>d12: {config.d12}</p>
      <p>d20: {config.d20}</p>
      <p>d100: {config.d100}</p>
      <button />
    </div>
  );
}
