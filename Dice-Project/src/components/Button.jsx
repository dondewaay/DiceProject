import { Link } from "react-router-dom";
import "../App.css";

export default function Button({message}) {
  return (
    <Link to="/roll">
      <button className="btn">{message}</button>
    </Link>
  );
}
