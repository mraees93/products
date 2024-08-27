const SET_PRODUCT_ID = "SET_PRODUCT_ID";
const GET_PRODUCTS = "GET_PRODUCTS";
const GET_PRODUCT_SALES = "GET_PRODUCT_SALES";

export function setProductID(idx) {
  return { type: SET_PRODUCT_ID, payload: idx };
}

export function getProducts(products) {
  return { type: GET_PRODUCTS, payload: products };
}

export function getProductSales(productSales) {
  return { type: GET_PRODUCT_SALES, payload: productSales };
}

const initialState = {
  productID: undefined,
  products: [],
  productSales: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...state, products: action.payload };

    case GET_PRODUCT_SALES:
      return { ...state, productSales: action.payload };

    case SET_PRODUCT_ID:
      return { ...state, productID: action.payload };

    default:
      return state;
  }
};

export default reducer;
