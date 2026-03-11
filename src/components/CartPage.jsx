import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, decreaseCart, increaseCart, removeFromCart } from '../cart/cartSlice';
import { FaPlus, FaMinus, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const dispatch = useDispatch();

  // Safe selector with fallback
  const { cartItems = [], totalQuantity = 0, totalAmount = 0 } = 
    useSelector(state => state.carts || {});

  if (cartItems.length === 0) {
    return (
      <div className="container text-center mt-5 py-5">
        <div style={{ fontSize: '100px', color: '#fd7e14' }}>🛒</div>
        <h3 className="mt-3">Your cart is empty!</h3>
        <p className="text-muted">Browse our categories and discover our best deals!</p>
        <Link to="/products" className="btn btn-warning text-white px-5 py-3 mt-3">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2>Cart Items ({totalQuantity})</h2>

      {cartItems.map((cart) => (
        <div key={cart._id} className="card mb-3">
          <div className="row g-0 align-items-center p-3">
            <div className="col-md-3 col-4">
              <img
                src={`https://okwiris-collection-api.onrender.com/${cart.image}`}
                alt={cart.title}
                className="img-fluid rounded"
                style={{ height: '140px', objectFit: 'cover' }}
              />
            </div>
            <div className="col-md-9 col-8 ps-3">
              <h5>{cart.title}</h5>
              <p className="text-success fw-bold">₦{cart.price?.toLocaleString()}</p>

              <div className="d-flex align-items-center gap-3 mb-2">
                <button 
                  className="btn btn-outline-secondary btn-sm"
                  onClick={() => dispatch(decreaseCart(cart._id))}
                  disabled={cart.quantity <= 1}
                >
                  <FaMinus />
                </button>
                <span className="fs-5 px-3">{cart.quantity}</span>
                <button 
                  className="btn btn-outline-secondary btn-sm"
                  onClick={() => dispatch(increaseCart(cart._id))}
                >
                  <FaPlus />
                </button>
              </div>

              <button 
                className="btn btn-danger btn-sm"
                onClick={() => dispatch(removeFromCart(cart._id))}
              >
                <FaTrash className="me-1" /> Remove
              </button>
            </div>
          </div>
        </div>
      ))}

      <div className="mt-4 p-3 bg-light rounded">
        <h4>Total Amount: ₦{totalAmount?.toLocaleString() || 0}</h4>
        <button 
          className="btn btn-danger mt-2"
          onClick={() => dispatch(clearCart())}
        >
          Clear Cart
        </button>

        <Link to='/checkout'>
         <button className='btn btn-warning mt-2 p-2 px-4 ms-4 text-light '>Checkout</button>
        </Link>
       
      </div>
    </div>
  );
};

export default CartPage;