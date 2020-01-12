import React from "react";
import classes from "./about.css";
import myImage from "../../assets/images/my_image.jpg";

const About = () => {
  return (
    <section id="about">
      <h3 className="AboutTitle" style={classes.AboutTitle}>
        About Me
      </h3>
      <div className="AboutContainer" style={classes.AboutContainer}>
        <div className="MyImageBox" style={classes.MyImage}>
          <img
            src={myImage}
            alt="Shota"
            className="MyImage"
            style={classes.MyImage}
          />
        </div>
        <div className="AboutMe" style={classes.AboutMe}>
          <div
            className="AboutDetailContainer"
            style={classes.AboutDetailContainer}
          >
            <span className="Label" style={classes.Label}>
              Introduction
            </span>
            <p className="AboutContent" style={classes.Description}>
              I am Shota who raised in Japan and currently based in Vancouver,
              Canada. After working for almost 3 years as a system counsultant
              and engineer in Japan, I decided to try a new challenge to become
              a web developer in global fields.
            </p>
          </div>
          <div>
            <span className="Label" style={classes.Label}>
              Work Experience
            </span>
            <p className="AboutContent" style={classes.Description}>
              2016 - 2018
              <a
                href="https://www.future.co.jp/en/architect/"
                rel="noreferrer noopener"
                target="_blank"
                alt="Future"
                style={{ color: "#888888", borderBottom: "1px  solid #888888" }}
              >
                {" "}
                Future Architect{" "}
              </a>{" "}
              / Associate consultant - Japan <br />
              2013 - 2015
              <a
                href="https://www.asoview.com/"
                rel="noreferrer noopener"
                target="_blank"
                alt="asoview"
                style={{ color: "#888888", borderBottom: "1px  solid #888888" }}
              >
                {" "}
                Asoview
              </a>{" "}
              / Sales - Japan
            </p>
          </div>
          <div>
            <span className="Label" style={classes.Label}>
              Education
            </span>
            <p className="AboutContent" style={classes.Description}>
              2019 - Present Cornerstone International Community College, Canada
              / Web Development Co-Op Diploma
              <br />
              2011 - 2016 Meiji University, Japan / Information Communication
              <br />
              2012 - 2013 Bellevue College, The USA
            </p>
          </div>
          <div>
            <span className="Label" style={classes.Label}>
              Like
            </span>
            <p className="AboutContent" style={classes.Description}>
              Baseball, Coffee, Karaoke, Manga, Onsen, Technology, Tennis,
              Travel, Udemy, Yoga
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
