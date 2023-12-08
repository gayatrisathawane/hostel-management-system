import React from 'react'
import Navbar from '../../component/Navbar/Navbar'
import './Contact.css'
import logoA from "./comments.png"
import logoB from "./clock.png"
import logoC from "./phone-call.png"
import logoD from "./pin.png"
import Footer from "../../component/Footer/Footer"
const Contact = () => {
  return (
    <div className='contact-main-container'>
      <Navbar />
      <div className='headingA'>
        <p className='head-1'>Contact/Room</p>
        <p className='head-2'>Contact Us</p>
      </div>
      <div className='contact-container'>
        <div className='contact-cont-A'>
          <p className='head-A'>Contact</p>
          <p className='head-B'>Use the contact form below to drop us a message, and we'll get back to you as soon as possible</p>
          <div className='contact-cont-A1'>
            <div className='contact-logo1'>
              <div>
                <img src={logoC} className='logos' />
              </div>
              <div>
                <p className='logo-ifm'>8999318362</p>
                <p className='logo-ifm'>8638918987</p>
              </div>
            </div>
            <div className='contact-logo2'>
              <div>
                <img src={logoA} className='logos' />
              </div>
              <div>
                <p>contact@gmail.com</p>
                <p>sagar123@gmail.com</p>
              </div>
              </div>
              <div className='contact-logo3'>
                <div>
                  <img src={logoD} className='logos' />
                </div>
                <p>11223 Cotten Market Nagpur</p>
              </div>
              <div className='contact-logo4'>
                <div>
                  <img src={logoB} className='logos' />
                </div>
                <div>
                  <p>Everyday</p>
                  <p>10am - 5pm</p>
                </div>
              </div>



            </div>

          </div>
          <div className='contact-cont-B'>
            <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119064.90027594799!2d78.99010793294913!3d21.161225997003946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0a5a31faf13%3A0x19b37d06d0bb3e2b!2sNagpur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1701955047059!5m2!1sen!2sin"></iframe>
          </div>
        </div>
        <br/>
       <Footer/>
      </div>
      )
}

      export default Contact
