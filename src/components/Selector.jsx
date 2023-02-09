import React from "react";
import Calender from "./Calender";
import Dropdown from "./Dropdown";

const Selector = () => {
  return (
    <div className="container-fluid bg-secondary bg-opacity-25">
      <div className="row justify-content-center g-0">
        <div className="col col-3">
          <Dropdown />
        </div>
        <div className="col col-3">
          <Dropdown/>
        </div>
        <div className="col col-3">
          <Calender/>
        </div>
      </div>
    </div>
  );
};

export default Selector;
