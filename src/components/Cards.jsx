import React from 'react'
import Card from './Card'

export const Cards = () => {
  return (
    <div className="container-fluid ">
        <div class="d-flex justify-content-center align-items-center gap-2" style={{height:"390px"}}>
          <div class=""><Card/></div>
          <div class=""><Card/></div>
          <div class=""><Card/></div>
        </div>
      </div>
  )
}
