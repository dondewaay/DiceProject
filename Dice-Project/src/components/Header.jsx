import { Link } from "react-router-dom";

export default function Header() {
  const linkStyle = {
    textDecoration: "none",
    color: "inherit",
  };

  return (
    <nav>
      <Link className="link" to="/" style={linkStyle}>
        <h1 className="menu">PolyRoll Beta</h1>
      </Link>
      <a href="https://github.com/dondewaay/DiceProject">
          <img src="src/assets/img/github-mark-white.png" />
        </a>
    </nav>
  );
}
