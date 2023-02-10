import React from "react";
import Checkbox from "./Checkbox";
import SearchBox from "./SearchBox";
import data from "./Dataset";

const Filter = () => {
  const [a, b, c, d, e, f] = data;
  console.log(a);
  return (
    <div class="col-3">
      <div class="d-flex flex-column mb-3 bg-secondry">
        <div
          class="d-flex border border-2 p-2 my-2 rounded shadow"
          style={{ height: "40px" }}
        >
          <div className="fw-bold flex-grow-1">Filter</div>
          <small className="fw-bold" style={{fontSize:"11px"}}>Clear All</small>
        </div>
        <div className="border border-2 rounded shadow">
          <Checkbox dept={a} />
          <Checkbox dept={b} />
          <SearchBox dept={c} />
          <Checkbox dept={d} />
          <Checkbox dept={e} />
          <SearchBox dept={f} />
        </div>
      </div>
    </div>
  );
};

export default Filter;
