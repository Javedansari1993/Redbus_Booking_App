import React from 'react'
import Review from './Review'

const Reviews = () => {
  return (
    <div className="container-fluid my-5 ">
        <div class="d-flex justify-content-center align-items-center gap-2" style={{height:"",backgroundColor:"#EBEDEF",padding:"15px"}}>
          <div class=""><Review/></div>
          <div class=""><Review/></div>
          <div class=""><Review/></div>
        </div>
      </div>
  )
}

export default Reviews