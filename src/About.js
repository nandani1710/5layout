import './App.css';
import { Row, Col, Container } from 'react-bootstrap';
import { TbWorld } from "react-icons/tb";
import { LuWarehouse } from "react-icons/lu";
function About() {
     return (
    <section>
      {/* about area */}
      <div class="about-area">
        <Container>
          <Row>
            <Col className="col-lg-6 ">
              <div className="about-thumb ">
                <img src={require(`./image/about.png`)}></img>
              </div>
            </Col>
            <div className="col-lg-6">
              <div className="section-title">
                <div className="sub-title">
                  <h5>THE BEST LUXURY HOTEL</h5>
                </div>
                <div className="main-title">
                  <h2>Find the right Apartment  Hotel & Resort for you</h2>
                </div>
                <div className="section-discription">
                  <p>Over 39,000 people work for us in more than 70 countries all over the This breadth of global coverage, combined with specialist services</p>
                </div>
              </div>
              <div className="about-icon-box">
                <div className="about-icon">
                  <i ><TbWorld ></TbWorld ></i>
                </div>
                <div className="about-title">
                  <h2>5 Star Hotel In World</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                </div>
              </div>
              <div className="about-icon-box">
                <div className="about-icon">
                  <i ><LuWarehouse ></LuWarehouse ></i>
                </div>
                <div className="about-title">
                  <h2>Best Environment</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </div>
      
    </section>
     );
   }
   
   export default About;