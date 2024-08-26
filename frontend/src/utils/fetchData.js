import axios from "axios";
const BASE_URL = "http://localhost:5161/api/";

export const fetchData = async (endpoint) => {
  try {
    const response = await axios.get(BASE_URL + endpoint);
    return response;
  } catch (error) {
    return error;
  }
};
