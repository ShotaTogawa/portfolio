import React from "react";
import classes from "./contact.css";
import { Link } from "react-router-dom";
import { icons } from "../../utils";

const renderIcons = () => {
  return icons.map(icon => {
    if (icon.name === "Email") {
      return (
        <Link to={"/contact"} key={icon.name}>
          <div className="Sns" style={classes.Sns} key={icon.name}>
            <i className={icon.icon}></i>
            <p className="SnsName" style={classes.SnsName}>
              {icon.name}
            </p>
          </div>
        </Link>
      );
    }
    return (
      <div className="Sns" style={classes.Sns} key={icon.name}>
        <a href={icon.url} alt={icon.name} target="_blank">
          <i className={icon.icon}></i>
        </a>
        <p className="SnsName" style={classes.SnsName}>
          {icon.name}
        </p>
      </div>
    );
  });
};
const Icons = () => {
  return (
    <div className="SnsList" style={classes.SnsList}>
      {renderIcons()}
    </div>
  );
};

export default Icons;
