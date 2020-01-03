import React, { Component } from "react";
import classes from "./skills.css";
import { frontEnd, backEnd, infrastructure, others } from "../../utils";

class Skills extends Component {
  state = {
    field: frontEnd
  };

  renderSkills = () => {
    return this.state.field.map(skill => {
      return (
        <div className="Skill" style={classes.Skill} key={skill.skill}>
          {skill.skill === "Express" ? (
            <img
              src={skill.icon}
              alt={skill.skill}
              style={{
                margin: " 1rem 0 1.3rem 0"
              }}
            />
          ) : (
            <i className={skill.icon} style={{ color: skill.color }}></i>
          )}
          <p className="Language" style={classes.Language}>
            {skill.skill}
          </p>
          {skill.level === 1 ? (
            <p>Speciality</p>
          ) : skill.level === 2 ? (
            <p>I know</p>
          ) : (
            <p>Studying now</p>
          )}
        </div>
      );
    });
  };

  handleClick = field => {
    switch (field) {
      case 0:
        this.setState({ field: frontEnd });
        break;
      case 1:
        this.setState({ field: backEnd });
        break;
      case 2:
        this.setState({ field: infrastructure });
        break;
      case 3:
        this.setState({ field: others });
        break;
      default:
        break;
    }
  };
  render() {
    return (
      <section id="skills">
        <div className="Fields" style={classes.Fields}>
          <div
            className="Field Field-1"
            style={classes.field}
            onClick={() => this.handleClick(0)}
          >
            Frontend
          </div>
          <div
            className="Field Field-2"
            style={classes.field}
            onClick={() => this.handleClick(1)}
          >
            Backend
          </div>
          <div
            className="Field Field-3"
            style={classes.field}
            onClick={() => this.handleClick(2)}
          >
            Infrastructure
          </div>
          <div
            className="Field Field-4"
            style={classes.field}
            onClick={() => this.handleClick(3)}
          >
            Others
          </div>
        </div>
        {/* <h3 className="SkillsTitle" style={classes.SkillsTitle}>
          My Skills
        </h3> */}
        <div className="Skills" style={classes.Skills}>
          {this.renderSkills()}
        </div>
      </section>
    );
  }
}

export default Skills;
