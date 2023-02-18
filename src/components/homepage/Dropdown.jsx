import React, { useState } from "react";

const Dropdown2 = ({item}) => {
  const cities = [
    { name: "Mumbai", value: "Mumbai" },
    { name: "Delhi", value: "Delhi" },
    { name: "Chennai", value: "Chennai" },
    { name: "Hedrabad", value: "Hedrabad" },
    { name: "Kalcutta", value: "KalCutta" },
  ];
  const [drop, setDrop] = useState(false);
  const [city, setCity] = useState("");

  return (
    <div className="col col-md-3 col-sm-6">
      <div className="my-1">
        <div
          class="d-flex flex-column my-1 p-2 bg-light my-2 border border-3 rounded"
          style={{ height: "80px" }}
          onClick={() => setDrop(!drop)}
        >
          <div className="d-flex">
            <small class="text-muted flex-grow-1">{item.value}</small>
            <div>
              <i class="fa-solid fa-caret-down"></i>
            </div>
          </div>
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
                placeholder="city..."
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <ul
              className="list-unstyled mb-0 overflow-auto rounded"
              style={{ maxHeight: "165px" }}
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
    </div>
  );
};

export default Dropdown2;
