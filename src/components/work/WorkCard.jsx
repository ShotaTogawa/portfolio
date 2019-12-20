import React from "react";
import classes from "./work.css";
import { works } from "../../utils";

const renderCard = () => {
  return works.map(work => {
    return (
      <div className="Card" style={classes.Card} key={work.name}>
        <a
          className="LinkName"
          style={classes.LinkName}
          href={work.link}
          target="_blank"
        >
          <img src={work.image} className="image-top" />
        </a>
        <h1>{work.name}</h1>
        <p className="AboutMe" style={classes.AboutMe}>
          {work.about}
        </p>
        <a href={work.githublink} alt={work.name} target="_blank">
          <i
            className="fab fa-github"
            style={{ fontSize: "3rem", margin: "1rem 0", color: "#312f30" }}
          ></i>
        </a>
      </div>
    );
  });
};

const WorkCard = () => {
  return renderCard();
};

export default WorkCard;
