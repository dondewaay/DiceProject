import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Header() {
  const linkStyle = {
    textDecoration: "none",
    color: "inherit",
  };

  return (
    <nav>
      <Link className="link" to="/" style={linkStyle}>
        <motion.h1
          className="menu"
          initial={{ y: -70 }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
        >
          PolyRoll Beta
        </motion.h1>
      </Link>
      <a href="https://github.com/dondewaay/DiceProject">
        <motion.img
          src="src/assets/img/github-mark-white.png"
          initial={{ opacity: 0, y: -70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        />
      </a>
    </nav>
  );
}
