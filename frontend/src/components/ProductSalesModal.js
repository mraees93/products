import React, { useEffect, useState } from "react";
import { fetchData } from "../utils/fetchData";

export const ProductSalesModal = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    //create function to get id of chosen image
    fetchData("product-sales")
      .then((response) => setData(response.data))
      .catch((err) => console.log("this is", err))
      .finally(() => setIsLoading(false));
    setIsLoading(true);
    if (data) {
      setIsLoading(false);
    } else {
      setIsLoading(false);
      setData("Couldnt retrieve products");
    }
  }, [data]);

  return (
    <div>hello</div>
  );
};
