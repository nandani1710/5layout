// import logo from './logo.svg';

import './App.css';

import Footer from './Footer';
import Header from './Header';
// import Home from './Home';

import Banner from './Banner';
import About from './About';
import Roomssuits from './Roomssuits';
import Facilities from './Facilities';
// import Video from './Video';
import Hotelbook from './Hotelbook';
import Booking from './Booking';
import Brand from './Brand';
import News from './News';
import Services from './Services';
import Testimonial from './Testimonial';


function Home() {
  return (
    <>
    <Header/>
    <Banner/>
  
    <About/>
    <Roomssuits/>
    <Facilities/>
    {/* <Video/> */}
    <Hotelbook/>
    <Services/>
    <Testimonial/>
    <News/>
   <Booking/>
    <Brand/>
    <Footer/>


    </>
    );
}

export default Home;
