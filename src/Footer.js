import './App.css';
 
import { MdFacebook } from "react-icons/md";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
// import { IoIosArrowRoundForward } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";

function Footer() {
     return (
       <section>
               {/* footer area */}
      <div class="footer-area">
        <div class="container">
          <div class="row ">
            <div class="col-lg-4 col-md-6 col-12">
              <div class="widgets-company-information">
                <div class="footer-logo">
                  <a href="#">    <img src={require(`./image/logo.png`)}></img></a>
                </div>
                <div class="footer-discription">
                  <p>Quisque pretium fermentum quam, sit amet cursus ante sollicitudin vel. Morbi consequat risus consequat, porttitor orci sit amet, iaculis nisl.</p>
                </div>
                <ul>
                  <li><a href="#"><i ><MdFacebook ></MdFacebook ></i></a></li>
                  <li><a href="#"><i ><FaPinterest ></FaPinterest ></i></a></li>
                  <li><a href="#"><i ><FaInstagram ></FaInstagram ></i></a></li>
                </ul>
              </div>
            </div>
            <div class="col-lg-8 col-md-6 col-12">
              <div class="row footer-row">
                <div class="col-lg-4 col-12">
                  <div class="single-footer">
                    <div class="footer-content">
                      <div class="footer-title">
                        <h3>General</h3>
                      </div>
                      <ul>
                        <li><a href="#"><i ><FaArrowRight ></FaArrowRight ></i> Accommodation</a></li>
                        <li><a href="#"><i ><FaArrowRight ></FaArrowRight ></i> Dine & Drink</a></li>
                        <li><a href="#"><i ><FaArrowRight ></FaArrowRight ></i> Spa & Leisure</a></li>
                        <li><a href="#"><i ><FaArrowRight ></FaArrowRight ></i> Services</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-12">
                  <div class="single-footer">
                    <div class="footer-content">
                      <div class="footer-title">
                        <h3>Contact Us</h3>
                      </div>
                    </div>
                    <div class="footer-text">
                      <p>Morem ipsum dolor sit amet one of consetur acing elit.</p>
                    </div>
                    <div class="footer-address">
                      <p>A: Via Venti Settembre, Roma</p>
                      <p>E: Example@allogio.com</p>
                      <p>P: +31 555 777 83</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-12">
                  <div class="single-footer">
                    <div class="footer-content">
                      <div class="footer-title">
                        <h3>Newsletter</h3>
                      </div>
                      <div class="footers-texts">
                        <form action="#" method="POST" id="dreamit-form">
                          <div class="form_box">
                            <input type="text" name="Enter E-mail" placeholder="Enter E-mail"></input>
                          </div>
                          {/* <div class="form-icon">
                            <i ><IoIosArrowRoundForward ></IoIosArrowRoundForward ></i>
                          </div> */}
                        </form>
                        <div id="status"></div>
                      </div>
                      <div class="footerse-thumbs">
                        *<img src={require(`./image/footer.png`)}></img>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="copy-right-area">
          <div class="container">
            <div class="row">
              <div class="col-lg-6">
                <div class="copyright-title">
                  <h3>Copyright © luxury all rights reserved.</h3>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="copyright-menu">
                  <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Contact</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
       </section>

     );
   }
   
   export default Footer;