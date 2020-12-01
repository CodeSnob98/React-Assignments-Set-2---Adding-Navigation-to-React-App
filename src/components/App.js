import React, { Component, useState } from "react";
import { Route, Switch } from "react-router-dom";
import "../styles/App.css";

function Home() {
  return (
    <>
      <div>You are home</div>
    </>
  );
}
function About() {
  return (
    <>
      <div>You are on the about page</div>
      <a href="/about">About</a>
      <a href="/">Home</a>
      <Route exact path="/about" component={About} />
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
