import React, { useEffect, useState} from "react";
import { fetchData } from "../utils/fetchData";
import { Link } from "react-router-dom";
import {ProductSalesModal} from './ProductSalesModal'
import { useDispatch , useSelector} from "react-redux"
import { setImageIndex } from "../redux/reducer";

export const Products = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const imageIndex = useSelector((state) => state.imageIndex);
  const dispatch = useDispatch();

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

//   const handleProductID = (idx) => setProductID(idx + 1)

//   const resetProductID = () => setProductID(undefined)

  return (
    <>
      <div className="flex flex-wrap justify-center">
        {data.map((p, idx) => {
          return (
            
              <div className=" p-5">
              <Link to={`/productSalesModal/${idx+1}`}>
                <img
                  key={idx}
                  onClick={()=>dispatch(setImageIndex(idx + 1))}
                  src={p.image}
                  className=" w-48 h-48 object-cover rounded-[15px]"
                  alt={p.description}
                />
                </Link>
              </div>
          );
        })}
      </div>
    </>
  );
};
