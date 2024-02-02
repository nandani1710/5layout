import './App.css';
import { IoCallOutline } from "react-icons/io5";
import { IoStar } from "react-icons/io5";
function Booking() {
     return (
    <section>
      <div class="call-do-action-area ">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="single-call-do-action">
                <div class="call-rating">
                  <ul>
                    <li><i><IoStar ></IoStar ></i></li>
                    <li><i><IoStar ></IoStar ></i></li>
                    <li><i><IoStar ></IoStar ></i></li>
                    <li><i><IoStar ></IoStar ></i></li>
                    <li><i><IoStar ></IoStar ></i></li>
                  </ul>
                </div>
                <div class="section-title">
                  <div class="main-title">
                    <h2>Call us, it's toll-free.</h2>
                  </div>
                  <div class="section-discription">
                    <p>Each of our guest rooms feature a private bath, wi-fi, cable television and include full breakfast. And also have awesome swing system in the ponds.</p>
                  </div>
                </div>
                <div class="call-icon">
                  <i ><IoCallOutline ></IoCallOutline ></i>
                </div>
                <div class="call-number">
                  <span>880 987 654 765</span>
                  <p>For More Information</p>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="single-boking-form">
                <div class="section-title">
                  <div class="sub-title">
                    <h5>ROOMS & SUITES</h5>
                  </div>
                  <div class="main-title">
                    <h2>Hotel Booking Form</h2>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-12">
                    <form action="https://formspree.io/f/myyleorq" method="POST" id="dreamit-form">
                      <div class="row">
                        <div class="col-lg-6 col-md-6">
                          <div class="boking-titles">
                            <h4>Check In</h4>
                          </div>
                          <div class="form_box">
                            <input type="date" id="myDate" name="Your name" placeholder="MM/DD/YYYY"></input>
                          </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                          <div class="boking-titles">
                            <h4>Check Out</h4>
                          </div>
                          <div class="form_box">
                            <input type="date" id="myDate" name="your email" placeholder="MM/DD/YYYY"></input>
                          </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                          <div class="boking-titles">
                            <h4>Adult</h4>
                          </div>
                          <div class="form_box">
                            <select id="cars" name="carlist" form="carform">
                              <option value="service">1</option>
                              <option value="volvo">1</option>
                              <option value="saab">3</option>
                              <option value="opel">4</option>
                              <option value="audi">5</option>
                              <option value="audi">6</option>
                              <option value="audi">7</option>
                            </select>
                          </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                          <div class="boking-titles">
                            <h4>Children</h4>
                          </div>
                          <div class="form_box">
                            <select id="cars" name="carlist" form="carform">
                              <option value="service">1</option>
                              <option value="volvo">1</option>
                              <option value="saab">3</option>
                              <option value="opel">4</option>
                              <option value="audi">5</option>
                              <option value="audi">6</option>
                              <option value="audi">7</option>
                            </select>
                          </div>
                        </div>
                        <div class="col-lg-12 col-md-12">
                          <div class="form-button">
                            <button type="submit">Check Availability</button>
                          </div>
                        </div>
                      </div>
                    </form>
                    <div id="status"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
     );
   }
   
   export default Booking;