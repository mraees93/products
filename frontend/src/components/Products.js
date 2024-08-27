import React, { useEffect } from "react";
import { fetchData } from "../utils/fetchData";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setProductID } from "../redux/reducer";

export const Products = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData("products");
  }, []);

  return (
    <>
      <div className="flex flex-wrap justify-center">
        {products
          ? products.map((product, idx) => {
              return (
                <div key={idx} className="p-5" data-testid="productID">
                  <Link to={`/ProductSalesTable/${idx + 1}`}>
                    <img
                      onClick={() => dispatch(setProductID(idx + 1))}
                      src={product.image}
                      className=" w-48 h-48 object-cover rounded-[15px]"
                      alt={product.description}
                    />
                  </Link>
                </div>
              );
            })
          : null}
      </div>
    </>
  );
};
