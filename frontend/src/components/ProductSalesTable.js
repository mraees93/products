import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { fetchData } from "../utils/fetchData";
import { setProductID } from "../redux/reducer";
import { LoadingSpinner } from "./LoadingSpinner";

export const ProductSalesTable = () => {
  const [dataIsLoading, setDataIsLoading] = useState(true);
  const productID = useSelector((state) => state.productID);
  const productSales = useSelector((state) => state.productSales);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (productID !== undefined) {
      fetchData(`product-sales/${productID}`);
    }
  }, [productID]);

  useEffect(() => {
    if (productSales.length > 0) setDataIsLoading(false);
  });

  return (
    <>
      {dataIsLoading ? (
        <LoadingSpinner />
      ) : (
        <div>
          <table data-testid="productSalesTableID">
            <thead>
              <tr>
                <th>Sale ID</th>
                <th>Sale price</th>
                <th>Sale quantity</th>
                <th>Sale date</th>
              </tr>
            </thead>
            <tbody>
              {productSales
                ? productSales.map((product) => (
                    <tr key={product.saleId}>
                      <td>{product.saleId}</td>
                      <td>{product.salePrice}</td>
                      <td>{product.saleQty}</td>
                      <td>{product.saleDate}</td>
                    </tr>
                  ))
                : null}
            </tbody>
          </table>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded"
            onClick={() => {
              navigate("/");
              dispatch(setProductID(undefined));
            }}
            data-testid="backButtonID"
          >
            Back
          </button>
        </div>
      )}
    </>
  );
};
