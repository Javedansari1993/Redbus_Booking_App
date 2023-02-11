import React from "react";

const Buses = () => {
  return (
    <div class="container border border-1">
      <div class="row">
        <div
          class="col-9 border border-1 d-flex-column p-3"
          style={{ height: "150px" }}
        >
          <small className="d-flex">
            <span className="fw-bold">Intercity Smart Bus</span>
            <small className="bg-success text-light px-1 mx-2 rounded h-25">
            <i class="fa-regular fa-star">4.5</i>
            </small>
            <small className="text-muted">Rating</small>
          </small>
          <small className="d-flex gap-3 py-2">
            <small className="fst-normal text-muted">A/C Sleeper</small>
            <small className="fw-semibold text-muted">|</small>
            <small className="fw-semibold text-muted">Left Seat</small>
            <small className="fw-semibold text-muted">|</small>
            <small className="fst-normal text-muted">Window Seat</small>
          </small>
          <div className="d-flex">
            <small className="fw-semobold">22:45,16NOV</small>
            <small className="mx-3 text-muted">---07hrs59min---</small>
            <small>06:20,17NOV</small>
          </div>
          <div>1</div>
        </div>
        <div class="col-3 border border-1">Column</div>
      </div>
    </div>
  );
};

export default Buses;
