import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const styles = {
  textColor: {
   color : "white"
  }
}
// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
class Navbar extends React.Component {
state = {
  home: true
}

 linkClick = () => {
    
    this.setState({home : false});
    console.log("home state is "+this.state.home);
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-secondary p-0">
        {!this.state.home && 
        <Link className="navbar-brand ml-2 text-white" to="/" onClick={ () => this.setState({home: true})}>
          Madhavi Mullapudi
      </Link>}
        <div className="ml-auto">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/"
                className={
                  window.location.pathname === "/" ? "nav-link active" : "nav-link"
                }
                onClick={ () => this.setState({home: true})}
                style={styles.textColor}
              >
                Home
            </Link>
            </li>
            <li className="nav-item">
              <Link
              onClick={this.linkClick}
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
                onClick={this.linkClick}
                className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
                style={styles.textColor}
              >
                Portfolio
            </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                onClick={this.linkClick}
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
}

export default Navbar;
