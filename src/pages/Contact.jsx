import React from 'react'
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";
import { BsEnvelopeFill, BsFillTelephoneFill } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { IoIosSend } from "react-icons/io";
import '../styles/contact.css'


const Contact = () => {
  return (
    <>
      <section className="contact-hero">
        <div className="container">
            <h1>Get In Touch</h1>
            <p>Have questions? We're here to help! Reach out to us through any of the channels below.</p>
        </div>
    </section>

    <main className="contact-container">
    <div className="container">
      
      <div className="row mb-5">
          
          <div className="col-sm-4 mb-4">
              <div className="contact-card whatsapp-card">
                  <div className="contact-icon">
                      <FaWhatsapp />
                  </div>
                  <h3>Chat on WhatsApp</h3>
                  <p>Get instant support from our customer care team. We're available to help you!</p>
                  <Link to="https://wa.me/2348153388362?text=Hello%20Okwiri's%20Collection,%20I%20need%20help%20with..." target="_blank">
                      <FaWhatsapp className='me-2' />Start Chat
                  </Link>
              </div>
          </div>

          
          <div className="col-sm-4 mb-4">
              <div className="contact-card">
                  <div className="contact-icon">
                      <BsEnvelopeFill />
                  </div>
                  <h3>Email Us</h3>
                  <p>Send us an email and we'll get back to you within 24 hours.</p>
                  <Link to="mailto:miracleokwiri@gmail.com">miracleokwiri@gmail.com</Link>
              </div>
          </div>

          
          <div className="col-sm-4 mb-4">
              <div className="contact-card">
                  <div className="contact-icon">
                      <BsFillTelephoneFill />
                  </div>
                  <h3>Call Us</h3>
                  <p>Speak directly with our customer service team during business hours.</p>
                  <Link to="tel:+2348153388362">+234 815 338 8362</Link>
              </div>
          </div>
      </div>

      
      <div className="row justify-content-center">
          <div className="col-lg-8">
              <div className="contact-form-section">
                  <h2>Send Us a Message</h2>
                  <p className="subtitle">Fill out the form below and we'll respond as soon as possible.</p>
                  
                  <form id="contactForm">
                      <div className="row">
                          <div className="col-sm-6 mb-3">
                              <label className="form-label">First Name</label>
                              <input type="text" className="form-control" placeholder="Enter your first name" required />
                          </div>
                          <div className="col-sm-6 mb-3">
                              <label className="form-label">Last Name</label>
                              <input type="text" className="form-control" placeholder="Enter your last name" required />
                          </div>
                      </div>

                      <div className="row">
                          <div className="col-sm-6 mb-3">
                              <label className="form-label">Email Address</label>
                              <input type="email" className="form-control" placeholder="Enter your email" required />
                          </div>
                          <div className="col-sm-6 mb-3">
                              <label className="form-label">Phone Number</label>
                              <input type="tel" className="form-control" placeholder="Enter your phone number" />
                          </div>
                      </div>

                      <div className="mb-3">
                          <label className="form-label">Subject</label>
                          <select className="form-select" required>
                              <option value="">Select a subject</option>
                              <option value="order">Order Inquiry</option>
                              <option value="product">Product Question</option>
                              <option value="return">Return/Refund</option>
                              <option value="complaint">Complaint</option>
                              <option value="other">Other</option>
                          </select>
                      </div>

                      <div className="mb-3">
                          <label className="form-label">Message</label>
                          <textarea className="form-control" placeholder="Type your message here..." required></textarea>
                      </div>

                      <button type="submit" className="btn btn-primary w-100">
                          <IoIosSend />Send Message
                      </button>
                  </form>

                  <div className="social-links">
                      <Link to="#" className="social-link" title="Facebook">
                          <FaFacebook />
                      </Link>
                      <Link to="#" className="social-link" title="Instagram">
                          <FaInstagram />
                      </Link>
                      <Link to="#" className="social-link" title="Twitter">
                          <FaXTwitter />
                      </Link>
                  </div>
              </div>
          </div>
      </div>
    </div>
    </main>
    </>
  )
}

export default Contact
