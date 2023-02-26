import React, { useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import { getSeatNumber } from "../../redux/action/action";

const Seat = ({item}) => {
  // console.log("item", item)
  const prices = useSelector((state)=>state.busPrice)
  const [seatColor, setSeatColor] = useState("");
  const [selectSeat, setselectSeat] = useState(false);
  const dispatch = useDispatch()
 console.log("vlsjd",item.prices)
  function handleSelectSeat() {
    if (selectSeat === false) {
      setSeatColor("blue");
      setselectSeat(true);
    } else {
      setSeatColor("");
      setselectSeat(false);
    }
    getSeatNumber(dispatch, item)
    // console.log("selectseat",item)
  }
  return (
    <div>
      <img
        alt="busSeat"
        id="li"
        src={item.value}
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
