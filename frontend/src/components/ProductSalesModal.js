import React, { useEffect, useState } from "react";
import { fetchData } from "../utils/fetchData";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setImageIndex } from "../redux/reducer";

export const ProductSalesModal = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const imageIndex = useSelector((state) => state.imageIndex);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // useEffect(()=>{
  //   if(imageIndex !== undefined) console.log(imageIndex);

  // }, [imageIndex])
  useEffect(() => {
    //create function to get id of chosen image
    if (imageIndex !== undefined) {
      fetchData(`product-sales/${imageIndex}`)
        .then((response) => setData(response.data))
        .catch((err) => console.log("this is", err))
        .finally(() => setIsLoading(false));
      setIsLoading(true);
      // if (data) {
      //   setIsLoading(false);
      // } else {
      //   setIsLoading(false);
      //   setData("Couldnt retrieve products");
      // }
    }
  }, []);

  return (
    <div>
      <table>
        <tr>
          <th>Sale ID</th>
          <th>Sale price</th>
          <th>Sale quantity</th>
          <th>Sale date</th>
        </tr>
        {data
          .map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.saleId}</td>
                <td>{val.salePrice}</td>
                <td>{val.saleQty}</td>
                <td>{val.saleDate}</td>
              </tr>
            );
          })}
      </table>
      <button
        onClick={() => {
          navigate("/");
          dispatch(setImageIndex(undefined));
        }}
      >
        {" "}
        Back
      </button>
    </div>
  );
};
