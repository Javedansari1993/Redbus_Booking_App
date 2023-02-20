import React from "react";
import BusSeats from "./BusSeats";
import PayementProceed from "./PayementProceed";
const BusDetails = ({ busSeatData }) => {
  return (
    <div className="container">
      <div class="d-flex flex-column">
        <div class=" d-flex">
          <div className="flex-grow-1 p-1 justify-content-center align-items-center">
            <small className="px-3 fw-bold">Select Sheets</small>
            <div className="d-flex justify-content-between align-items-center mt-2">
              <div
                className="px-3 py-1 fw-bold text-muted"
                style={{ fontSize: "12px" }}
              >
                Select Prices
              </div>
              {busSeatData[0].prices.map((item, index) => {
                return (
                  <div className="d-flex justify-content-between align-items-center border border-1 px-3 py-1 rounded shadow">
                    <input
                      type="checkbox"
                      id="vehicle1"
                      name="vehicle1"
                      value="Bike"
                      style={{ fontSize: "12px" }}
                    />
                    <label
                      for="vehicle1"
                      className="px-1 fw-bold text-muted"
                      style={{ fontSize: "12px" }}
                    >
                      {item.value}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="p-3 d-flex flex-column">
            {busSeatData[1].seatInfo.map((item) => {
              return (
                <div className="d-flex justify-content-start align-items-center">
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                    style={{ fontSize: "12px" }}
                  />
                  <label
                    for="vehicle1"
                    className="fw-bold text-muted px-1"
                    style={{ fontSize: "10px" }}
                  >
                    {item.value}
                  </label>
                </div>
              );
            })}
          </div>
        </div>
        <div class="d-flex">
          <BusSeats busSeatData={busSeatData}/>
          <PayementProceed/>
        </div>
      </div>
    </div>
  );
};

export default BusDetails;
