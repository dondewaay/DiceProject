import { Link } from "react-router-dom";
import "../App.css";

export default function Button() {
  return (
    <Link to="/roll">
      <button className="btn">Roll</button>
    </Link>
  );
}
