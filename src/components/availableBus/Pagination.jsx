import React from "react";
import { useState } from "react";
import "../../App.css";
const Pagination = () => {
  const d = new Date()
let day = d.toLocaleString('en-us', {weekday: 'short'});
  const [date, setDate] = useState(d.getDate());
  const [cur, setCur] = useState(1);
  let pageData = [
    {id:d.getDate(),page:d.getDate(),day:d.toLocaleString('en-us', {weekday: 'short'})}
  ];
  
  for (let index = 0; index <=30; index++) {
    d.setDate(d.getDate()+1)
    console.log(d.getDate()) 
    console.log(d.toLocaleString('en-us', {weekday: 'short'}));
    pageData.push({id:d.getDate(),page:d.getDate(),day:d.toLocaleString('en-us', {weekday: 'short'})})
  }

  function handleNext(){
    if (date<23) {
      setDate(date + 1)
      d.setDate(d.getDate()+1)
    }
  }
  return (
    <div>
      <div
        class="border border-2 my-2 rounded shadow"
        style={{ height: "42px" }}
      >
        <nav aria-label="Page navigation example">
        <li
              id="li"
              className="d-flex justify-content-center align-items-center"
              style={{ width: "35px" }}
              onClick={() => document.getElementById('pageBox').scrollLeft -= 90}
            >
              <span
                aria-hidden="true"
                className="text-primary"
              >
                «
              </span>
            </li>
          <ul className="pagination" id="pageBox" style={{overflowX:"scroll"}}>
            {pageData.map((item) => {
              return (
                <li
                  id="li"
                  className="page-item d-flex flex-column justify-content-center align-items-center px-3 border border-1"
                  style={{ width: "90px" }}
                >
                  <small
                    className="fw-bold text-muted"
                    style={{ fontSize: "14" }}
                  >
                    {item.page}
                  </small>
                  <small
                    className="fw-bold text-muted"
                    style={{ fontSize: "10px" }}
                  >
                    {item.day}
                  </small>
                </li>
              );
            })}
          </ul>
          <li
              id="li"
              className="d-flex justify-content-center align-items-center"
              style={{ width: "35px" }}
              onClick={() => document.getElementById('pageBox').scrollLeft += 90}
            >
              <span
                aria-hidden="true"
                className="text-primary"
                onClick={handleNext}
              >
                »
              </span>
            </li>
        </nav>
      </div>
    </div>
  );
};

export default Pagination;
