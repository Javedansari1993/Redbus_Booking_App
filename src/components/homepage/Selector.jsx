import React from "react";
import { Link } from "react-router-dom";
import Calender from "./Calender";
import Dropdown from "./Dropdown";

const Selector = () => {
  return (
    <div className="container-fluid bg-secondary bg-opacity-25" style={{height:"200px"}}>
      <div
        className="row justify-content-center g-0 position-relative"
      >
        <div className="col col-3">
          <Dropdown />
        </div>
        <div className="col col-3">
          <Dropdown />
        </div>
        <div className="col col-3">
          <Calender />
        </div>
      </div>
      <Link to="./AvailableBus" className="position-absolute btn btn-warning rounded fw-bold text-white" style={{top:"40%",left:"45%", width:"10%"}}>
          Search
        </Link>
    </div>
  );
};

export default Selector;
