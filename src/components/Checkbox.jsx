import React from "react";

const Checkbox = () => {
  return (
    <div>
      <>
        <small>The input checked attribute</small>
        <form action="/action_page.php" method="get">
          <input type="checkbox" name="vehicle1" defaultValue="Bike" />
          <label htmlFor="vehicle1"> I have a bike</label>
          <br />
          <input type="checkbox" name="vehicle2" defaultValue="Car" />
          <label htmlFor="vehicle2"> I have a car</label>
          <br />
          <input
            type="checkbox"
            name="vehicle3"
            defaultValue="Boat"
            defaultChecked=""
          />
          <label htmlFor="vehicle3"> I have a boat</label>
          <input className="d-none" type="submit" defaultValue="Submit" />
        </form>
      </>
    </div>
  );
};

export default Checkbox;
