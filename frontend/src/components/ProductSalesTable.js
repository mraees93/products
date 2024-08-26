import React, { useEffect } from "react";
import { fetchData } from "../utils/fetchData";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setProductID, getProductSales } from "../redux/reducer";

export const ProductSalesTable = () => {
  const productID = useSelector((state) => state.productID);
  const productSales = useSelector((state) => state.productSales);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (productID !== undefined) {
      fetchData(`product-sales/${productID}`)
        .then((response) => dispatch(getProductSales(response.data)))
        .catch((error) => error);
    }
  }, [productID, dispatch]);

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
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded"
        onClick={() => {
          navigate("/");
          dispatch(setProductID(undefined));
        }}
      >
        Back
      </button>
    </div>
  );
};
