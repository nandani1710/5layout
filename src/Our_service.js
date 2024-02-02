import './App.css';
import Brand from './Brand';
import Facilities from './Facilities';
import Footer from './Footer';
import Header from './Header';
import O_banner from './OUR_SERVICES/O_banner';
import Services from './Services';
import Testimonial from './Testimonial';


function Our_service() {
     return (
          <section>
               <Header/>
               <O_banner/>
               <Services/>
               <Facilities/>
               <Testimonial/>
               <Brand/>
               <Footer/>
          </section>
     );
}

export default Our_service;
