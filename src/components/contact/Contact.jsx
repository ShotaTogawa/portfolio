import React from "react";
import classes from "./contact.css";
import Icons from "./Icons";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section
      id="contact"
      className="ContactSection"
      style={classes.ContactSection}
    >
      <h3 className="ContactTitle" style={classes.ContactTitle}>
        Get in touch
      </h3>
      <ContactForm />
      <div className="Contact" style={classes.Contact}>
        <Icons />
      </div>
      <div className="Footer" style={classes.Footer}>
        <p className="Copyright" style={classes.Copyright}>
          ©Shota Togawa 2019-2020 All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Contact;
