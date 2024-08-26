import {Products} from "./Products";
import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import {store} from "../redux/store";
import { setProductID, getProducts, getProductSales } from "../redux/reducer";
let productsComponent;

beforeEach(() => {
  productsComponent = (
    <Provider store={store}>
      <Products />
    </Provider>
  );
});

describe("App component", () => {
  // test("should display an empty string if there are no recipes", () => {
  //   render(recipesLayoutComponent);
  //   expect(screen.queryByTestId("recipesLayoutID").textContent).toContain("");
  //   expect(store.getState().recipes.length).toBe(0);
  //   expect(store.getState().showRecipes).toBeFalsy();
  // });

  test("should update the store and browser with recipes", async () => {
    const mockResponse = {
      data: [
        {
          "productId": 0,
          "description": "Apples",
          "salePrice": 15.33,
          "category": "Fruit",
          "image": "https://images.pexels.com/photos/10256309/pexels-photo-10256309.jpeg?auto=compress&cs=tinysrgb&h=350"
        }
      ],
    };

    jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockResponse),
      })
    );

    expect(store.getState().products.length).toBe(0);

    await waitFor(async () => {
      render(productsComponent);
      await store.dispatch(getProducts(mockResponse.data));
    });

    expect(store.getState().products).toEqual(mockResponse.data);
    // const recipeElement = screen.getAllByTestId("recipeID")[0];
    // expect(recipeElement).toBeInTheDocument();
  });
});