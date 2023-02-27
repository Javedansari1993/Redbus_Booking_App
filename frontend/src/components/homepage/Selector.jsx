import React, { useState } from "react";
import { Link } from "react-router-dom";
import Calender from "./Calender";
import Dropdown from "./Dropdown";
import bgimage from "../images/bgimage.jpg";
import { useDispatch } from "react-redux";
import { setBusLocation } from "../../redux/action/action";
const Selector = () => {
  // let fromCityList = ["Mumbai", "Delhi", "Hedrabad"];
  const [cityList, setCityList] = useState(["Mumbai", "Delhi", "Hedrabad","Dehradoon"]);
  const [location, setLocation] = useState([]);

  function fromCity(from, index) {
    cityList.splice(index, 1);
    // console.log("from",from)
    // setCityList(fromCityList);
    setLocation([...location, from]);
  }
  function toCity(to, index) {
    // console.log("to",to)
    cityList.splice(index, 1);
    setLocation([...location, to]);
  }

  // console.log("location", location)
  useState(() => {}, [cityList]);

  // const buslocation = useSelector((state) => state.busLocation);
  const dispatch = useDispatch();
  // console.log("buslocation", buslocation);

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
      <div>
        <div
          className="row justify-content-center g-0"
          style={{ paddingTop: "200px", zIndex: 1 }}
        >
          <Dropdown val="From" cityList={cityList} selectedCity={fromCity} />
          <Dropdown val="To" cityList={cityList} selectedCity={toCity} />
          <Calender/>
        </div>
      </div>
      <div className="d-flex justify-content-center">
      <Link
        to="./AvailableBus"
        className="btn btn-warning justify-content-center rounded fw-bold text-white mt-1"
        // style={{ top: "79%", left: "45%", width: "10%" }}
        onClick={() => setBusLocation(dispatch, location)}
      >
        Search
      </Link>
      </div>
    </div>
  );
};

export default Selector;
