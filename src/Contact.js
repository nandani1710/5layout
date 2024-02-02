import './App.css';
import Contact_detail from './CONTACT/Contact_detail';
import C_banner from './CONTACT/C_banner';
import Footer from './Footer';
import Header from './Header';
function Contact() {
     return (
      <section>
        <Header/>
    <C_banner/>
    <Contact_detail/>
    <Footer/>
        </section>
     );
   }
   
   export default Contact;
