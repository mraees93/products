import React, { useEffect, useState } from "react";
import { fetchData } from "../utils/fetchData";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setProductID } from "../redux/reducer";

export const Products = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData("products")
      .then((response) => setProducts(response.data))
      .catch((error) => error);
  }, []);

  return (
    <>
      <div className="flex flex-wrap justify-center">
        {products.map((product, idx) => {
          return (
            <div key={idx} className="p-5"> 
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
        })}
      </div>
    </>
  );
};
