import React from "react";

const Checkbox = ({dept}) => {
  return (
    <div class="p-2 px-3">
      <small className="fw-bold">{dept.name}</small>
      <form className="my-3" action="/action_page.php" method="get">
        <input type="checkbox" name={dept.value1} value={dept.value1} />
        <label className="px-2" htmlFor="vehicle1">
          <small className="">{dept.name1}</small>
        </label>
        <br />
        <input type="checkbox" name={dept.value2} value={dept.value2} />
        <label className="px-2" htmlFor="vehicle2">
          <small className="">{dept.name2}</small>
        </label>
        <br />
        <input
          type="checkbox"
          name={dept.value3}
          value={dept.value3}
          defaultChecked=""
          checked
        />
        <label className="px-2" htmlFor="vehicle3">
          <small className="">{dept.name3}</small>
        </label>
        <input className="d-none" type="submit" defaultValue="Submit" />
      </form>
      <hr className="border border-primary border-1 m-0 p-0" />
    </div>
  );
};

export default Checkbox;
