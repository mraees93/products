import React, { useEffect, useState } from "react";
import { fetchData } from "../utils/fetchData";

export const Products = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchData("products")
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
    <>
        <div className="flex flex-wrap justify-center">
          {data.map((p, idx) => {
            return (
                <div key={idx} className=" p-5">
                <img src={p.image} className=" w-48 h-48 object-cover rounded-[15px]" />
                </div>
            )
          })}
        </div>
    </>
  );
};
