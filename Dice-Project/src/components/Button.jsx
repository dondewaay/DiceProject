import { Link } from "react-router-dom";

export default function Button({ message }) {
  return (
    <Link to="/roll">
      <button className="btn">{message}</button>
    </Link>
  );
}
