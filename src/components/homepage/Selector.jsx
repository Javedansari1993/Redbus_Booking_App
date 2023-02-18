import React from "react";
import { Link } from "react-router-dom";
import Calender from "./Calender";
import Dropdown from "./Dropdown";
import bgimage from "../images/bgimage.jpg";

const Selector = () => {
  const dropdownData = [
    { id: 1, value: "Form" },
    { id: 2, value: "To" },
  ];
  return (
    <div
      className="container-fluid"
      style={{
        height: "70vh",
        backgroundImage: `url(${bgimage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="row justify-content-center g-0 position-relative"
        style={{ paddingTop: "200px", zIndex: 1 }}
      >
        {
          dropdownData.map((item)=>{
            return <Dropdown key={item.id} item={item}/>
          })
        }
        <Calender className="col-sm-6"/>
      </div>
      <Link
        to="./AvailableBus"
        className="position-absolute btn btn-warning rounded fw-bold text-white mt-1"
        style={{ top: "79%", left: "45%", width: "10%" }}
      >
        Search
      </Link>
    </div>
  );
};

export default Selector;
