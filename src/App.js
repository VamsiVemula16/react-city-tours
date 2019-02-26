import React, { Component } from "react";
import "./App.scss";
import Navbar from "./Components/Navbar/Navbar";

import TourList from "./Components/TourList";

class App extends Component {
  render() {
    return (
      <section>
        <Navbar />
        <TourList />
      </section>
    );
  }
}

export default App;
