import './App.css';


import Footer from './Footer';
import Header from './Header';
import A_banner from './ABOUT/A_banner';
import About_services from './ABOUT/About_servies';
import Services from './Services'
import Facilities from './Facilities'
import Testimonial from './Testimonial'
import Brand from './Brand'

function Rooms() {
  return (
    <section>
      <Header />
     <A_banner/>
     <About_services/>
     <Services/>
     <Facilities/>
     <Testimonial/>
     <Brand/>
      <Footer/>
    </section>
  );
}

export default Rooms;