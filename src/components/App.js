import React, { Component, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { useLocation } from "@reach/router";
import "../styles/App.css";

function Home() {
  return (
    <>
      <div>You are home</div>
      <div data-testid="location-display">{useLocation().pathname}</div>
      <a href="/about">About</a>
      <Route exact path="/about" component={About} />
      <Route exact path="*" component={() => "No match"} />
    </>
  );
}
function About() {
  return (
    <>
      <div>You are on the about page</div>
      <div data-testid="location-display">{useLocation().pathname}</div>
      <a href="/">Home</a>
      <Route exact="/" component={Home} />
      <Route exact path="*" component={() => "No match"} />
    </>
  );
}

class App extends Component {
  render() {
    return (
      <div id="main">
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/" component={Home} />
          <Route path="*" component={() => "No match"} />
        </Switch>
      </div>
    );
  }
}

export default App;
