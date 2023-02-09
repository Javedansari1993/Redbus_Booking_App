import React, { useState } from "react";

const Dropdown2 = () => {
  const cities = [
    { name: "Mumbai", value: "Mumbai" },
    { name: "Delhi", value: "Delhi" },
    { name: "Chennai", value: "Chennai" },
    { name: "Hedrabad", value: "Hedrabad" },
    { name: "Kalcutta", value: "KalCutta" }
  ];
  const [drop, setDrop] = useState(false);
  const [city, setCity] = useState("Mumbai");

  return (
    <div className="my-1">
      <div class="d-flex flex-column my-1 p-1 bg-light my-2 border border-3" style={{height:"80px"}} onClick={() => setDrop(!drop)}>
        <small class="text-muted">From</small>
        <div class="fw-bold fs-6">{city}</div>
        <small className="fw-bold">india</small>
      </div>
      {drop && (
          <div className="bg-light border border-3 p-2">
            <div>
                <input
                  className="w-100"
                  type="search"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
            </div>
            <ul className="list-unstyled mb-0 overflow-auto" style={{height:"165px"}}>
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
                    <li
                      className="dropdown-item d-flex align-items-center gap-2 py-2 px-2"
                      onClick={() => {
                        setCity(val.value);
                      }}
                    >
                      {val.name}
                    </li>
                  );
                })}
            </ul>
          </div>

      )}
    </div>
  );
};

export default Dropdown2;
