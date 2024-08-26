import React, { useEffect, useState } from "react";
import { fetchData } from "../utils/fetchData";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setProductID } from "../redux/reducer";

export const ProductSalesTable = () => {
  const [productSales, setProductSales] = useState([]);
  const productID = useSelector((state) => state.productID);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (productID !== undefined) {
      fetchData(`product-sales/${productID}`)
        .then((response) => setProductSales(response.data))
        .catch((error) => error);
    }
  }, [productID]);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Sale ID</th>
            <th>Sale price</th>
            <th>Sale quantity</th>
            <th>Sale date</th>
          </tr>
        </thead>
        <tbody>
          {productSales.map((product) => (
            <tr key={product.saleId}>
              <td>{product.saleId}</td>
              <td>{product.salePrice}</td>
              <td>{product.saleQty}</td>
              <td>{product.saleDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        onClick={() => {
          navigate("/");
          dispatch(setProductID(undefined));
        }}
      >
        Back to images
      </button>
    </div>
  );
};
