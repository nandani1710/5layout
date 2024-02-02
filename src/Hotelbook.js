import './App.css';
import { AiOutlineCheck } from "react-icons/ai";

function Hotelbook() {
     return (
   <seciton>
      {/* luxury hotels */}
      <div class="luxury-hotel-section">
        <div class="container">
          <div class="row back align-items-center">
            <div class="col-lg-6">
              <div class="single-luxury">
                <div class="luxury-thumb">
                  <img src={require(`./image/luxury.jpeg`)}></img>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="single-luxury">
                <div class="section-title">
                  <div class="sub-title">
                    <h5>THE BEST LUXURY HOTEL</h5>
                  </div>
                  <div class="main-title">
                    <h2>Relaxing Moments at  Our Spa Center.</h2>
                  </div>
                  <div class="section-discription">
                    <p>Dictum varius duis at consectetur lorem donec massa sapien faucibus. Tincidunt arcu non para sodales neque sodales ut etiam sit and awesome project.</p>
                  </div>
                </div>
                <div class="luxury-icon-list">
                  <ul className='ps-0'>
                    <li><i><AiOutlineCheck></AiOutlineCheck></i> Thermal water with ancient baths</li>
                    <li><i ><AiOutlineCheck></AiOutlineCheck></i> Turkish bath</li>
                    <li><i ><AiOutlineCheck></AiOutlineCheck></i> Turkish sauna</li>
                    <li><i ><AiOutlineCheck></AiOutlineCheck></i> Relax and therapy massage</li>
                  </ul>
                </div>
                <div class="luxury-button">
                  <a href="#">Book Now <i ></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* luxury area */}
      {/* <div class="luxury-hotel-section upper">
        <div class="container">
          <div class="row back align-items-center">
            <div class="col-lg-6">
              <div class="single-luxury">
                <div class="section-title">
                  <div class="sub-title">
                    <h5>EXPERIENCED</h5>
                  </div>
                  <div class="main-title">
                    <h2>The Health Club & Pool</h2>
                  </div>
                  <div class="section-discription">
                    <p>Dictum varius duis at consectetur lorem donec massa sapien faucibus. Tincidunt arcu non para sodales neque sodales ut etiam sit and awesome project.</p>
                  </div>
                </div>
                <div class="luxury-icon-list">
                  <ul className='ps-0'>
                    <li><i><AiOutlineCheck></AiOutlineCheck></i> Thermal water with ancient baths</li>
                    <li><i><AiOutlineCheck></AiOutlineCheck></i> Turkish bath</li>
                    <li><i><AiOutlineCheck></AiOutlineCheck></i> Turkish sauna</li>
                    <li><i><AiOutlineCheck></AiOutlineCheck></i> Relax and therapy massage</li>
                  </ul>
                </div>
                <div class="luxury-button">
                  <a href="#">Book Now <i class="bi bi-arrow-right"></i></a>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="single-luxury">
                <div class="luxury-thumb">
                  <img src={require(`./image/luxury.jpeg`)}></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
   </seciton>
     );
   }
   
   export default Hotelbook;