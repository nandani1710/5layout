import './App.css';
import Booking from './Booking';
import Brand from './Brand';

import Footer from './Footer';
import Header from './Header';
import R_banner from './ROOMS/R_banner';
import Roomssuits from './Roomssuits';
import Services from './Services';


function Rooms() {
  return (
    <section>
      <Header />
     <R_banner/>
      <Roomssuits/>
      <Services/>
      <Booking/>
      <Brand/>
      <Footer/>
    </section>
  );
}

export default Rooms;