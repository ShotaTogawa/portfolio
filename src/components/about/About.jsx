import React from "react";
import classes from "./about.css";
import myImage from "../../assets/images/my_image.jpg";

const About = () => {
  return (
    <section id="about">
      <div>
        <h3 className="AboutTitle" style={classes.About}>
          About me
        </h3>
      </div>
      <div className="Image" style={classes.Image}>
        <img
          className="Selfie"
          src={myImage}
          style={classes.Selfie}
          alt="shota togawa"
        />
      </div>
      <div className="AlignCenter">
        <h3 className="Myname" style={classes.Myname}>
          Shota Togawa
        </h3>
        {/* <h4 className="Occupation" style={classes.Occupation}>
          Web Developer
        </h4> */}
        <p className="AboutMe" style={classes.AboutMe}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum nemo
          incidunt suscipit cumque quas, nesciunt error atque voluptate quam
          quis, excepturi perferendis nisi facere magni, ipsum officiis iusto
          totam quo.
        </p>
      </div>
    </section>
  );
};

export default About;
