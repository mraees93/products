import React, { useEffect, useState } from "react";
import { fetchData } from "../utils/fetchData";
import { Link, useNavigate  } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { setImageIndex } from "../redux/reducer";

export const ProductSalesModal = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const imageIndex = useSelector((state) => state.imageIndex);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(()=>{
    if(imageIndex !== undefined) console.log(imageIndex);
    
  }, [imageIndex])
  // useEffect(() => {
  //   //create function to get id of chosen image
  //   fetchData("product-sales")
  //     .then((response) => setData(response.data))
  //     .catch((err) => console.log("this is", err))
  //     .finally(() => setIsLoading(false));
  //   setIsLoading(true);
  //   if (data) {
  //     setIsLoading(false);
  //   } else {
  //     setIsLoading(false);
  //     setData("Couldnt retrieve products");
  //   }
  // }, [data]);

  return (<div>
    <button onClick={() => {
      navigate('/');
      dispatch(setImageIndex(undefined));
      }}> Back
    </button>
  </div>
  )
};
