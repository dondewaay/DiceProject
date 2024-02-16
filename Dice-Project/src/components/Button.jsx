import { Link } from "react-router-dom";

export default function Button() {
  return (
    <Link to="/roll">
      <button className="btn">Start</button>
    </Link>
  );
}
