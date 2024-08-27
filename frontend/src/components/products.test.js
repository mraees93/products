import { Products } from "./Products";
import { ProductSalesTable } from "./ProductSalesTable";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { getProducts, getProductSales } from "../redux/reducer";

let productsComponent;
beforeEach(() => {
  productsComponent = (
    <Provider store={store}>
      <MemoryRouter>
        <Products />
      </MemoryRouter>
    </Provider>
  );
});

describe("Products component", () => {
  test("should not display the apples image in the UI and the products store property should be empty if the products haven't been fetched yet", () => {
    render(productsComponent);
    expect(screen.queryAllByAltText("Apples").length).toBe(0);
    expect(store.getState().products.length).toBe(0);
  });

  test("should fetch the data from the API, update the products store property and UI with the Apples product", async () => {
    const mockResponse = [
      {
        productId: 0,
        description: "Apples",
        salePrice: 15.33,
        category: "Fruit",
        image:
          "https://images.pexels.com/photos/10256309/pexels-photo-10256309.jpeg?auto=compress&cs=tinysrgb&h=350",
      },
    ];

    jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockResponse),
      })
    );

    await waitFor(async () => {
      render(productsComponent);
      store.dispatch(getProducts(mockResponse));
    });

    expect(store.getState().products[0]).toBe(mockResponse[0]);
    expect(screen.queryAllByAltText("Apples").length).toBe(1);
  });
});

let productSalesTableComponent;
beforeEach(() => {
  productSalesTableComponent = (
    <Provider store={store}>
      <MemoryRouter>
        <ProductSalesTable />
      </MemoryRouter>
    </Provider>
  );
});

describe("ProductSalesTable component", () => {
  test("should fetch the apple product details when the apples image is clicked", async () => {
    render(productsComponent);

    const appleImage = screen.getByTestId("productID");
    fireEvent.click(appleImage);
    expect(store.getState().productID).toBe(1);

    const mockResponse = [
      {
        saleId: 110,
        productId: 1,
        salePrice: 16.24,
        saleQty: 207,
        saleDate: "2024-08-05",
      },
    ];

    jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockResponse),
      })
    );

    await waitFor(async () => {
      render(productSalesTableComponent);
      store.dispatch(getProductSales(mockResponse));
    });

    expect(store.getState().productSales[0]).toBe(mockResponse[0]);
  });

  test("should render the table in the UI", () => {
    render(productSalesTableComponent);
    expect(screen.getByTestId("productSalesTableID")).toBeInTheDocument();
  });

  test("should render the products list and productID store property should update to undefined when the back button is clicked", () => {
    render(productSalesTableComponent);

    expect(store.getState().productID).toBe(1);
    const backButton = screen.getByTestId("backButtonID");
    fireEvent.click(backButton);

    render(productsComponent);

    expect(screen.getByTestId("productID")).toBeInTheDocument();
    expect(store.getState().productID).toBe(undefined);
  });
});
