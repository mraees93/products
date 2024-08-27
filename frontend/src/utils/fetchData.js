import { store } from "../redux/store";
import { getProducts, getProductSales } from "../redux/reducer";
const BASE_URL = "http://localhost:5161/api/";

export const fetchData = async (endpoint) => {
  try {
    const response = await fetch(BASE_URL + endpoint);

    if (response.ok) {
      const data = await response.json();
        
      if (endpoint === "products") {
        store.dispatch(getProducts(data));
      } else {
        store.dispatch(getProductSales(data));
      }
    } else {
      return `${endpoint} not found`;
    }
  } catch (error) {
    return error;
  }
};
