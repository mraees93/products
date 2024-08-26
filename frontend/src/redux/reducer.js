const SET_PRODUCT_ID = "SET_PRODUCT_ID";

export function setProductID(idx) {
  return { type: SET_PRODUCT_ID, payload: idx };
}

const initialState = {
  productID: undefined,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCT_ID:
      return { ...state, productID: action.payload };
    default:
      return state;
  }
};

export default reducer;
