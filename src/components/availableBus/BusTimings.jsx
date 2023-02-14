import React from "react";
import Buses from "./Buses";
import busData from "./busData";
import Pagination from "./Pagination";

const BusTimings = () => {
  return (
    <div class="col-9">
      <div class="d-flex flex-column mb-3">
       <Pagination/>
        <div className="border border-2 rounded shadow">
          {busData.map((item) => {
            return <Buses item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default BusTimings;
