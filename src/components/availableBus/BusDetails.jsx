import React from "react";
import seat from "../images/seat.png";
const BusDetails = ({ busSeatData }) => {
  return (
    <div className="container">
      <div class="d-flex flex-column">
        <div class=" d-flex">
          <div className="flex-grow-1 p-1 justify-content-center align-items-center">
            <small className="px-3 fw-bold">Select Sheets</small>
            <div className="d-flex justify-content-between align-items-center mt-3">
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
          <div className="p-4 d-flex flex-column" style={{ width: "150px" }}>
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
          <div class="col-8 d-flex flex-column">
            <div className="border border-1 d-flex justify-content-between align-items-center shadow rounded">
              <div
                className="p-2 fw-bold text-muted d-flex justify-content-between align-items-center"
                style={{ writingMode: "vertical-lr", fontSize: "10px" }}
              >
                Uppar Sheet
              </div>
              <div className="flex-grow-1  d-flex-column mx-2 p-3">
                <div className="d-flex justify-content-between align-items-center">
                  {busSeatData[2].seatImg.map((item) => {
                    return (
                      <img
                        alt="busSeat"
                        id="li"
                        src={item.value}
                        style={{ width: "55px" }}
                        className="border border-1 text-center rounded"
                      />
                    );
                  })}
                </div>
                <div className="d-flex justify-content-between align-items-center my-2">
                  {busSeatData[2].seatImg.map((item) => {
                    return (
                      <img
                        alt="busSeat"
                        id="li"
                        src={item.value}
                        style={{ width: "55px" }}
                        className="border border-1 text-center rounded"
                      />
                    );
                  })}
                </div>
                <div className="d-flex flex-row-reverse align-items-center gap-3 mt-4">
                  {busSeatData[2].seatImg.slice(0, 5).map((item) => {
                    return (
                      <img
                        alt="busSeat"
                        id="li"
                        src={seat}
                        style={{ width: "55px" }}
                        className="border border-1 text-center rounded "
                      />
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="border border-1 my-3 shadow rounded">
              <div className="d-flex justify-content-between align-items-center">
                <div
                  className="p-2 fw-bold text-muted d-flex justify-content-between align-items-center"
                  style={{ writingMode: "vertical-lr", fontSize: "10px" }}
                >
                  Lower Sheet
                </div>
                <div className="flex-grow-1  d-flex-column mx-2 p-3">
                  <div className="d-flex justify-content-between align-items-center">
                    {busSeatData[2].seatImg.map((item) => {
                      return (
                        <img
                          alt="busSeat"
                          id="li"
                          src={item.value}
                          style={{ width: "55px" }}
                          className="border border-1 text-center rounded"
                        />
                      );
                    })}
                  </div>
                  <div className="d-flex justify-content-between align-items-center my-2">
                    {busSeatData[2].seatImg.map((item) => {
                      return (
                        <img
                          alt="busSeat"
                          id="li"
                          src={item.value}
                          style={{ width: "55px" }}
                          className="border border-1 text-center rounded"
                        />
                      );
                    })}
                  </div>
                  <div className="d-flex flex-row-reverse align-items-center gap-3 mt-4">
                    {busSeatData[2].seatImg.slice(0, 5).map((item) => {
                      return (
                        <img
                          alt="busSeat"
                          id="li"
                          src={seat}
                          style={{ width: "55px" }}
                          className="border border-1 text-center rounded"
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-4 border border-1 mx-2 rounded mb-3 shadow">
            detailes
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusDetails;
