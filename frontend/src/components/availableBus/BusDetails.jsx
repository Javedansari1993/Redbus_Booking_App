import React, { useState } from "react";
import BusSeats from "./BusSeats";
import PayementProceed from "./PayementProceed";
const BusDetails = ({ mainitem }) => {
    const busSeatData = mainitem.busSeatData
  const seatPrices = ["All", "599", "699", "899", "1199"];
  const [prices, setPrices] = useState("All");
  const [seatDate, setSeatData] = useState(busSeatData);
  console.log("prices", prices);
  function handleSeat(e) {
    setPrices(e.target.value);
    if (e.target.checked === true && prices === "All") {
      return setSeatData(busSeatData);
    } else if (e.target.checked === true) {
      const seatPrice = Object.values(busSeatData).filter((item) => {
        return item.prices === prices;
      });
      setSeatData(seatPrice);
    }
  }
  return (
    <div className="container">
      {seatDate.map((item) => {
        return (
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
                  {seatPrices.map((item) => {
                    return (
                      <div className="d-flex justify-content-between align-items-center border border-1 px-3 py-1 rounded shadow">
                        <input
                          type="checkbox"
                          id="vehicle1"
                          name={item}
                          value={item}
                          style={{ fontSize: "12px" }}
                          onChange={handleSeat}
                          // onChange={(e)=>setPrices(e.target.value)}
                          // onClick={handleSeat}
                        />
                        <label
                          for="vehicle1"
                          className="px-1 fw-bold text-muted"
                          style={{ fontSize: "12px" }}
                        >
                          {item}
                        </label>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="p-3 d-flex flex-column">
                {item.seatInfo.map((val) => {
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
                        {val.value}
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>
            <div class="d-flex">
              <BusSeats dataBusSeat={item} prices={prices} />
              <PayementProceed  mainitem={mainitem}/>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BusDetails;
