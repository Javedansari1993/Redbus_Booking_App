// import axios from "axios";
import actionTypes from "../actionType/actionType";

// export const fetchBusDetail = () => {
//   return (dispatch) => {
//     axios
//       .get(`http://localhost:8080/busdetail`)
//       .then((response) => {
//         const data = response.data;
//         console.log("data", data);
//         dispatch({
//           type: actionTypes.BUSDETAIL_API_SUCCESS,
//           payload: data,
//         });
//       })
//       .catch((error) => {
//         const errorMsg = error.message;
//         dispatch({
//           type: actionTypes.BUSDETAIL_API_ERROR,
//           payload: errorMsg,
//         });
//       });
//   };
// };

export const fetchBusDetail = (dispatch,busdetail) => {
  return dispatch({
      type: actionTypes.BUSDETAIL_API_SUCCESS,
      payload: busdetail,
    });
  };

export const setBusLocation = (dispatch, location) => {
  // console.log(location);
  return dispatch({
    type: actionTypes.LOCTION_SUCCESS,
    payload: location,
  });
};
