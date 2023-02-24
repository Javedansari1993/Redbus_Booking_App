import actionTypes from "../actionType/actionType";

const busSeatNumber = {};

const busSeatNumberReducer = (state = busSeatNumber, action) => {
  switch (action.type) {
    case actionTypes.SEATNUMBER_SUCCESS:
      return {
        ...state,
        busSeatNumber: action.payload,
      };

    case actionTypes.SEATNUMBER_ERROR:
      return state;

    default:
      return state;
  }
};

export default busSeatNumberReducer;