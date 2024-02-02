import './App.css';

function Roomssuits() {
     return (
    <section>
     {/* Start flip-area  */}

     <div className="flip-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <div className="sub-title">
                  <h5>THE LUXURY HOTEL</h5>
                </div>
                <div classNameName="main-title">
                  <h2>Rooms & Suites</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row ">
            <div className="col-lg-4 col-md-6 col-12">
              <div className="flip-box">
                <div className="flip-box-inner">
                  <div className="flip-box-front">
                    <div className="front-price">
                      <p>From $90/night</p>
                    </div>
                    <div className="flip-single-box">
                      <div className="box-title">
                        <h3>Deluxe Double Rooms</h3>
                        <span>38m2/2 beds/1 bathroom</span>
                      </div>
                    </div>
                  </div>
                  <div className="flip-box-back">
                    <div className="flip-title">
                      <h2>Deluxe Double Rooms</h2>
                    </div>
                    <div className="des">
                      <p>Architecture viverra tristique ustoni an missten vitae diam neque nivamus the aestan the atene artines arinianu ateli ine finibus viverra nec lacus.</p>
                      <a href="#">Book Now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="flip-box">
                <div className="flip-box-inner">
                  <div className="flip-box-front upper">
                    <div className="front-price">
                      <p>From $90/night</p>
                    </div>
                    <div className="flip-single-box">
                      <div className="box-title">
                        <h3> Double Rooms</h3>
                        <span>38m2/2 beds/1 bathroom</span>
                      </div>
                    </div>
                  </div>
                  <div className="flip-box-back">
                    <div className="flip-title">
                      <h2> Double Rooms</h2>
                    </div>
                    <div className="des">
                      <p>Architecture viverra tristique ustoni an missten vitae diam neque nivamus the aestan the atene artines arinianu ateli ine finibus viverra nec lacus.</p>
                      <a href="#">Book Now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="flip-box">
                <div className="flip-box-inner">
                  <div className="flip-box-front style-two">
                    <div className="front-price">
                      <p>From $90/night</p>
                    </div>
                    <div className="flip-single-box">
                      <div className="box-title">
                        <h3>Superior Rooms</h3>
                        <span>38m2/2 beds/1 bathroom</span>
                      </div>
                    </div>
                  </div>
                  <div className="flip-box-back">
                    <div className="flip-title">
                      <h2>Superior Rooms</h2>
                    </div>
                    <div className="des">
                      <p>Architecture viverra tristique ustoni an missten vitae diam neque nivamus the aestan the atene artines arinianu ateli ine finibus viverra nec lacus.</p>
                      <a href="#">Book Now</a>
                    </div>
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
   
   export default Roomssuits;