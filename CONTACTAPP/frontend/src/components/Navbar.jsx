import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#eee" }}>
      <Link to="/" style={{ marginRight: "10px" }}>Contacts</Link>
      <Link to="/add">Add Contact</Link>
    </nav>
  );
}
