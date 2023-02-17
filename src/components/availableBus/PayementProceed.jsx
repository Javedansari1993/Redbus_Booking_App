import React from 'react'
import { Link } from "react-router-dom";

const PayementProceed = () => {
  return (
    <div class="col-4 border border-1 mx-2 p-2 rounded mb-3 shadow">
            <small className="fw-bold">Boarding and Dropping</small>
            <div className="d-flex justify-content-center  align-items-center">
              <div className="flex-grow-1 my-2">
                <div className="d-block fw-bold" style={{ fontSize: "11px" }}>
                  -Delhi
                </div>
                <div className="text-muted" style={{ fontSize: "11px" }}>
                  Taxi Service, Lal Qila
                </div>
              </div>
              <div className="fw-bold" style={{ fontSize: "12px" }}>
                22:45
              </div>
            </div>
            <div className="d-flex justify-content-center  align-items-center">
              <div className="flex-grow-1 my-2">
                <div className="d-block fw-bold" style={{ fontSize: "11px" }}>
                  -Mumbai
                </div>
                <div className="text-muted" style={{ fontSize: "11px" }}>
                  Taxi Service, India Gate
                </div>
              </div>
              <div className="fw-bold" style={{ fontSize: "12px" }}>
                08:20
              </div>
            </div>
            <hr className="border border-dark my-1" />
            <div className="d-flex align-items-center">
              <div className="fw-bold flex-grow-1" style={{ fontSize: "12px" }}>
                Seat No
              </div>
              <div className="fw-bold" style={{ fontSize: "12px" }}>
                07
              </div>
            </div>
            <hr className="border border-dark my-1" />
            <div className="fw-bold my-2" style={{ fontSize: "13px" }}>Fare Details</div>
            <div className="d-flex justify-content-center  align-items-center">
              <div className="flex-grow-1 my-2">
                <div className="d-block fw-bold" style={{ fontSize: "11px" }}>
                  -Amount
                </div>
                <div className="text-muted" style={{ fontSize: "11px" }}>
                  Taxi Service, India Gate
                </div>
              </div>
              <div className="fw-bold" style={{ fontSize: "15px" }}>
                INR 750.00
              </div>
            </div>
            <Link  to="/CustomerDetails" className="btn btn-warning rounded fw-bold text-white w-100 mt-1">Proceed to Payment</Link>
          </div>
  )
}

export default PayementProceed