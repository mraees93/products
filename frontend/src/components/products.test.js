import { Products } from "./Products";
import { render, screen, waitFor } from "@testing-library/react";
import { act } from "react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { getProducts } from "../redux/reducer";
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
  test("should not display the apples image in the UI, products store propery should be empty if the products haven't been fetched yet", () => {
    render(productsComponent);
    expect(screen.queryAllByAltText("Apples").length).toBe(0);
    expect(store.getState().products.length).toBe(0);
  });

  test("should update the store and browser with recipes", async () => {
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

    expect(store.getState().products[0]).toEqual(mockResponse[0]);
  });

  test("should display an empty string if there are no recipes", () => {
    render(productsComponent);
    expect(screen.queryAllByAltText("Apples").length).toBe(1);
    expect(store.getState().products.length).toBe(0);
  });
});
