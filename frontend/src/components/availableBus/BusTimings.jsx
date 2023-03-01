import React, { useEffect, useState } from "react";
import { fetchBusDetail } from "../../redux/action/action";
import Buses from "./Buses";
// import busData from "./busData";
import Pagination from "./Pagination";
// import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

const BusTimings = () => {
  //  const [busDetail, setBusDetial] =useState()
  //   useEffect(()=>{
  //     getBusDetail();
  //   },[]);

  //   const getBusDetail = ()=>{
  //     axios.get(`http://localhost:8080/busdetail`)
  //     .then((res)=>{
  //       setBusDetial(res.data)
  //       // console.log("busDetail",busDetail)
  //     })
  //     .catch((err)=>console.log("err",err))
  //   }

  const buslocation = useSelector((state) => state.busLocation);
  // console.log("buslocation",buslocation)
  const dispatch = useDispatch();
  const busdetails = useSelector((state) => state.busDetail.BusDetail);
  const [selectedBus, setSelectedBus] = useState(busdetails);
  // console.log("busdetails",busdetails)
  function setBus() {
    if (buslocation.busLocation.length > 0) {
      let day = buslocation.busLocation[2].toLocaleString("default", {weekday:'long',})
      // console.log("day", day)
      setSelectedBus(
        busdetails.filter((item) => {
          // console.log("runni",item.runningDay.includes(day))
          return (
            item.pickPoint === buslocation.busLocation[0] &&
            item.dropPoint === buslocation.busLocation[1] &&
            item.runningDay.includes(day)
          );
        })
      );
    } else {
      return selectedBus;
    }
  }
  useEffect(() => {
    setBus();
    fetchBusDetail(dispatch, selectedBus);
  }, []);

  return (
    <div class="col-md-9 col-sm-12">
      <div class="d-flex flex-column mb-3">
        <Pagination />
        <div className="">
          {selectedBus.map((item) => {
            return <Buses item={item} key={item.id} busDate={buslocation.busLocation[2]}/>;
          })}
        </div>
      </div>
    </div>
  );
};

export default BusTimings;
