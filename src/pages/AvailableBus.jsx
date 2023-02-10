import React from "react";
import Checkbox from "../components/Checkbox";

const AvailableBus = () => {
  return (
    <div class="container border border-1">
      <div class="row">
        <div class="col-3 border border-1">
          <div class="d-flex flex-column mb-3 bg-secondry">
            <div class="border border-1 my-2" style={{ height: "40px" }}>
              Flex item 1
            </div>
            <div class="border border-1" style={{ height: "150px" }}>
              <Checkbox/>
            </div>
            <div class="border border-1" style={{ height: "150px" }}>
              Flex item 3
            </div>
            <div class="border border-1" style={{ height: "150px" }}>
              Flex item 1
            </div>
            <div class="border border-1" style={{ height: "150px" }}>
              Flex ite            </div>
            <div class="border border-1" style={{ height: "150px" }}>
              Flex item 3
            </div>
          </div>
        </div>
        <div class="col-9 border border-1">
          <div class="d-flex flex-column mb-3 bg-secondry">
            <div class="border border-1 my-2" style={{ height: "40px" }}>
              Flex item 1
            </div>
            <div class="container border border-1" style={{ height: "150px" }}>
              <div class="row">
                <div class="col-9 border border-1" style={{height:"150px"}}>Column</div>
                <div class="col-3 border border-1">Column</div>
              </div>
            </div>
            <div class="container border border-1" style={{ height: "150px" }}>
              <div class="row">
                <div class="col-9 border border-1" style={{height:"150px"}}>Column</div>
                <div class="col-3 border border-1">Column</div>
              </div>
            </div>
            <div class="container border border-1" style={{ height: "150px" }}>
              <div class="row">
                <div class="col-9 border border-1" style={{height:"150px"}}>Column</div>
                <div class="col-3 border border-1">Column</div>
              </div>
            </div>
            <div class="container border border-1" style={{ height: "150px" }}>
              <div class="row">
                <div class="col-9 border border-1" style={{height:"150px"}}>Column</div>
                <div class="col-3 border border-1">Column</div>
              </div>
            </div>
            <div class="container border border-1" style={{ height: "150px" }}>
              <div class="row">
                <div class="col-9 border border-1" style={{height:"150px"}}>Column</div>
                <div class="col-3 border border-1">Column</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailableBus;
