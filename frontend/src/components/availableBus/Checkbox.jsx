import React from "react";

const Checkbox = ({ dept }) => {
  return (
    <div class="p-2 px-3">
      <small className="fw-bold">{dept.name}</small>
      <form className="my-3" action="/action_page.php" method="get">
        {dept.name1.map((item) => {
          return (
            <div>
              <input type="radio" name="some name" value={item.value}/>
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
