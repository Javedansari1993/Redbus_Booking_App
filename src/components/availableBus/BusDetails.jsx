import React from "react";

const BusDetails = () => {
  return (
    <div className="container">
      <div class="d-flex flex-column">
        <div class=" d-flex border border-1">
          <div className="flex-grow-1 border border-1 p-1">
            <small className="px-3 fw-bold">Select Sheets</small>
            <div className="d-flex justify-content-between align-items-center">
              <div
                className="px-3 py-1 fw-bold text-muted"
                style={{ fontSize: "12px" }}
              >
                Select Prices
              </div>
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
                  All
                </label>
              </div>
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
                  599
                </label>
              </div>
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
                  599
                </label>
              </div>
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
                  599
                </label>
              </div>
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
                  599
                </label>
              </div>
            </div>
          </div>
          <div className="p-4 d-flex flex-column" style={{ width: "150px" }}>
            <div className="d-flex justify-content-center align-items-center">
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
                style={{ fontSize: "12px" }}
              >
                Price 1
              </label>
            </div>
            <div className="d-flex justify-content-center align-items-center">
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
                style={{ fontSize: "12px" }}
              >
                Price 1
              </label>
            </div>
            <div className="d-flex justify-content-center align-items-center">
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
                style={{ fontSize: "12px" }}
              >
                Price 1
              </label>
            </div>
          </div>
        </div>
        <div class="d-flex">
          <div class="col-8 d-flex flex-column border border-1 rounded shadow">
            <div className="border border-1 d-flex">
              <div
                className="p-2"
                style={{ writingMode: "vertical-lr", fontSize: "10px" }}
              >
                Uppar Sheet
              </div>
              <div className="flex-grow-1  d-flex-column border border-1 p-3">
                <div className="d-flex justify-content-between align-items-center">
                  <span><i class="fa-sharp fa-regular fa-chair"></i></span>
                  <span><i class="fa-sharp fa-regular fa-chair"></i></span>
                  <span><i class="fa-sharp fa-regular fa-chair"></i></span>
                  <span><i class="fa-sharp fa-regular fa-chair"></i></span>
                  <span><i class="fa-sharp fa-regular fa-chair"></i></span>
                  <span><i class="fa-sharp fa-regular fa-chair"></i></span>
                  <span><i class="fa-sharp fa-regular fa-chair"></i></span>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                <span><i class="fa-sharp fa-regular fa-chair"></i></span>
                  <span><i class="fa-sharp fa-regular fa-chair"></i></span>
                  <span><i class="fa-sharp fa-regular fa-chair"></i></span>
                  <span><i class="fa-sharp fa-regular fa-chair"></i></span>
                  <span><i class="fa-sharp fa-regular fa-chair"></i></span>
                  <span><i class="fa-sharp fa-regular fa-chair"></i></span>
                  <span><i class="fa-sharp fa-regular fa-chair"></i></span>
                </div>
                <div className="d-flex flex-row-reverse align-items-center">
                <span><i class="fa-sharp fa-regular fa-chair mr-4"></i></span>
                  <span><i class="fa-sharp fa-regular fa-chair"></i></span>
                  <span><i class="fa-sharp fa-regular fa-chair"></i></span>
                  <span><i class="fa-sharp fa-regular fa-chair"></i></span>
                  <span><i class="fa-sharp fa-regular fa-chair"></i></span>
                  <span><i class="fa-sharp fa-regular fa-chair"></i></span>
                  <span><i class="fa-sharp fa-regular fa-chair"></i></span>
                </div>
              </div>
            </div>
            <div className="border border-1">lower case</div>
          </div>
          <div class="col-4 border border-1">detailes</div>
        </div>
      </div>
    </div>
  );
};

export default BusDetails;
