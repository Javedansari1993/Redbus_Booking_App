import React from "react";

const CustomerInfo = () => {
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
    <div className="container" style={{ marginTop: "60px" }}>
      <div class="row border border-1">
        <div class="d-flex-column col-8 border border-1">
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
          <div class="mb-2">
            <div className="fw-bold">Enter traveller Details</div>
            <div class="border border-2 my-1 rounded shadow p-2">
              <form className="row g-3 needs-validation" noValidate>
                <div className="col-md-4">
                  <label htmlFor="validationCustom01" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationCustom01"
                    defaultValue="Mark"
                    required
                  />
                  <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="col-md-4">
                  <label htmlFor="validationCustom02" className="form-label">
                    Age
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="validationCustom02"
                    defaultValue="Otto"
                    required
                  />
                  <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="col-md-4">
                  <label
                    htmlFor="validationCustomUsername"
                    className="form-label"
                  >
                    Email ID
                  </label>
                  <div className="input-group has-validation">
                    <span className="input-group-text" id="inputGroupPrepend">
                      @
                    </span>
                    <input
                      type="email"
                      className="form-control"
                      id="validationCustomUsername"
                      aria-describedby="inputGroupPrepend"
                      required
                    />
                    <div className="invalid-feedback">
                      Please choose a username.
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <label htmlFor="validationCustom03" className="form-label">
                    City
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationCustom03"
                    required
                  />
                  <div className="invalid-feedback">
                    Please provide a valid city.
                  </div>
                </div>
                <div className="col-md-3">
                  <label htmlFor="validationCustom04" className="form-label">
                    Gender
                  </label>
                  <select
                    className="form-select"
                    id="validationCustom04"
                    required
                  >
                    <option selected disabled value>
                      Choose...
                    </option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                  <div className="invalid-feedback">
                    Please select a valid state.
                  </div>
                </div>
                <div className="col-md-3">
                  <label htmlFor="validationCustom05" className="form-label">
                    Mobile No
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="validationCustom05"
                    required
                  />
                  <div className="invalid-feedback">
                    Please provide a valid zip.
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="invalidCheck"
                      required
                    />
                    <label className="form-check-label" htmlFor="invalidCheck">
                      Agree to terms and conditions
                    </label>
                    <div className="invalid-feedback">
                      You must agree before submitting.
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <button className="btn btn-primary" type="submit">
                    Submit form
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="col border border-1">Column</div>
      </div>
    </div>
  );
};

export default CustomerInfo;
