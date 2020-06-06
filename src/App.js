import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";
import Home from "./components/Home/Home";
import Bio from "./components/Bio/Bio";
import Contact from "./components/Contact/Contact";

export default function App() {
  return (
    <Router>
      <GlobalStyle />
      <div className="gif-overlay">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/bio" component={Bio} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}
