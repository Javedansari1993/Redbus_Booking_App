import React, { useState } from "react";
import { useDispatch} from "react-redux";
import { getSeatNumber } from "../../redux/action/action";

const Seat = ({ data,item}) => {
  // console.log("item", item)
  const [seatColor, setSeatColor] = useState("");
  const [selectSeat, setselectSeat] = useState(false);
  const dispatch = useDispatch()

  function handleSelectSeat() {
    if (selectSeat === false) {
      setSeatColor("blue");
      setselectSeat(true);
    } else {
      setSeatColor("");
      setselectSeat(false);
    }
    getSeatNumber(dispatch, item)
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
