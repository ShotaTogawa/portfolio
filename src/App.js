import React from "react";
import TopPage from "./TopPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ContactForm from "./components/contact/ContactForm";
import AppDetail from "./components/appDetail/AppDetail";

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={TopPage} />
      <Route path="/contact" exact component={ContactForm} />
      <Route path="/app-detail" exact component={AppDetail} />
    </Router>
  );
};

export default App;
