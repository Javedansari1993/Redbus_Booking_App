import React from "react";

const Review = () => {
  return (
    <div class="card text-center p-4 my-4">
      <h5 class="card-heading">Thanks for your feedback</h5>

      <div class="ratings">
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
      </div>

      <div class="review">
        <h6>you can also write reviews</h6>
      </div>

      <button class="btn btn-success mb-2 review-button">Write a review</button>
    </div>
  );
};

export default Review;
