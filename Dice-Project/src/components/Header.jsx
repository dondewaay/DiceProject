import { Link } from "react-router-dom";

export default function Header() {
  const linkStyle = {
    textDecoration: "none",
    color: "inherit",
  };

  return (
    <nav>
      <Link className="link" to="/" style={linkStyle}>
        <h1 className="menu">🎲 PolyRoll Beta</h1>
      </Link>
    </nav>
  );
}
