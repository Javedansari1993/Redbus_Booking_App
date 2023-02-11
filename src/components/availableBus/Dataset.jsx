const filterData =[
  {
    id: 1,
    name: "Department",
    selector: "single",
    name1: [
      { id: 1, value: "Morning Session", selected: false },
      { id: 2, value: "Afternoon Session", selected: false },
      { id: 3, value: "Evening Session", selected: false },
    ],
  },
  {
    id: 2,
    name: "Arrival",
    selector: "single",
    name1: [
      { id: 1, value: "Morning Session", selected: false },
      { id: 2, value: "Afternoon Session", selected: false },
      { id: 3, value: "Evening Session", selected: false },
    ],
  },
  {
    id: 3,
    name: "Pickup Pint",
    selector: "multiple",
    name1: [
      { id: 1, value: "Kalkata", selected: false },
      { id: 2, value: "Mumbai", selected: false },
      { id: 3, value: "Bangaluru", selected: false },
    ],
  },
  {
    id: 4,
    name: "Drop Pint",
    selector: "single",
    name1: [
      { id: 1, value: "Kalkata", selected: false },
      { id: 2, value: "Mumbai", selected: false },
      { id: 3, value: "Bangaluru", selected: false },
    ],
  },
  {
    id: 5,
    name: "Bus Rating",
    selector: "single",
    name1: [
      { id: 1, value: "4 star or more", selected: false },
      { id: 2, value: "3 star or more", selected: false },
      { id: 3, value: "0-2 star", selected: false },
    ],
  },
  {
    id: 6,
    name: "Bus Operator",
    selector: "multiple",
    name1: [
      { id: 1, value: "Zing bus", selected: false },
      { id: 2, value: "Intercity Smart", selected: false },
      { id: 3, value: "Safar Exp", selected: false },
    ],
  },
]

export default filterData;
