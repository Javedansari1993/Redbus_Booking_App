import React, { useState } from "react";
import BusDetails from "./BusDetails";
import busSeatData from "./busSeatData";
const Buses = ({ item }) => {
  const [sheet, setSheet] = useState(false)
  return (
    <div class="container border border-1 mr-2 mt-2 rounded">
      <div class="row">
        <div
          class="col-9 border border-1 d-flex-column p-3"
          style={{ height: "155px" }}
        >
          <small className="d-flex">
            <span className="fw-bold">{item.name}</span>
            <small className="bg-success text-light px-1 mx-2 rounded h-25">
              <i class="fa-regular fa-star">{item.rating}</i>
            </small>
            <small className="text-muted">Rating</small>
          </small>
          <small className="d-flex gap-3 py-2">
            {item.seatType.map((val)=>{
              return <small className="fst-normal text-muted">{val}</small>
            })} 
          </small>
          <div className="d-flex my-1">
            <small className="fw-semobold">{item.depTime}</small>
            <small
              className="mx-3 text-muted d-flex align-items-center"
              style={{ fontSize: "12px" }}
            >
              ---{item.timeduration}---
            </small>
            <small>{item.arrTime}</small>
          </div>
          <div className="d-flex my-4 gap-3">
            {item.seatInfo.map((val)=>{
              return <div
              className="fw-bold text-primary"
              style={{ fontSize: "10px" }}
            >
             {val}
            </div>
            })}
          </div>
        </div>
        <div class="col-3 d-flex-column border border-1 p-2 text-center justify-content-center align-items-center">
          <div className="my-1">Trip Cost</div>
          <div className="text-muted" style={{ fontSize: "10px" }}>
            Per Ticket Price
          </div>
          <h6>{item.price}</h6>
          <button className="btn btn-warning my-1" onClick={()=>setSheet(!sheet)}>View Seat</button>
        </div>
        {sheet &&  <BusDetails busSeatData={busSeatData}/> }
       
      </div>
    </div>
  );
};

export default Buses;