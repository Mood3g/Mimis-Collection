import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { FaTruck } from "react-icons/fa"
import '../styles/checkout.css'
import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3'



const CheckoutPage = () => {
  // Pull real cart data from Redux (safe fallback)
  const { cartItems = [], totalQuantity = 0, totalAmount = 0 } = 
    useSelector(state => state.carts || {});

  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
    sameBilling: true,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Static extras (you can make dynamic later based on form data)
  
  const grandTotal = totalAmount;

  if (cartItems.length === 0) {
    return (
      <div className="container text-center mt-5 py-5">
        <h3>No items in cart to checkout!</h3>
        <p className="text-muted">Add some products and come back.</p>
        {/* Add link back to products if you want */}
      </div>
    );
  }

  //Flutterwave Payment
        const flwConfig = {
        public_key: 'FLWPUBK_TEST-c20fa28c70eeab3ca0dfa3765fee4051-X',
        tx_ref: `TX-${Date.now()}`,
        amount: totalAmount,
        currency: 'NGN',
        payment_options: 'card,banktransfer,ussd,mobilemoney', 
        customer: {
          email: formData.email,
          phone_number: formData.phone,

        },
        customizations: {           
        },
        callback: (response) => {
      console.log('Payment response:', response);
        closePaymentModal()
        },
        onClose: () => {
          console.log('Payment modal closed by User');
        },
          }

  return (
    <main className="checkout-container">
      <div className="container">
        <h1 className='my-3'>Checkout</h1>

        <div className="row">
          {/* Left: Shipping & Billing Form */}
          <div className="col-sm-7">
            <div className="checkout-section">
              <h2 className="section-title">
                <FaTruck /> Shipping Information
              </h2>
              <form id="shippingForm">
                <div className="row">
                  <div className="col-sm-6 mb-3">
                    <label className="form-label">First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter first name"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-sm-6 mb-3">
                    <label className="form-label">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter last name"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Enter phone number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Street address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="row">
                  <div className="col-sm-6 mb-3">
                    <label className="form-label">City</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-sm-6 mb-3">
                    <label className="form-label">State/Province</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter state"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-6 mb-3">
                    <label className="form-label">Postal Code</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter postal code"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                {/* Billing checkbox */}
                <div className="form-check mb-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="sameAsShipping"
                    name="sameBilling"
                    checked={formData.sameBilling}
                    onChange={handleInputChange}
                  />
                  <label className="form-check-label" htmlFor="sameAsShipping">
                    Billing address same as shipping address
                  </label>
                </div>
              </form>
            </div>
          </div>

          {/* Right: Dynamic Order Summary */}
          <div className="col-sm-5">
            <div className="order-summary">
              <h2 className="section-title">
                <i className="bi bi-bag-check"></i> Order Summary
              </h2>

              {/* Real cart items */}
              {cartItems.map((item) => (
                <div key={item._id} className="order-item">
                  <div className="order-item-image">
                    <img
                      src={`https://okwiris-collection-api.onrender.com/${item.image}`}
                      alt={item.title}
                      className="img-fluid rounded"
                      style={{ height: '60px', objectFit: 'cover' }}
                    />
                  </div>
                  <div className="order-item-details">
                    <div className="order-item-name">{item.title}</div>
                    <div className="order-item-meta">
                      Qty: {item.quantity} × ₦{item.price?.toLocaleString()}
                    </div>
                  </div>
                  <div className="order-item-price">
                    ₦{(item.price * item.quantity).toLocaleString()}
                  </div>
                </div>
              ))}

              {/* Totals */}
              <div className="order-totals">
                <div className="total-row">
                  <span>Subtotal ({totalQuantity} items)</span>
                  <span>₦{totalAmount.toLocaleString()}</span>
                </div>

                <div className="total-row final">
                  <span>Total</span>
                  <span>₦{grandTotal.toLocaleString()}</span>
                </div>
              </div>

              {/* Place Order Button (no payment yet) */}
              <FlutterWaveButton 
                {...flwConfig} 
                className="btn btn-primary w-100 mt-3 py-3"
                text="Pay Now"
              />
              <p className="text-center text-muted mt-3 mb-0" style={{ fontSize: '0.875rem' }}>
                <i className="bi bi-shield-check"></i> Secure checkout - Your information is protected
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CheckoutPage;