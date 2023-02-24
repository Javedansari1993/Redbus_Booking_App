import React, { useState } from "react";
import { Link } from "react-router-dom";
import Calender from "./Calender";
import Dropdown from "./Dropdown";
import bgimage from "../images/bgimage.jpg";
import { useDispatch} from "react-redux";
import { setBusLocation } from "../../redux/action/action";
const Selector = () => {
  let fromCityList = ["Mumbai", "Delhi", "Hedrabad"];
  const [cityList, setCityList] = useState(["select From City first"]);
  const [location, setLocation] = useState([]);

  function fromCity(from, index) {
    fromCityList.splice(index, 1);
    // console.log("from",from)
    setCityList(fromCityList);
    setLocation([...location, from]);
  }
  function toCity(to, index) {
    // console.log("to",to)
    setLocation( [...location, to]);
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
      <div
        className="row justify-content-center g-0 position-relative"
        style={{ paddingTop: "200px", zIndex: 1 }}
      >
        <Dropdown val="From" cityList={fromCityList} selectedCity={fromCity} />
        <Dropdown val="To" cityList={cityList} selectedCity={toCity} />
        <Calender className="col-sm-6" />
      </div>
      <Link
        to="./AvailableBus"
        className="position-absolute btn btn-warning rounded fw-bold text-white mt-1"
        style={{ top: "79%", left: "45%", width: "10%" }}
        onClick={() => setBusLocation(dispatch, location)}
      >
        Search
      </Link>
    </div>
  );
};

export default Selector;
