import React from 'react'

const CustomerBusDeatails = () => {
    const item = {
        id: 1,
        name: "Intercity Smart Bus",
        seatType: ["A/C Sleeper(2+1)", "|", "Left Seat", "|", "Window Seat"],
        seatInfo: ["Live Tracking", "Policies", "Photos", "Amenities", "Review"],
        rating: "4.5",
        price: "$899",
        depTime: "22:45,16NOV",
        arrTime: "06:20,17NOV",
        timeduration: "07hrs59min",
      };
  return (
    <div class="border border-2 my-2 rounded shadow p-1">
            <div class="d-flex-column p-2">
              <small className="d-flex">
                <span className="fw-bold">{item.name}</span>
                <small className="bg-success text-light px-1 mx-2 rounded h-25">
                  <i class="fa-regular fa-star">{item.rating}</i>
                </small>
                <small className="text-muted">Rating</small>
              </small>
              <small className="d-flex gap-3 py-2">
                {item.seatType.map((val) => {
                  return <small className="fst-normal text-muted">{val}</small>;
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
              <div className="d-flex my-2 gap-5">
                <div>
                  <div className="fw-bold" style={{ fontSize: "12px" }}>
                    Delhi
                  </div>
                  <div className="text-muted" style={{ fontSize: "12px" }}>
                    Texi Service, Lal Qila
                  </div>
                </div>
                <div>
                  <div className="fw-bold" style={{ fontSize: "12px" }}>
                    Mumbai
                  </div>
                  <div className="text-muted" style={{ fontSize: "12px" }}>
                    Texi Service, India Gate
                  </div>
                </div>
              </div>
            </div>
          </div>
  )
}

export default CustomerBusDeatails