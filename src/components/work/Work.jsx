import React, { Component } from "react";
import WorkCard from "./WorkCard";
import classes from "./work.css";
import { Link } from "react-router-dom";

class Work extends Component {
  render() {
    return (
      <section id="work" className="WorkSection" style={classes.WorkSection}>
        <h3 className="WorkTitle" style={classes.WorkTitle}>
          My Works
        </h3>
        <div className="Works" style={classes.Works}>
          <WorkCard />
        </div>
        <Link to="/app-detail">
          <button type="button">More Detail</button>
        </Link>
      </section>
    );
  }
}

export default Work;
