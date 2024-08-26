import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Products } from './components/Products';
import { ProductSalesModal } from './components/ProductSalesModal'

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Products />} exact />
        <Route path="/productSalesModal/:id" element={<ProductSalesModal/>} /> {/* Assuming you're passing an id to identify the image */}
      </Routes>
    </Router>
   
      {/* <Products /> */}
      {/* <ProductSalesModal /> */}
    </div>
  );
}

export default App;
