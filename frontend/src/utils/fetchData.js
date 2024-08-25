import axios from 'axios'
const BASE_URL = "http://localhost:5161/api/"
// const PRODUCTS_URL = 
// const PRODUCT_SALES_URL = 

export const fetchData = async (endpoint) => {
    try {
        const response = await axios.get(BASE_URL + endpoint);
        return response;
      } catch (error) {
        console.error(error);
      }
}