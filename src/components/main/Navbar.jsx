import React, { Component } from "react";
import classes from "./navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="Menu" style={classes.Menu}>
        <ul className="MenuList" style={classes.MenuList}>
          <li className="MenuItem" style={classes.MenuItem}>
            <a href="#about">ABOUT</a>
          </li>
          <li className="MenuItem" style={classes.MenuItem}>
            <a href="#work">WORK</a>
          </li>
          <li className="MenuItem" style={classes.MenuItem}>
            <a href="#skills">SKILLS</a>
          </li>
          <li className="MenuItem" style={classes.MenuItem}>
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
