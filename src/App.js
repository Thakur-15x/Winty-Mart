import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom'
import Products from './components/Products';
import Product from './components/Product';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Login from './components/buttons/Login';
import Signup from './components/buttons/Signup';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route exact path="/products" element={<Products />} ></Route>
      <Route exact path="/cart" element={<Cart />} ></Route>
      <Route exact path="/products/:id" element={<Product/>} ></Route>
      <Route exact path="/checkout" element={<Checkout/>} ></Route>
      <Route exact path="/login" element={<Login/>} ></Route>
      <Route exact path="/register" element={<Signup/>} ></Route>
      <Route exact path="/contact" element={<Contact/>} ></Route>
      </Routes>
      
    </div>
  );
}

export default App;
