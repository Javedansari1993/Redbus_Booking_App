import React from "react";
import BusTimings from "../availableBus/BusTimings";
import Filter from "../availableBus/Filter";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

const AvailableBus = () => {
  const obj = {
    name:"Javed",
    profile:"Profile"
  }
  return (
    <div>
      <Navbar item={obj}/>
      <div class="container" style={{marginTop:"70px"}}>
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
