import React from "react";
import BusTimings from "../availableBus/BusTimings";
import Filter from "../availableBus/Filter";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

const AvailableBus = () => {
  return (
    <div>
      <Navbar />
      <div class="container">
        <div class="row">
          <Filter />
          <BusTimings />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AvailableBus;
