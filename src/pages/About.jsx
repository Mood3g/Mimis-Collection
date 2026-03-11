import React from 'react'
import { Link } from 'react-router-dom'
import { FaRegGem, FaHeart } from "react-icons/fa";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import '../styles/about.css'

const About = () => {
  return (
    <>
      <section class="about-hero">
        <div class="container">
            <h1>About Mimi's Collection</h1>
            <p>Your trusted destination for quality products and exceptional service. We're passionate about bringing you the best shopping experience.</p>
        </div>
    </section>

    <main class="about-content">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-sm-10">
                    
                    <div class="about-section">
                        <h2>Our Story</h2>
                        <p>Mimi's Collection was founded with a simple mission: to provide high-quality products that enhance everyday life.</p>
                        <p>We believe in the power of great design, quality craftsmanship, and outstanding service. Every product in our collection is carefully curated to meet the highest standards.</p>
                    </div>

                    <div class="about-section">
                        <h2>Our Mission</h2>
                        <p>To deliver exceptional products and create memorable shopping experiences that exceed our customers' expectations. We're committed to quality, integrity, and innovation in everything we do.</p>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <section class="about-content">
        <div class="container">
            <div class="text-center mb-5">
                <h2 style={{color: '#2563eb', fontSize: '2.5rem', fontWeight: 700 }}>Our Values</h2>
                <p style={{color: '#64748b', fontSize: '1.1rem' }}>The principles that guide everything we do</p>
            </div>

            <div class="row">
                <div class="col-sm-4 mb-4">
                    <div class="value-card">
                        <div class="value-icon">
                            <FaRegGem />
                        </div>
                        <h3>Quality First</h3>
                        <p>We never compromise on quality. Every product is carefully selected to ensure it meets our high standards.</p>
                    </div>
                </div>

                <div class="col-sm-4 mb-4">
                    <div class="value-card">
                        <div class="value-icon">
                            <FaHeart />
                        </div>
                        <h3>Customer Focus</h3>
                        <p>Our customers are at the heart of everything we do. Your satisfaction is our top priority.</p>
                    </div>
                </div>

                <div class="col-sm-4 mb-4">
                    <div class="value-card">
                        <div class="value-icon">
                            <IoShieldCheckmarkOutline />
                        </div>
                        <h3>Trust & Integrity</h3>
                        <p>We build lasting relationships through honesty, transparency, and reliable service.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="cta-section">
        <div class="container">
            <h2>Ready to Shop?</h2>
            <p>Explore our collection and discover products you'll love</p>
            <Link to="/products" class="btn-cta">Start Shopping</Link>
        </div>
    </section>

    </>
  )
}

export default About
