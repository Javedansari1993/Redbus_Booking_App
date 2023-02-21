import React, { useEffect, useState } from "react";
import Buses from "./Buses";
import busData from "./busData";
import Pagination from "./Pagination";
// import axios from "axios";
import { useSelector } from "react-redux";

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

const buslocation= useSelector((state) => state.busLocation);
const picklocation = buslocation.busLocation.pickPoint
const droplocation = buslocation.busLocation.dropPoint

const bus  = busData.filter((item)=>{
  return item.pickPoint===picklocation && item.dropPoint===droplocation
})

// console.log("bus",bus)

  return (
    <div class="col-md-9 col-sm-12">
      <div class="d-flex flex-column mb-3">
       <Pagination/>
        <div className="">
          {bus.map((item) => {
            return <Buses item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default BusTimings;
