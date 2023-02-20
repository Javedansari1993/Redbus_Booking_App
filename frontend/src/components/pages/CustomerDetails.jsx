import React from "react";
import CustomerInfo from "../customerDetailpage/CustomerInfo";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

const CustomerDetails = () => {
  return (
    <div>
      <Navbar />
      <CustomerInfo/>
      <Footer />
    </div>
  );
};

export default CustomerDetails;
