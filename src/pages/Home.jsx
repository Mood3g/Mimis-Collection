import React from 'react'
import '../styles/home.css'
import Slide1 from '../assets/images/jacket2.jpeg'
import Slide2 from '../assets/images/dunk2.jpeg'
import Slide3 from '../assets/images/jacket1.jpeg'
import Product1 from '../assets/images/denim-jacket.jpeg'
import Product2 from '../assets/images/custom-dunk.jpeg'
import Product3 from '../assets/images/stripped-hoodie.jpeg'
import Product4 from '../assets/images/mocha-dunk.jpeg'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    
      <>
        <div id="heroCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
          
          <div className="carousel-indicators">
              <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>

          
          <div className="carousel-inner">
              
              <div className="carousel-item active">
                  <div className="carousel-slide slide-1">
                      <div className="container">
                          <div className="row align-items-center">
                              <div className="col-lg-6">
                                  <div className="carousel-content">
                                      <span className="badge bg-primary mb-3">NEW ARRIVALS</span>
                                      <h1 className="display-3 fw-bold mb-3">Elevate Your<br/>Everyday Style</h1>
                                      <p className="lead mb-4">Discover curated collections designed for the modern professional. Quality meets sophistication.</p>
                                      <Link to="/products" className="btn btn-primary btn-lg px-5 py-3">Explore Collection</Link>
                                  </div>
                              </div>
                              <div className="col-lg-6">
                                  <div className="carousel-image">
                                      <img src={Slide1} alt="" />
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              
              <div className="carousel-item">
                  <div className="carousel-slide slide-2">
                      <div className="container">
                          <div className="row align-items-center">
                              <div className="col-lg-6">
                                  <div className="carousel-content">
                                      <span className="badge bg-dark mb-3">EXCLUSIVE OFFER</span>
                                      <h1 className="display-3 fw-bold mb-3">Premium Quality<br/>Great Value</h1>
                                      <p className="lead mb-4">Exceptional products at unbeatable prices. Invest in pieces that last.</p>
                                      <Link to="/products" className="btn btn-dark btn-lg px-5 py-3">Shop Now</Link>
                                  </div>
                              </div>
                              <div className="col-lg-6">
                                  <div className="carousel-image">
                                      <img src={Slide2} alt="" />
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              
              <div className="carousel-item">
                  <div className="carousel-slide slide-3">
                      <div className="container">
                          <div className="row align-items-center">
                              <div className="col-lg-6">
                                  <div className="carousel-content">
                                      <span className="badge bg-primary mb-3">SIGNATURE COLLECTION</span>
                                      <h1 className="display-3 fw-bold mb-3">Timeless<br/>Elegance</h1>
                                      <p className="lead mb-4">Classic pieces that never go out of style. Build a wardrobe that reflects your success.</p>
                                      <Link to="/products" className="btn btn-outline-primary btn-lg px-5 py-3">View Collection</Link>
                                  </div>
                              </div>
                              <div className="col-lg-6">
                                  <div className="carousel-image">
                                     <img src={Slide3} alt="" />
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

        
          <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
          </button>
      </div>

      <section className='py-5'>
        <h2 className="mb-4">Featured Products</h2>

        <div className="row" style={{ display: 'flex', justifyContent: 'center', }}>
            <div className="col-sm-3 mb-5">
                <div className="card" style={{ width: '20rem', height: 'auto' }}>
                    <img src={Product1} className="card-img-top prod" alt="..." />
                    <div className="card-body">
                    <h5 className="card-title">Classic Black Denim Trucker Jacket</h5>
                    <p className="card-text">Timeless black denim jacket with a slim yet comfortable fit. Button-down front, chest flap pockets, adjustable cuffs, and vintage wash for that worn-in look. Versatile layering piece – wear over tees, hoodies, or shirts. 100% cotton denim construction, durable and breathable for year-round street style.</p>
                    <Link to="/products" className="btn btn-primary">Buy Now</Link>
                    </div>
                </div>
            </div>

            <div className="col-sm-3 mb-5">
                <div className="card" style={{ width: '20rem', height: 'auto' }}>
                    <img src={Product2} className="card-img-top prod" alt="..." />
                    <div className="card-body">
                    <h5 className="card-title">Nike Air Force 1 Low Custom \"Black Drip\" Edition</h5>
                    <p className="card-text">Stand out with this hand-painted custom Air Force 1 featuring bold black drip accents over crisp white leather. Iconic Nike Swoosh with artistic splatter detailing, perforated toe box for breathability, and classic cushioned sole. Limited streetwear vibe – perfect for collectors or bold casual looks. Premium synthetic finish, durable and eye-catching.</p>
                    <Link to="/products" className="btn btn-primary">Buy Now</Link>
                    </div>
                </div>
            </div>

            <div className="col-sm-3 mb-5">
                <div className="card" style={{ width: '20rem', height: 'auto' }}>
                    <img src={Product3} className="card-img-top prod" alt="..." />
                    <div className="card-body">
                    <h5 className="card-title">Plaid Flannel Hoodie Shirt Jacket – Black/White</h5>
                    <p className="card-text">Cozy oversized flannel shirt jacket with attached hood and classic black/white plaid pattern. Button front, chest pockets, soft brushed interior for warmth, and drawstring hood. Versatile shacket style – layer over tees or wear alone. Heavyweight cotton blend, relaxed fit for everyday fall/winter comfort.</p>
                    <Link to="/products" className="btn btn-primary">Buy Now</Link>
                    </div>
                </div>
            </div>

            <div className="col-sm-3 mb-5">
                <div className="card" style={{ width: '20rem', height: 'auto' }}>
                    <img src={Product4} className="card-img-top prod" alt="..." />
                    <div className="card-body">
                    <h5 className="card-title">Nike Air Force 1 Low 'Mocha' Premium</h5>
                    <p className="card-text">Clean and sophisticated Nike Air Force 1 in mocha brown and neutral tones. Premium leather/suede upper, tonal Swoosh, perforated toe for ventilation, and signature chunky sole with AIR cushioning. Comes fresh in box – timeless silhouette that elevates any outfit, from casual jeans to streetwear fits.</p>
                    <Link to="/products" className="btn btn-primary">Buy Now</Link>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Home
