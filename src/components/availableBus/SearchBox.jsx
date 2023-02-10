import React from "react";

const SearchBox = ({ dept }) => {
  return (
    <div class="p-2 px-3">
      <div className="d-flex">
        <small className="fw-bold flex-grow-1">{dept.name}</small>
        <div>
          <i class="fa-solid fa-caret-down"></i>
        </div>
      </div>
      <form className="my-3" action="/action_page.php" method="get">
        <input
          className="d-block h-25 mb-1"
          type="search"
          name={dept.value1}
          value=""
          placeholder="search"
        />
        <input type="checkbox" name={dept.value1} value={dept.value1} checked/>
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
          defaultChecked="checked"
        />
        <label className="px-2" htmlFor="vehicle3">
          <small className="">{dept.name3}</small>
        </label>
        <input className="d-none" type="submit" value="Submit" />
      </form>
      <hr className="border border-primary border-1 m-0 p-0" />
    </div>
  );
};

export default SearchBox;
