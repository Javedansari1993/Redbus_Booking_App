import React from "react";
import { useSelector } from "react-redux";

const Checkbox = ({ dept }) => {
  const busdetails = useSelector((state) => state.busDetail.BusDetail);
  console.log(busdetails)
  function handleChange(e){
    console.log(e.target.value)
  }
  return (
    <div class="p-2 px-3">
      <small className="fw-bold">{dept.name}</small>
      <form className="my-3" action="/action_page.php" method="get">
        {dept.name1.map((item) => {
          return (
            <div>
              <input type="radio" name="some name" value={item.value} onChange={handleChange}/>
              <label className="px-2" htmlFor="vehicle1">
                <small className="">{item.value}</small>
              </label>
              <br />
              <input className="d-none" type="submit" defaultValue="Submit" />
            </div>
          );
        })}
      </form>
      <hr className="border border-primary border-1 m-0 p-0" />
    </div>
  );
};

export default Checkbox;
