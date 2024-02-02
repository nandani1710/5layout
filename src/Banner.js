import './App.css';
import { Row, Col, Container } from 'react-bootstrap';
import React from 'react';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const obj = {
     responsive: {
          0: {
               items: 1,
          },
          600: {
               items: 1,
          },
          1000: {
               items: 1,
          }
     }
}
function Banner() {
     return (
          <section>


               <OwlCarousel className='owl-theme' loop margin={10} nav {...obj} dots={false}>
                    <div className='item'>
                         <div className='slider-area d-flex align-items-center'>
                              <Container>
                                   <Row>
                                        <Col>
                                             <div className='slider-content'>
                                                  <div className='slider-title'>
                                                       <h5>this is luxury hotel</h5>
                                                       <h1>Superior hotel in world</h1>
                                                  </div>
                                                  <div className='slider-discription'>
                                                       <p>Completely exploit bleeding-edge web-readiness for diverse interfaces. Distinctively matrix visionary technologies rather than resource</p>
                                                  </div>
                                                  <div className='slider-button'>
                                                       <a>Rooms & suits</a>
                                                  </div>
                                             </div>
                                        </Col>
                                   </Row>
                              </Container>
                         </div>
                    </div>
               </OwlCarousel>


              
          </section>
     );
}

export default Banner;