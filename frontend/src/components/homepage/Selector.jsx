import React, { useEffect, useState } from "react";
import busDate from "../availableBus/busData";
import { Link } from "react-router-dom";
import Calender from "./Calender";
import Dropdown from "./Dropdown";
import bgimage from "../images/bgimage.jpg";
import { useDispatch } from "react-redux";
import { getSeletedBuses, setBusLocation } from "../../redux/action/action";
const Selector = () => {
  const dispatch = useDispatch();
  const [cityList, setCityList] = useState(["Mumbai", "Delhi", "Hedrabad","Dehradoon"]);
  const [location, setLocation] = useState([]);
  const [selectedDate, setSelectedDate] = useState();
  const [filterBusList, setFilterBusList] = useState(busDate.BusList)
  
  function fromCity(from, index) {
    cityList.splice(index, 1);
    setLocation([...location, from]);
  }
  function toCity(to, index) {
    cityList.splice(index, 1);
    setLocation([...location, to]);
  }
  useEffect(()=>{
    if (selectedDate) {
      setLocation([...location, selectedDate])
      let filterData = busDate.BusList.filter((item) => {
        let day = selectedDate.toLocaleString("default", {weekday:'long',})
        return (
          item.pickPoint === location[0] &&
          item.dropPoint === location[1] &&
          item.runningDay.includes(day)
        );
      })
      setFilterBusList(filterData)
    }

  },[selectedDate])

// console.log("bus",busDate.BusList)
// console.log("filte",filterBusList)
// console.log("buslocation",location)

const handleClickFilterData = ()=>{
  setBusLocation(dispatch,location)
  getSeletedBuses(dispatch,filterBusList)
}


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
          <Calender  selectedDate={setSelectedDate}/>
        </div>
      </div>
      <div className="d-flex justify-content-center">
      <Link
        to="./AvailableBus"
        className="btn btn-warning justify-content-center rounded fw-bold text-white mt-1"
        // style={{ top: "79%", left: "45%", width: "10%" }}
        onClick={handleClickFilterData}
      >
        Search
      </Link>
      </div>
    </div>
  );
};

export default Selector;
