import actionTypes from "../actionType/actionType";
import seat from "../../components/images/seat.png";

const initialState = {
  seat : {
    seatPrices: ["All", "599", "699", "899", "1199"],
    seatInfo: [
      { id: 1, value: "Vacant Seats", selected: false },
      { id: 2, value: "Reserved Seats", selected: false },
      { id: 3, value: "Selexted Seats", selected: false },
    ],
  },
  BusDetail: [
    {
      id: 1,
      name: "Intercity Smart Bus",
      seatType: ["A/C Sleeper(2+1)", "|", "Left Seat", "|", "Window Seat"],
      seatInfo: ["Live Tracking", "Policies", "Photos", "Amenities", "Review"],
      rating: "4.5",
      price: "$899",
      depTime: "22:45,16NOV",
      arrTime: "06:20,17NOV",
      timeduration: "07hrs59min",
      pickPoint: "Delhi",
      dropPoint: "Mumbai",
      depPoint: "Delhi Road",
      arrPoint: "Mumbai Road",

      busSeatData: [
        {
          id: 1,
          seatLeft: [
            { id: 1, price: "899", value: seat, selected: false },
            { id: 2, price: "899", value: seat, selected: false },
            { id: 3, price: "899", value: seat, selected: false },
            { id: 4, price: "899", value: seat, selected: false },
            { id: 5, price: "899", value: seat, selected: false },
            { id: 6, price: "899", value: seat, selected: false },
            { id: 7, price: "899", value: seat, selected: false },
          ],
          seatMid: [
            { id: 8, price: "699", value: seat, selected: false },
            { id: 9, price: "699", value: seat, selected: false },
            { id: 10, price: "699", value: seat, selected: false },
            { id: 11, price: "699", value: seat, selected: false },
            { id: 12, price: "699", value: seat, selected: false },
            { id: 13, price: "699", value: seat, selected: false },
            { id: 14, price: "699", value: seat, selected: false },
          ],
          seatRight: [
            { id: 15, price: "599", value: seat, selected: false },
            { id: 16, price: "599", value: seat, selected: false },
            { id: 17, price: "599", value: seat, selected: false },
            { id: 18, price: "599", value: seat, selected: false },
            { id: 19, price: "599", value: seat, selected: false },
          ],
        },
      ],
    },
    {
      id: 2,
      name: "Zing Smart Bus",
      seatType: ["A/C Sleeper(2+1)", "|", "Left Seat", "|", "Window Seat"],
      seatInfo: ["Live Tracking", "Policies", "Photos", "Amenities", "Review"],
      rating: "4.5",
      price: "$899",
      depTime: "22:45,16NOV",
      arrTime: "06:20,17NOV",
      timeduration: "07hrs59min",
      pickPoint: "Mumbai",
      dropPoint: "Delhi",
      depPoint: "Mumbai Road",
      arrPoint: "Delhi Road",

      busSeatData: [
        {
          id: 1,
          seatLeft: [
            { id: 1, price: "899", value: seat, selected: false },
            { id: 2, price: "899", value: seat, selected: false },
            { id: 3, price: "899", value: seat, selected: false },
            { id: 4, price: "899", value: seat, selected: false },
            { id: 5, price: "899", value: seat, selected: false },
            { id: 6, price: "899", value: seat, selected: false },
            { id: 7, price: "899", value: seat, selected: false },
          ],
          seatMid: [
            { id: 8, price: "699", value: seat, selected: false },
            { id: 9, price: "699", value: seat, selected: false },
            { id: 10, price: "699", value: seat, selected: false },
            { id: 11, price: "699", value: seat, selected: false },
            { id: 12, price: "699", value: seat, selected: false },
            { id: 13, price: "699", value: seat, selected: false },
            { id: 14, price: "699", value: seat, selected: false },
          ],
          seatRight: [
            { id: 15, price: "599", value: seat, selected: false },
            { id: 16, price: "599", value: seat, selected: false },
            { id: 17, price: "599", value: seat, selected: false },
            { id: 18, price: "599", value: seat, selected: false },
            { id: 19, price: "599", value: seat, selected: false },
          ],
        },
      ],
    },
    {
      id: 3,
      name: "Safar Exppress Bus",
      seatType: ["A/C Sleeper(2+1)", "|", "Left Seat", "|", "Window Seat"],
      seatInfo: ["Live Tracking", "Policies", "Photos", "Amenities", "Review"],
      rating: "4",
      price: "$899",
      depTime: "22:45,16NOV",
      arrTime: "06:20,17NOV",
      timeduration: "07hrs59min",
      pickPoint: "Mumbai",
      dropPoint: "Hedrabad",
      depPoint: "Mumbai Road",
      arrPoint: "Hedrabad Road",

      busSeatData: [
        {
          id: 1,
          seatLeft: [
            { id: 1, price: "899", value: seat, selected: false },
            { id: 2, price: "899", value: seat, selected: false },
            { id: 3, price: "899", value: seat, selected: false },
            { id: 4, price: "899", value: seat, selected: false },
            { id: 5, price: "899", value: seat, selected: false },
            { id: 6, price: "899", value: seat, selected: false },
            { id: 7, price: "899", value: seat, selected: false },
          ],
          seatMid: [
            { id: 8, price: "699", value: seat, selected: false },
            { id: 9, price: "699", value: seat, selected: false },
            { id: 10, price: "699", value: seat, selected: false },
            { id: 11, price: "699", value: seat, selected: false },
            { id: 12, price: "699", value: seat, selected: false },
            { id: 13, price: "699", value: seat, selected: false },
            { id: 14, price: "699", value: seat, selected: false },
          ],
          seatRight: [
            { id: 15, price: "599", value: seat, selected: false },
            { id: 16, price: "599", value: seat, selected: false },
            { id: 17, price: "599", value: seat, selected: false },
            { id: 18, price: "599", value: seat, selected: false },
            { id: 19, price: "599", value: seat, selected: false },
          ],
        },
      ],
    },
    {
      id: 4,
      name: "Intercity Smart Bus",
      seatType: ["A/C Sleeper(2+1)", "|", "Left Seat", "|", "Window Seat"],
      seatInfo: ["Live Tracking", "Policies", "Photos", "Amenities", "Review"],
      rating: "4.5",
      price: "$899",
      depTime: "22:45,16NOV",
      arrTime: "06:20,17NOV",
      timeduration: "07hrs59min",
      pickPoint: "Hedrabad",
      dropPoint: "Mumbai",
      depPoint: "Hedrabad Road",
      arrPoint: "Mumbai Road",

      busSeatData: [
        {
          id: 1,
          seatLeft: [
            { id: 1, price: "899", value: seat, selected: false },
            { id: 2, price: "899", value: seat, selected: false },
            { id: 3, price: "899", value: seat, selected: false },
            { id: 4, price: "899", value: seat, selected: false },
            { id: 5, price: "899", value: seat, selected: false },
            { id: 6, price: "899", value: seat, selected: false },
            { id: 7, price: "899", value: seat, selected: false },
          ],
          seatMid: [
            { id: 8, price: "699", value: seat, selected: false },
            { id: 9, price: "699", value: seat, selected: false },
            { id: 10, price: "699", value: seat, selected: false },
            { id: 11, price: "699", value: seat, selected: false },
            { id: 12, price: "699", value: seat, selected: false },
            { id: 13, price: "699", value: seat, selected: false },
            { id: 14, price: "699", value: seat, selected: false },
          ],
          seatRight: [
            { id: 15, price: "599", value: seat, selected: false },
            { id: 16, price: "599", value: seat, selected: false },
            { id: 17, price: "599", value: seat, selected: false },
            { id: 18, price: "599", value: seat, selected: false },
            { id: 19, price: "599", value: seat, selected: false },
          ],
        },
      ],
    },
    {
      id: 5,
      name: "Zing Smart Bus",
      seatType: ["A/C Sleeper(2+1)", "|", "Left Seat", "|", "Window Seat"],
      seatInfo: ["Live Tracking", "Policies", "Photos", "Amenities", "Review"],
      rating: "3.5",
      price: "$899",
      depTime: "22:45,16NOV",
      arrTime: "06:20,17NOV",
      timeduration: "07hrs59min",
      pickPoint: "Delhi",
      dropPoint: "Hedrabad",
      depPoint: "Delhi Road",
      arrPoint: "Hedrabad Road",

      busSeatData: [
        {
          id: 1,
          seatLeft: [
            { id: 1, price: "899", value: seat, selected: false },
            { id: 2, price: "899", value: seat, selected: false },
            { id: 3, price: "899", value: seat, selected: false },
            { id: 4, price: "899", value: seat, selected: false },
            { id: 5, price: "899", value: seat, selected: false },
            { id: 6, price: "899", value: seat, selected: false },
            { id: 7, price: "899", value: seat, selected: false },
          ],
          seatMid: [
            { id: 8, price: "699", value: seat, selected: false },
            { id: 9, price: "699", value: seat, selected: false },
            { id: 10, price: "699", value: seat, selected: false },
            { id: 11, price: "699", value: seat, selected: false },
            { id: 12, price: "699", value: seat, selected: false },
            { id: 13, price: "699", value: seat, selected: false },
            { id: 14, price: "699", value: seat, selected: false },
          ],
          seatRight: [
            { id: 15, price: "599", value: seat, selected: false },
            { id: 16, price: "599", value: seat, selected: false },
            { id: 17, price: "599", value: seat, selected: false },
            { id: 18, price: "599", value: seat, selected: false },
            { id: 19, price: "599", value: seat, selected: false },
          ],
        },
      ],
    },
    {
      id: 6,
      name: "Safar Exppress Bus",
      seatType: ["A/C Sleeper(2+1)", "|", "Left Seat", "|", "Window Seat"],
      seatInfo: ["Live Tracking", "Policies", "Photos", "Amenities", "Review"],
      rating: "3",
      price: "$899",
      depTime: "22:45,16NOV",
      arrTime: "06:20,17NOV",
      timeduration: "07hrs59min",
      pickPoint: "Hedrabad",
      dropPoint: "Delhi",
      depPoint: "Hedrabad Road",
      arrPoint: "Delhi Road",

      busSeatData: [
        {
          id: 1,
          seatLeft: [
            { id: 1, price: "899", value: seat, selected: false },
            { id: 2, price: "899", value: seat, selected: false },
            { id: 3, price: "899", value: seat, selected: false },
            { id: 4, price: "899", value: seat, selected: false },
            { id: 5, price: "899", value: seat, selected: false },
            { id: 6, price: "899", value: seat, selected: false },
            { id: 7, price: "899", value: seat, selected: false },
          ],
          seatMid: [
            { id: 8, price: "699", value: seat, selected: false },
            { id: 9, price: "699", value: seat, selected: false },
            { id: 10, price: "699", value: seat, selected: false },
            { id: 11, price: "699", value: seat, selected: false },
            { id: 12, price: "699", value: seat, selected: false },
            { id: 13, price: "699", value: seat, selected: false },
            { id: 14, price: "699", value: seat, selected: false },
          ],
          seatRight: [
            { id: 15, price: "599", value: seat, selected: false },
            { id: 16, price: "599", value: seat, selected: false },
            { id: 17, price: "599", value: seat, selected: false },
            { id: 18, price: "599", value: seat, selected: false },
            { id: 19, price: "599", value: seat, selected: false },
          ],
        },
      ],
    },
  ],
};
const busDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.BUSDETAIL_API_SUCCESS:
      return {
        ...state,
        BusDetail: action.payload,
      };

    case actionTypes.BUSDETAIL_API_ERROR:
      return state;

    default:
      return state;
  }
};

export default busDetailReducer;
