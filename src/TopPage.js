import React, { Component } from "react";
import Main from "./components/main/Main";
import About from "./components/about/About";
import Work from "./components/work/Work";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";

class TopPage extends Component {
  render() {
    return (
      <div>
        <Main />
        <About />
        <Work />
        <Skills />
        <Contact />
      </div>
    );
  }
}

export default TopPage;
