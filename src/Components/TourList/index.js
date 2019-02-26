import React, { Component } from "react";
import "./TourList.scss";
import Tour from "../Tour/Tour.js";
import { tourData } from "./tourData.js";

export default class TourList extends Component {
  state = {
    tours: tourData
  };

  removeTour = id => {
    const sortedtours = this.state.tours.filter(tour => tour.id !== id);
    this.setState({
      tours: sortedtours
    });
  };
  render() {
    return (
      <section className="tourlist">
        {this.state.tours.map(tour => {
          return (
            <Tour key={tour.id} tour={tour} removeTour={this.removeTour} />
          );
        })}
      </section>
    );
  }
}
