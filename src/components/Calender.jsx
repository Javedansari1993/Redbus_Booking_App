import React, { useState } from "react";
import Calendar from "moedim";

const Calender = () => {
  const [drop, setDrop] = useState(false);
  const [value, setValue] = useState(new Date());
  return (
    <div className="my-1">
      <div
        class="d-flex flex-column my-1 p-1 bg-light my-2 border border-3 rounded"
        style={{ height: "80px" }}
        onClick={() => setDrop(!drop)}
      >
        <small class="text-muted">Travel Date</small>
        <div class="fw-bold fs-6">
          {value.toLocaleString("default", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </div>
      </div>
      {drop && (
        <div className="bg-light rounded">
          <Calendar
            className="w-100"
            value={value}
            onChange={(d) => setValue(d)}
          />
        </div>
      )}
    </div>
  );
};

export default Calender;
