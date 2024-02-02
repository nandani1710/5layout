import './App.css';
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { IoStar } from "react-icons/io5";

const testimonial = {
     responsive: {
       0: {
         items: 1,
       },
       600: {
         items: 2,
       },
       1000: {
         items: 3,
       }
     }
   }
function Testimonial() {
     return (
    <section>
            {/* testimonial */}
      <div class="testimonial-section">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-title">
                <div class="sub-title">
                  <h5>TESTIMONIALS</h5>
                </div>
                <div class="main-title">
                  <h2>What Says Our Clients ?</h2>
                </div>
              </div>
            </div>
          </div>

          <OwlCarousel className='owl-theme' loop margin={10}  {...testimonial}>
            <div className='item luxury-single-service '>
              <div class="col-lg-12">
                <div class="single-testimonial">
                  <div class="testimonial-thumb">
                    <img src={require(`./image/testi2.jpeg`)}></img>
                    <div class="testimonial-discription">
                      <p>"luxury tristique usto duision vitae on diamen neque nivamus aesta atene artines arinianu ateli finibus viverra nec lacus. Nedana dinoz setlie and suscipe none misster."</p>
                    </div>
                    <div class="testi-rating">
                      <ul>
                        <li><i><IoStar ></IoStar ></i></li>
                        <li><i><IoStar ></IoStar ></i></li>
                        <li><i><IoStar ></IoStar ></i></li>
                        <li><i><IoStar ></IoStar ></i></li>
                        <li><i><IoStar ></IoStar ></i></li>
                      </ul>
                    </div>
                    <div class="testi-title">
                      <h2>Jessica UK</h2>
                      <span>Founder</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className='item luxury-single-service '>
              <div class="col-lg-12">
                <div class="single-testimonial">
                  <div class="testimonial-thumb">
                    <img src={require(`./image/testi1.jpeg`)}></img>
                    <div class="testimonial-discription">
                      <p>"luxury tristique usto duision vitae on diamen neque nivamus aesta atene artines arinianu ateli finibus viverra nec lacus. Nedana dinoz setlie and suscipe none misster."</p>
                    </div>
                    <div class="testi-rating">
                      <ul>
                        <li><i><IoStar ></IoStar ></i></li>
                        <li><i><IoStar ></IoStar ></i></li>
                        <li><i><IoStar ></IoStar ></i></li>
                        <li><i><IoStar ></IoStar ></i></li>
                        <li><i><IoStar ></IoStar ></i></li>
                      </ul>
                    </div>
                    <div class="testi-title">
                      <h2>Jessica UK</h2>
                      <span>Founder</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className='item luxury-single-service '>
              <div class="col-lg-12">
                <div class="single-testimonial">
                  <div class="testimonial-thumb">
                    <img src={require(`./image/testi2.jpeg`)}></img>
                    <div class="testimonial-discription">
                      <p>"luxury tristique usto duision vitae on diamen neque nivamus aesta atene artines arinianu ateli finibus viverra nec lacus. Nedana dinoz setlie and suscipe none misster."</p>
                    </div>
                    <div class="testi-rating">
                      <ul>
                        <li><i><IoStar ></IoStar ></i></li>
                        <li><i><IoStar ></IoStar ></i></li>
                        <li><i><IoStar ></IoStar ></i></li>
                        <li><i><IoStar ></IoStar ></i></li>
                        <li><i><IoStar ></IoStar ></i></li>
                      </ul>
                    </div>
                    <div class="testi-title">
                      <h2>Jessica UK</h2>
                      <span>Founder</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>


          </OwlCarousel>
        </div>

      </div>
    </section>
     );
   }
   
   export default Testimonial;