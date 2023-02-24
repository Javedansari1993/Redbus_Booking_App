import React, { useEffect, useState } from "react";
import Buses from "./Buses";
// import busData from "./busData";
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
const busdetails = useSelector((state) => state.busDetail.BusDetail);
const [selectedBus,setSelectedBus] =useState(busdetails)

function setBus(){
  if(buslocation.busLocation.length>0){
    setSelectedBus( busdetails.filter((item)=>{
   return item.pickPoint===buslocation.busLocation[0] && item.dropPoint===buslocation.busLocation[1]
 }))
 }else {
  return selectedBus
 }
}
 useEffect(() => {
  setBus()
}, []);


  return (
    <div class="col-md-9 col-sm-12">
      <div class="d-flex flex-column mb-3">
       <Pagination/>
        <div className="">
          {selectedBus.map((item) => {
            return <Buses item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default BusTimings;
