import './App.css';
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const brand = {
     responsive: {
          0: {
               items: 1,
          },
          600: {
               items: 2,
          },
          1000: {
               items: 4,
          }
     }
}
function Brand() {
     return (
          <section>
               {/* brand area */}

               <OwlCarousel className='owl-theme brand-area' loop margin={10} nav={false} dots={false} {...brand}>
                    <div class='item'>
                         <img src={require(`./image/brand1.png`)}></img>
                    </div>
                    <div class='item'>
                         <img src={require(`./image/brand2.png`)}></img>

                    </div>
                    <div class='item'>
                         <img src={require(`./image/brand3.png`)}></img>

                    </div>
                    <div class='item'>
                         <img src={require(`./image/brand4.png`)}></img>

                    </div>
                    <div class='item'>
                         <img src={require(`./image/brand5.png`)}></img>

                    </div>


               </OwlCarousel>;
          </section>
     );
}

export default Brand;