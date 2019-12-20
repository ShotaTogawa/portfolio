import React, { Component } from "react";
import Navbar from "./Navbar";
import classes from "./main.css";
import Typist from "react-typist";

const welcome = "WelcomeToMyPage = {";

const braces = "};";

class Main extends Component {
  render() {
    return (
      <header>
        <div className="Greeting" style={classes.Greeting}>
          <Navbar />
          <Typist avgTypingDelay={70} startDelay={1500}>
            <h2 className="Const" style={classes.Const}>
              {welcome}
            </h2>

            <p className="GreetingContent" style={classes.GreetingContent}>
              name:{" "}
              <span className="Attention" style={classes.Attention}>
                "Shota Togawa"
              </span>{" "}
              ,
              <br />
              location:{" "}
              <span className="Attention" style={classes.Attention}>
                "Vancouver"
              </span>{" "}
              , <br />
              occupation:{" "}
              <span className="Attention" style={classes.Attention}>
                "Web Developer"
              </span>{" "}
              <br />
            </p>
            <h2 className="Braces" style={classes.Braces}>
              {braces}
              <span className="Stick" style={classes.Stick}>
                |
              </span>
            </h2>
          </Typist>
        </div>
      </header>
    );
  }
}

export default Main;
