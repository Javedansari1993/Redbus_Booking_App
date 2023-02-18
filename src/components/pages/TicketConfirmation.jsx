import React from "react";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import CustomerBusDeatails from "../customerDetailpage/CustomerBusDeatails";

const TicketConfirmation = () => {
  return (
    <div>
      <Navbar />
      <div className="container" style={{ marginTop: "80px" }}>
        <div
          className="d-flex  flex-column gap-2justify-content-center align-items-center border border-2 rounded shadow p-4 my-5"
          style={{ marginTop: "70px" }}
        >
          <i
            class="fa-regular fa-circle-check text-success"
            style={{ fontSize: "35px" }}
          ></i>
          <div className="fw-bold" style={{ fontSize: "20px" }}>
            Booking has been confirmed
          </div>
          <pre className="text-muted">Ticket ID: 5U9JSHFG</pre>
          <pre className="text-muted">Payment ID: 2545-326E3-7HHH</pre>
          <pre className="text-muted">Ticket Details: Javed Ansari, F,25yrs</pre>
          <pre className="text-muted">Contact Details: 8439695367</pre>
          <div className="w-50">
          <CustomerBusDeatails/>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TicketConfirmation;
