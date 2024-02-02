import './App.css';
import Brand from './Brand';


import Footer from './Footer';
import Header from './Header';
import Hotelbook from './Hotelbook';
import Ras_banner from './RASTAURANT/Ras_banner';


function Rastaurant() {
     return (
          <section>
               <Header />
               <Ras_banner />
               <Hotelbook/>

               <Brand />
               <Footer />
          </section>
     );
}

export default Rastaurant;
