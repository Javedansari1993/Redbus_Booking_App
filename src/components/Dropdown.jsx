import React, { useState } from "react";

const Dropdown = () => {
  const cities = [
    { name: "Mumbai", value: "mumbai" },
    { name: "Delhi", value: "delhi" },
    { name: "Chennai", value: "Chennai" },
    { name: "Hedrabad", value: "hedrabad" },
    { name: "Kalcutta", value: "kalCutta" },
    { name: "Madrash", value: "madrash" },
  ];
  const [drop, setDrop] = useState(false);
  const [city, setCity] = useState("Mumbai");

  return (
    <div>
      <button
        className="fw-bold fs-6 rounded w-100 text-content-center my-3"
        onClick={() => setDrop(!drop)}
        style={{height:"60px"}}
      >
        {city}
      </button>
      {drop && (
        <div className="bg-success p-2 text-dark bg-opacity-10 p-1">
          <input
            className="w-100"
            type="search"
            placeholder="From"
            value={city.toUpperCase()}
            onChange={(e) => setCity(e.target.value)}
          />
          <select
            className="w-100 form-select"
            name="cars"
            id="cars"
            onChange={(e) => setCity(e.target.value, e.preventDefault())}
          >
            {cities
              .filter((val) => {
                if (city.name === "") {
                  return val;
                } else if (
                  val.name
                    .toLocaleLowerCase()
                    .includes(city.toLocaleLowerCase())
                ) {
                  return val;
                }
              })
              .map((val) => {
                return (
                  <option className="w-100" value={val.value}>
                    {val.name.toUpperCase()}
                  </option>
                );
              })}
          </select>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
