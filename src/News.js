import './App.css';
import React from 'react';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const img = {
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
function News() {
     return (
    <section>
     <div class="blog-area">
        <div class="container">
          <div class="row">
            <div class="section-title">
              <div class="main-title">
                <h2>News & Offers</h2>
              </div>
              <div class="section-discription">
                <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
              </div>
            </div>
          </div>
          <OwlCarousel className='owl-theme blog' loop margin={10} dots={false} {...img}>
            <div className='item'>

              <div class="col-lg-12">
                <div class="single-blog">
                  <div class="blog-thumb">
                    <img src={require(`./image/b1.jpeg`)}></img>
                  </div>
                  <div class="blog-content">
                    <div class="blog-title">
                      <span>December 20, 2023</span>
                      <a href="#">Comment (5)</a>
                    </div>
                    <div class="blog-titles">
                      <h2><a href="blog-details.html">A Night in Norway</a></h2>
                    </div>
                    <div class="blog-discription">
                      <p>Quisque pretium fermentum quam, sit amet cursus ante sollicitudin </p>
                    </div>
                  </div>
                  <div class="blog-button">
                    <a href="#">Read More <i ></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div className='item'>

              <div class="col-lg-12">
                <div class="single-blog">
                  <div class="blog-thumb">
                    <img src={require(`./image/b2.jpeg`)}></img>
                  </div>
                  <div class="blog-content">
                    <div class="blog-title">
                      <span>December 20, 2023</span>
                      <a href="#">Comment (5)</a>
                    </div>
                    <div class="blog-titles">
                      <h2><a href="blog-details.html">A Night in Norway</a></h2>
                    </div>
                    <div class="blog-discription">
                      <p>Quisque pretium fermentum quam, sit amet cursus ante sollicitudin </p>
                    </div>
                  </div>
                  <div class="blog-button">
                    <a href="#">Read More <i ></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div className='item'>

              <div class="col-lg-12">
                <div class="single-blog">
                  <div class="blog-thumb">
                    <img src={require(`./image/b3.jpeg`)}></img>
                  </div>
                  <div class="blog-content">
                    <div class="blog-title">
                      <span>December 20, 2023</span>
                      <a href="#">Comment (5)</a>
                    </div>
                    <div class="blog-titles">
                      <h2><a href="blog-details.html">A Night in Norway</a></h2>
                    </div>
                    <div class="blog-discription">
                      <p>Quisque pretium fermentum quam, sit amet cursus ante sollicitudin </p>
                    </div>
                  </div>
                  <div class="blog-button">
                    <a href="#">Read More <i ></i></a>
                  </div>
                </div>
              </div>
            </div>
          </OwlCarousel >
        </div >
      </div >

    </section>
     );
   }
   
   export default News;