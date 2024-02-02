import './App.css';
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { IoCallOutline } from "react-icons/io5";
import { AiOutlineCheck } from "react-icons/ai";
const object = {
     responsive: {
       0: {
         items: 1,
       },
       600: {
         items: 1,
       },
       1000: {
         items: 2,
       }
     }
   }
function Services() {
     return (
    <section>
      <div class="luxury-service-section">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 ser">
              <div class="single-service">
                <div class="section-title">
                  <div class="sub-title">
                    <h5>BEST PRICES</h5>
                  </div>
                  <div class="main-title">
                    <h2>Extra Services</h2>
                  </div>
                  <div class="section-discription">
                    <p>Duis aute irure dolor in reprehenderit in the voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                  </div>
                </div>
                <div class="service-text">
                  <p>Excepteur sint occaecat cupidatat non pro  proident, sunt in culpa qui officia deserunt mollit anim est laborum.</p>
                </div>
                <div class="service-icon">
                  <i ><IoCallOutline ></IoCallOutline ></i>
                </div>
                <div class="service-number">
                  <span>880 987 654 765</span>
                  <p>For More Information</p>
                </div>
              </div>
            </div>
            <div className='col-lg-8 luxury-slider'>
              <OwlCarousel className='owl-theme ' loop margin={10} dots={true} {...object}>
                <div className='item luxury-single-service '>
                  <img src={require(`./image/slider1.jpeg`)}></img>
                  <div class="service-content ">
                    <div class="service-title">
                      <h2>Breakfast In Morning</h2>
                    </div>
                    <div class="icon-list">
                      <ul>
                        <li><i ><AiOutlineCheck></AiOutlineCheck></i> Nunc scelerisque velit a pulvina</li>
                        <li><i ><AiOutlineCheck></AiOutlineCheck></i> Donec a ligula lacinia, consect</li>
                        <li><i ><AiOutlineCheck></AiOutlineCheck></i> Praesent ultrices urna purus</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className='item luxury-single-service '>
                  <img src={require(`./image/slider2.jpeg`)}></img>
                  <div class="service-content">
                    <div class="service-title">
                      <h2>Safe & Secure</h2>
                    </div>
                    <div class="icon-list">
                      <ul>
                        <li><i><AiOutlineCheck></AiOutlineCheck></i> Nunc scelerisque velit a pulvina</li>
                        <li><i><AiOutlineCheck></AiOutlineCheck></i> Donec a ligula lacinia, consect</li>
                        <li><i><AiOutlineCheck></AiOutlineCheck></i> Praesent ultrices urna purus</li>
                      </ul>
                    </div>
                  </div>
                </div>


              </OwlCarousel>
            </div>

          </div>
        </div>
      </div>

    </section>
     );
   }
   
   export default Services;