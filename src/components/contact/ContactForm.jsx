import React, { Component } from "react";
import { Link } from "react-router-dom";
import classes from "./contactFrom.css";

class ContactForm extends Component {
  render() {
    return (
      <div className="Container" style={classes.Container}>
        <div className="FormContainer" style={classes.FormContainer}>
          <div className="Header" style={classes.Header}></div>
          <form
            className="ContactForm"
            style={classes.ContactForm}
            action="https://formspree.io/xeqeekzj"
            method="POST"
          >
            <input
              type="text"
              name="name"
              className="FormInput"
              style={classes.FormInput}
              placeholder="FULL NAME"
            />
            <input
              type="email"
              name="_replyto"
              style={classes.FormInput}
              className="FormInput"
              placeholder="EMAIL ADDRESS"
            />
            <textarea
              className="TextArea"
              style={classes.TextArea}
              name="message"
              placeholder="MESSAGE"
            ></textarea>
            <button
              type="submit"
              className="SubmitButton"
              style={classes.SubmitButton}
            >
              Send
            </button>
          </form>
          {/* <Link to="/">
            <div className="Xbtn" style={classes.Xbtn}>
              &#10005;
            </div>
          </Link> */}
        </div>
      </div>
    );
  }
}

export default ContactForm;
