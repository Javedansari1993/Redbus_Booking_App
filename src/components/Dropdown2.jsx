import React, { useState } from "react";

const Dropdown2 = () => {
  const cities = [
    { name: "Mumbai", value: "Mumbai" },
    { name: "Delhi", value: "Delhi" },
    { name: "Chennai", value: "Chennai" },
    { name: "Hedrabad", value: "Hedrabad" },
    { name: "Kalcutta", value: "KalCutta" },
    { name: "Madrash", value: "Madrash" },
  ];
  const [drop, setDrop] = useState(false);
  const [city, setCity] = useState("Mumbai");

  return (
    <div>
      <div>
        <div onClick={() => setDrop(!drop)}>

        </div>
      </div>
      {drop && (
        <div>
          <div className="border border-primary">
            <div>
                <form class="p-2 mb-2 bg-light border-bottom">
                <input className="text-center w-100" type="search" value={city} onChange={(e) => setCity(e.target.value)} />
                </form>
            </div>
            <ul className="list-unstyled mb-0">
              {
              cities
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
              }).map((val) => {
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
        </div>
      )}
    </div>
  );
};

export default Dropdown2;
