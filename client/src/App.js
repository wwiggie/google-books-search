import React, { Component } from "react";
import Books from "./pages/Books";
import Nav from "./components/Nav";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Books />
      </div>
    );
  }
}

export default App;
