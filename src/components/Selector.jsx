import React from "react";
import Dropdown from "./Dropdown";
import Dropdown2 from "./Dropdown2";

const Selector = () => {
  return (
    <div className="container text-center">
      <div className="row justify-content-center">
        <div className="col col-3 border border-primary">
            <Dropdown/>
        </div>
        <div className="col col-3 border border-primary">
          <Dropdown2/>
        </div>
        <div className="col col-3 border border-primary">3 of 3</div>
      </div>
    </div>
  );
};

export default Selector;
