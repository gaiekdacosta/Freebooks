import "./navbar.css"
import { Link } from "react-router-dom";

import logo from "../../imgs/book.png";

function Navbar() {
    return (
      <div className="Navbar">
        <h3><img src={logo} className="logo" /> FavBooks</h3>
        <Link to="/">Home</Link>
        <Link to="/Email">Email</Link>
        <Link to="/About">Sobre</Link>
      </div>
    )
  }
  
  export default Navbar;