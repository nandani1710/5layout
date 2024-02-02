import '../App.css';
import { FaPlay ,FaRegStar,FaRegClock ,FaRegCalendarAlt  } from "react-icons/fa";
import { GoGift } from "react-icons/go";

import { TbWorld } from "react-icons/tb";

function About_services() {
     return (
          <section>
               <div class="about-area upper">
                    <div class="container">
                         <div class="row">
                              <div class="col-lg-12">
                                   <div class="section-title">
                                        <div class="sub-title">
                                             <h5>ABOUT US</h5>
                                        </div>
                                        <div class="main-title">
                                             <h2>Since 8+ Years</h2>
                                        </div>
                                        <div class="section-discription">
                                             <p>Ut condimentum magna ut augue elementum ornare. Fusce posuere massa vitae maximus posuere. Mauris sagittis consectetur vulputate. Curabitur commodo est quis felis porttitor eleifend. Sed efficitur sem mi, et feugiat lorem scelerisque awesome hotel booking website for you.</p>
                                        </div>
                                   </div>
                                   <div class="about-video">
                                        <div class="about-video-tmb">
                                        <img src={require(`../image/slider2.jpeg`)}></img>
                                        </div>
                                        <div class="video-icon">
                                             <a href="https://www.youtube.com/watch?v=Wx48y_fOfiY"><i><FaPlay></FaPlay></i></a>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div class="row about-upper">
                              <div class="col-lg-4 col-sm-12 col-12">
                                   <div class="about-icon-box">
                                        <div class="about-icon">
                                             <i><TbWorld ></TbWorld ></i>
                                        </div>
                                        <div class="about-title">
                                             <h2>Best Location</h2>
                                             <p>Lorem ipsum dolor sit amet consec adipiscing elit, sed do eiusmod an tempor incididunt</p>
                                        </div>
                                   </div>
                              </div>
                              <div class="col-lg-4  col-sm-12 col-12">
                                   <div class="about-icon-box">
                                        <div class="about-icon">
                                             <i><FaRegStar ></FaRegStar ></i>
                                        </div>
                                        <div class="about-title">
                                             <h2>Best Location</h2>
                                             <p>Lorem ipsum dolor sit amet consec adipiscing elit, sed do eiusmod an tempor incididunt</p>
                                        </div>
                                   </div>
                              </div>
                              <div class="col-lg-4 col-sm-12 col-12">
                                   <div class="about-icon-box">
                                        <div class="about-icon">
                                             <i><FaRegClock ></FaRegClock ></i>
                                        </div>
                                        <div class="about-title">
                                             <h2>Best Location</h2>
                                             <p>Lorem ipsum dolor sit amet consec adipiscing elit, sed do eiusmod an tempor incididunt</p>
                                        </div>
                                   </div>
                              </div>
                              <div class="col-lg-4 col-sm-12 col-12">
                                   <div class="about-icon-box">
                                        <div class="about-icon">
                                             <i><FaRegCalendarAlt ></FaRegCalendarAlt ></i>
                                        </div>
                                        <div class="about-title">
                                             <h2>Best Location</h2>
                                             <p>Lorem ipsum dolor sit amet consec adipiscing elit, sed do eiusmod an tempor incididunt</p>
                                        </div>
                                   </div>
                              </div>
                              <div class="col-lg-4 col-sm-12 col-12">
                                   <div class="about-icon-box">
                                        <div class="about-icon">
                                             <i><GoGift ></GoGift ></i>
                                        </div>
                                        <div class="about-title">
                                             <h2>Best Location</h2>
                                             <p>Lorem ipsum dolor sit amet consec adipiscing elit, sed do eiusmod an tempor incididunt</p>
                                        </div>
                                   </div>
                              </div>
                              <div class="col-lg-4 col-sm-12 col-12">
                                   <div class="about-icon-box">
                                        <div class="about-icon">
                                             <i><TbWorld></TbWorld></i>
                                        </div>
                                        <div class="about-title">
                                             <h2>Best Location</h2>
                                             <p>Lorem ipsum dolor sit amet consec adipiscing elit, sed do eiusmod an tempor incididunt</p>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>

          </section>
     );
}

export default About_services;