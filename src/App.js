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
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/bio" component={Bio} />
          <Route exact path="/contacto" component={Contact} />
        </Switch>
        <div className="gif-overlay" />
    </Router>
  );
}
