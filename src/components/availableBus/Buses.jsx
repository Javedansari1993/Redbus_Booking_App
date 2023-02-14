import React, { useState } from "react";
import BusDetails from "./BusDetails";

const Buses = ({ item }) => {
  const [sheet, setSheet] = useState(false)
  return (
    <div class="container border border-1">
      <div class="row">
        <div
          class="col-9 border border-1 d-flex-column p-3"
          style={{ height: "155px" }}
        >
          <small className="d-flex">
            <span className="fw-bold">{item.name}</span>
            <small className="bg-success text-light px-1 mx-2 rounded h-25">
              <i class="fa-regular fa-star">4.5</i>
            </small>
            <small className="text-muted">Rating</small>
          </small>
          <small className="d-flex gap-3 py-2">
            <small className="fst-normal text-muted">A/C Sleeper</small>
            <small className="fsw-normal text-muted">|</small>
            <small className="fsw-normal text-muted">Left Seat</small>
            <small className="fsw-normal text-muted">|</small>
            <small className="fst-normal text-muted">Window Seat</small>
          </small>
          <div className="d-flex my-1">
            <small className="fw-semobold">22:45,16NOV</small>
            <small
              className="mx-3 text-muted d-flex align-items-center"
              style={{ fontSize: "12px" }}
            >
              ---07hrs59min---
            </small>
            <small>06:20,17NOV</small>
          </div>
          <div className="d-flex my-4">
            <div className="fw-bold text-primary" style={{ fontSize: "10px" }}>
              Live train
            </div>
            <div
              className="fw-bold text-primary mx-3"
              style={{ fontSize: "10px" }}
            >
              Bus Photo
            </div>
            <div className="fw-bold text-primary" style={{ fontSize: "10px" }}>
              Review
            </div>
            <div
              className="fw-bold text-primary mx-3"
              style={{ fontSize: "10px" }}
            >
              Privacy
            </div>
            <div className="fw-bold text-primary" style={{ fontSize: "10px" }}>
              Amenities
            </div>
          </div>
        </div>
        <div class="col-3 d-flex-column border border-1 p-2 text-center justify-content-center align-items-center">
          <div className="my-1">Trip Cost</div>
          <div className="text-muted" style={{ fontSize: "10px" }}>
            starting from
          </div>
          <h6>$899</h6>
          <button className="btn btn-warning my-1" onClick={()=>setSheet(!sheet)}>View Seat</button>
        </div>
        {sheet &&  <BusDetails/> }
       
      </div>
    </div>
  );
};

export default Buses;
