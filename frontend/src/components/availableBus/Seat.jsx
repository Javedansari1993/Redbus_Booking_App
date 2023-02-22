import React, { useState } from "react";

const Seat = ({ data}) => {
  const [seatColor, setSeatColor] = useState("");
  const [selectSeat, setselectSeat] = useState(false);

  function handleSelectSeat() {
    if (selectSeat === false) {
      setSeatColor("blue");
      setselectSeat(true);
    } else {
      setSeatColor("");
      setselectSeat(false);
    }
  }
  return (
    <div>
      <img
        alt="busSeat"
        id="li"
        src={data}
        className="border border-1 text-center rounded"
        onClick={handleSelectSeat}
        style={{
          width: "55px",
          backgroundColor: seatColor,
        }}
      />
    </div>
  );
};

export default Seat;
