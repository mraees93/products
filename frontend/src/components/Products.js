import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { fetchData } from "../utils/fetchData";
import { setProductID } from "../redux/reducer";
import { LoadingSpinner } from "./LoadingSpinner";

export const Products = () => {
  const [dataIsLoading, setDataIsLoading] = useState(true);
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData("products");
  }, []);

  useEffect(() => {
    if (products.length > 0) setDataIsLoading(false);
  });

  return (
    <>
      {dataIsLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="flex flex-wrap justify-center">
          {products
            ? products.map((product, idx) => {
                return (
                  <div key={idx} className="p-5">
                    <Link to={`/ProductSalesTable/${idx + 1}`}>
                      <img
                        onClick={() => dispatch(setProductID(idx + 1))}
                        src={product.image}
                        className=" w-48 h-48 object-cover rounded-[15px]"
                        alt={product.description}
                        data-testid="productID"
                      />
                    </Link>
                  </div>
                );
              })
            : null}
        </div>
      )}
    </>
  );
};
