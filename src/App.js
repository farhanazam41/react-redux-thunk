import Header from "./containers/Header";
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ProductLists from "./containers/ProductLists";
import ProductDetails from "./containers/ProductDetails";
import ProductItem from "./containers/ProductItem";
import AddProduct from "./containers/AddProduct";

const App = () => {
  return (
    <div className="App">
    <Router>
    <Header />
      <Routes>
        <Route path="/products" exact element={<ProductLists/>} />
        <Route path="/products/addproduct" exact element={<AddProduct/>} />
        <Route path="/products/:productId" exact element={<ProductDetails/>} />
        <Route>404 Not Found</Route>
      </Routes>
    </Router>  
    </div>
  );
}

export default App;
