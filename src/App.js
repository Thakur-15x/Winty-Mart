import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom'
import Products from './components/Products';
import Product from './components/Product';
// import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/products" element={<Products />} ></Route>
      <Route path="/products/:id" element={<Product/>} ></Route>
      {/* <Route path="/cart/:id" element={<Cart/>} ></Route> */}
      </Routes>
      
    </div>
  );
}

export default App;
