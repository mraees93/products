import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Products } from "./components/Products";
import { ProductSalesTable } from "./components/ProductSalesTable";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Products />} exact />
          <Route
            path="/ProductSalesTable/:id"
            element={<ProductSalesTable />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
