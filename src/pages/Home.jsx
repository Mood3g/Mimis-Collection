import React from 'react'
import '../styles/home.css'
import Slide1 from '../assets/images/jacket2.jpeg'
import Slide2 from '../assets/images/dunk2.jpeg'
import Slide3 from '../assets/images/jacket1.jpeg'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div>
      <>
        <div id="heroCarousel" class="carousel slide carousel-fade" data-bs-ride="carousel">
          
          <div class="carousel-indicators">
              <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>

          
          <div class="carousel-inner">
              
              <div class="carousel-item active">
                  <div class="carousel-slide slide-1">
                      <div class="container">
                          <div class="row align-items-center">
                              <div class="col-lg-6">
                                  <div class="carousel-content">
                                      <span class="badge bg-primary mb-3">NEW ARRIVALS</span>
                                      <h1 class="display-3 fw-bold mb-3">Elevate Your<br/>Everyday Style</h1>
                                      <p class="lead mb-4">Discover curated collections designed for the modern professional. Quality meets sophistication.</p>
                                      <Link to="/products" class="btn btn-primary btn-lg px-5 py-3">Explore Collection</Link>
                                  </div>
                              </div>
                              <div class="col-lg-6">
                                  <div class="carousel-image">
                                      <img src={Slide1} alt="" />
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              
              <div class="carousel-item">
                  <div class="carousel-slide slide-2">
                      <div class="container">
                          <div class="row align-items-center">
                              <div class="col-lg-6">
                                  <div class="carousel-content">
                                      <span class="badge bg-dark mb-3">EXCLUSIVE OFFER</span>
                                      <h1 class="display-3 fw-bold mb-3">Premium Quality<br/>Great Value</h1>
                                      <p class="lead mb-4">Exceptional products at unbeatable prices. Invest in pieces that last.</p>
                                      <Link to="/products" class="btn btn-dark btn-lg px-5 py-3">Shop Now</Link>
                                  </div>
                              </div>
                              <div class="col-lg-6">
                                  <div class="carousel-image">
                                      <img src={Slide2} alt="" />
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              
              <div class="carousel-item">
                  <div class="carousel-slide slide-3">
                      <div class="container">
                          <div class="row align-items-center">
                              <div class="col-lg-6">
                                  <div class="carousel-content">
                                      <span class="badge bg-primary mb-3">SIGNATURE COLLECTION</span>
                                      <h1 class="display-3 fw-bold mb-3">Timeless<br/>Elegance</h1>
                                      <p class="lead mb-4">Classic pieces that never go out of style. Build a wardrobe that reflects your success.</p>
                                      <Link to="/products" class="btn btn-outline-primary btn-lg px-5 py-3">View Collection</Link>
                                  </div>
                              </div>
                              <div class="col-lg-6">
                                  <div class="carousel-image">
                                     <img src={Slide3} alt="" />
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

        
          <button class="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
          </button>
      </div>
    </>
  </div>
  )
}

export default Home
