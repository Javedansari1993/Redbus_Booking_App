export const selectCurrency = (dispatch, currency="usd")=>{
    return dispatch({
      type:actionTypes.SELECT_CURRENCY_SUCCESS,
      payload:currency
    })
  }
  
  export const searchCurrency = (dispatch, search)=>{
    return dispatch({
      type:actionTypes.SEARCH_COIN_SUCCESS,
      payload:search
    })
  }