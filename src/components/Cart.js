import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { delCart } from "../redux/action/index";

function Cart() {
  const stat = useSelector((state) => state.handelCart);
  const dispatch = useDispatch();

  const handleClose = (item) => {
    dispatch(delCart(item));
  };

  const cartItems = (cartItem) => {
    return (
      <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
        <div className="container py-4">
          <button
            onClick={() => handleClose(cartItem)}
            className="btn-close float-end arial-label='Close"
          ></button>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <img
                src={cartItem.image}
                alt={cartItem.title}
                height="200px"
                width="180px"
              />
            </div>
            <div className="col-md-4">
              <h3>{cartItem.title}</h3>
              <p className="lead fw-bold">${cartItem.price}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const emptyCart = () => {
    return (
      <div className="px-4 my-5 bg-light rounded-3 py-5">
        <div className="container py-4">
          <div className="row">
            <h3 className='text-center' >Your Cart is Empty <img className="img1" src="/images/emptycart.png" alt='cart' /></h3>
          </div>
        </div>
      </div>
    );
  };

  const button = ()=>{
      return(
          <div className="container">
              <div className="row">
                  <Link to="/checkout" className='btn btn-outline-dark mb-5 w-25 mx-auto'>Proceed To Billing</Link>
              </div>
          </div>
      )
  }

  return (
    <>
      {stat.length === 0 && emptyCart()}
      {stat.length !== 0 && stat.map(cartItems)}
      {stat.length !== 0 && button()}
    </>
  );
}

export default Cart;
