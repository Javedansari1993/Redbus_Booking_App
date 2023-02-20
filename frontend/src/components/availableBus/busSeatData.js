import seat from "../images/seat.png"

const busSeatData = [
    {
      id: 1,
      price: "seatInfo",
      prices: [
        { id: 1, value: "All", selected: false },
        { id: 2, value: "599", selected: false },
        { id: 3, value: "899", selected: false },
        { id: 4, value: "1199", selected: false },
        { id: 5, value: "1599", selected: false },
      ],
    },
    {
      id: 2,
      type: "seatInfo",
      seatInfo: [
        { id: 1, value: "Vacant Seats", selected: false },
        { id: 2, value: "Reserved Seats", selected: false },
        { id: 3, value: "Selexted Seats", selected: false },
      ],
    },
    {
      id: 3,
      type: "seatImg",
      seatImg: [
        { id: 1, value: seat, selected: false },
        { id: 2, value: seat, selected: false },
        { id: 3, value: seat, selected: false },
        { id: 4, value: seat, selected: false },
        { id: 5, value: seat, selected: false },
        { id: 6, value: seat, selected: false },
        { id: 7, value: seat, selected: false },
      ],
    },
  ];

  export default busSeatData;