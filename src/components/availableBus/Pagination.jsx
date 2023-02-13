import React from 'react'
import { useState } from 'react'
import "../../App.css"
const Pagination = () => {
  const[date,setDate] = useState(1)
  const [cur, setCur] = useState(1)
  const pageData = [
    {id:1,page:date+0,day:"Sun"},
    {id:2,page:date+1,day:"Mon"},
    {id:3,page:date+2,day:"Tue"},
    {id:4,page:date+3,day:"Wed"},
    {id:5,page:date+4,day:"Thu"},
    {id:6,page:date+5,day:"Fri"},
    {id:7,page:date+6,day:"Sat"},
    {id:8,page:date+7,day:"Sun"},
    {id:9,page:date+8,day:"Mon"},
  ]
  return (
    <div>
         <div
          class="border border-2 my-2 rounded shadow"
          style={{ height: "42px"}}
        >
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" aria-label="Previous">
                  <span aria-hidden="true">«</span>
                  <span className="sr-only">Previous</span>
                </a>
              </li>
              {
                pageData.map((item)=>{
                  return <li
                  id="li"
                  className="page-item d-flex flex-column justify-content-center align-items-center px-3"
                  style={{width:"90px" }}
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
                })
              }
              <li className="page-item">
                <a className="page-link" aria-label="Next">
                  <span aria-hidden="true">»</span>
                  <span className="sr-only">Next</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
    </div>
  )
}

export default Pagination