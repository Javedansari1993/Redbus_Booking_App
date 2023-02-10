import React from 'react'
import Card from './Card'

 const Cards = () => {
  return (
    <div className="container-fluid ">
        <div class="d-flex justify-content-center align-items-center gap-2" style={{height:"390px"}}>
          <Card/>
          <Card/>
          <Card/>
        </div>
      </div>
  )
}

export default Cards;
