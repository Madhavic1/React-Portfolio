import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

const styles = {
  textColor: {
    color: "white"
  }
}
// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {

  const [isHomepage, setIsHomepage] = useState(true);
  const linkClick = () => {
    setIsHomepage(false);
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-secondary p-0">
      {!isHomepage &&
        <Link className="navbar-brand ml-2 text-white" to="/React-Portfolio"
          onClick={() => setIsHomepage(true)}
        >Madhavi Mullapudi</Link>
         }

      <div className="ml-auto">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/React-Portfolio"
              className={
                window.location.pathname === "/React-Portfolio" ? "nav-link active" : "nav-link"
              }
              onClick={() => setIsHomepage(true)}
              style={styles.textColor}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              onClick={linkClick}
              to="/about"
              className={window.location.pathname === "/about"
                ? "nav-link active"
                : "nav-link"
              }
              style={styles.textColor}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/portfolio"
              onClick={linkClick}
              className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
              style={styles.textColor}
            >
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              onClick={linkClick}
              className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
              style={styles.textColor}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
