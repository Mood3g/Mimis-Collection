import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../products/productSlice';
import { Link } from 'react-router-dom';

const Product = () => {
  const { products, status, error } = useSelector((state) => state.products);
  const { user, status: authStatus } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  console.log(user)
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProduct());
    }
  }, [status, dispatch]);

  // Show loading for auth first (if needed)
  if (authStatus === 'loading') {
    return <h1 className="text-center mt-5">Fetching user...</h1>;
  }

  // Product loading
  if (status === 'loading') {
    return <h1 className="text-center mt-5">Loading products...</h1>;
  }

  // Error state
  if (status === 'failed') {
    return (
      <div className="container mt-5">
        <div className="alert alert-danger">
          <h4>Error loading products</h4>
          <p>{error || 'Something went wrong. Please try again later.'}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-center">Products Page</h1>


        <div className="row">
          {products.map((product) => (
            <div className="col-sm-6 col-md-4 col-lg-3 mb-4" key={product._id}>
              <div className="card h-100 shadow-sm">
                <img
                  src={`https://okwiris-collection-api.onrender.com/${product.image}`}
                  className="card-img-top"
                  alt={product.title}
                  style={{ height: '220px', objectFit: 'cover' }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text text-success fw-bold">
                    ₦{product.price?.toLocaleString() || 'N/A'}
                  </p>
                  {/* Optional: show description preview */}
                  {product.description && (
                    <p className="card-text text-muted small">
                      {product.description.substring(0, 60)}...
                    </p>
                  )}
                  <div className="mt-auto">
                    <Link
                      to={`/product/${product._id}`}
                      className="btn btn-primary w-100"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Product;