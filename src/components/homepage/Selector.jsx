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
        height: "100vh",
        backgroundImage: `url(${bgimage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="row justify-content-center g-0 position-relative"
        style={{ paddingTop: "435px", zIndex: 1 }}
      >
        {
          dropdownData.map((item)=>{
            return <Dropdown key={item.id} item={item}/>
          })
        }
        <Calender />
      </div>
      <Link
        to="./AvailableBus"
        className="position-absolute btn btn-warning rounded fw-bold text-white"
        style={{ top: "110%", left: "45%", width: "10%" }}
      >
        Search
      </Link>
    </div>
  );
};

export default Selector;
