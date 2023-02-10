import React from "react";
import Buses from "./Buses";

const BusTimings = () => {
  return (
    <div class="col-9">
      <div class="d-flex flex-column mb-3 bg-secondry">
        <div class="border border-2 my-2 rounded shadow" style={{ height: "40px" }}>
          Flex item 1
        </div>
        <div className="border border-2 rounded shadow">
          <Buses />
          <Buses />
          <Buses />
          <Buses />
          <Buses />
          <Buses />
        </div>
      </div>
    </div>
  );
};

export default BusTimings;
