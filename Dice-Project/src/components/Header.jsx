import { Link } from "react-router-dom";
import "../App.css";

export default function Header() {
  const linkStyle = {
    textDecoration: "none",
    color: "inherit",
  };

  return (
    <nav>
      <Link className="link" to="/" style={linkStyle}>
        <h1 className="menu">🎲 Polymer Beta</h1>
      </Link>
    </nav>
  );
}
