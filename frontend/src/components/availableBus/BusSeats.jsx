import React from 'react'
// import busSeatData from './busSeatData';

const BusSeats = ({dataBusSeat,prices}) => {
  return (
    <div class="col-8 d-flex flex-column">
            <div className="border border-1 d-flex justify-content-between align-items-center shadow rounded">
              <div
                className="p-2 fw-bold text-muted d-flex justify-content-between align-items-center"
                style={{ writingMode: "vertical-lr", fontSize: "10px" }}
              >
                Uppar Sheet
              </div>
              <div className="flex-grow-1  d-flex-column mx-2 p-2">
                <div className="d-flex justify-content-between align-items-center">
                  {dataBusSeat.seatLeft.map((item) => {
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
                  {dataBusSeat.seatMid.map((item) => {
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
                  {dataBusSeat.seatRight.map((item) => {
                    return (
                      <img
                        alt="busSeat"
                        id="li"
                        src={item.value}
                        style={{ width: "55px" }}
                        className="border border-1 text-center rounded "
                      />
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="border border-1 my-2 shadow rounded">
              <div className="d-flex justify-content-between align-items-center">
                <div
                  className="p-2 fw-bold text-muted d-flex justify-content-between align-items-center"
                  style={{ writingMode: "vertical-lr", fontSize: "10px" }}
                >
                  Lower Sheet
                </div>
                <div className="flex-grow-1  d-flex-column mx-2 p-2">
                <div className="d-flex justify-content-between align-items-center">
                  {dataBusSeat.seatLeft.map((item) => {
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
                  {dataBusSeat.seatMid.map((item) => {
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
                  {dataBusSeat.seatRight.map((item) => {
                    return (
                      <img
                        alt="busSeat"
                        id="li"
                        src={item.value}
                        style={{ width: "55px" }}
                        className="border border-1 text-center rounded "
                      />
                    );
                  })}
                </div>
              </div>
              </div>
            </div>
          </div>
  )
}

export default BusSeats