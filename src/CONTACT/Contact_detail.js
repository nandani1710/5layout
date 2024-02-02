
import '../App.css';

function Contact_detail() {
     return (
          <section>
               <div class="luxury-contact-area">
                    <div class="container">
                         <div class="row">
                              <div class="col-lg-6">
                                   <div class="single-contact">
                                        <div class="contact-title">
                                             <h3>Feel free to write on example@gmail.com</h3>
                                        </div>
                                        <div class="contact-discription">
                                             <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                                        </div>
                                   </div>
                                   <div class="single-contact upper">
                                        <div class="contact-title">
                                             <h3>Call us +31 555 777 83</h3>
                                        </div>
                                        <div class="contact-discription">
                                             <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                                        </div>
                                   </div>
                                   <div class="single-contact">
                                        <div class="contact-title upper">
                                             <h3>Visit us on Via Venti Settembre, Canada</h3>
                                        </div>
                                        <div class="contact-discription">
                                             <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                                        </div>
                                   </div>
                                   <div class="google-map">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7496149.95373021!2d85.84621250756469!3d23.452185887261447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adaaed80e18ba7%3A0xf2d28e0c4e1fc6b!2sBangladesh!5e0!3m2!1sen!2sbd!4v1635150422284!5m2!1sen!2sbd" width="1920" height="300" allowfullscreen="" loading="lazy"></iframe>
                                   </div>
                              </div>
                              <div class="col-lg-6">
                                   <div class="contact-form">
                                        <div class="single-contact">
                                             <div class="contact-title">
                                                  <h3>Get In Touch</h3>
                                             </div>
                                             <div class="contact-discription">
                                                  <p>Maecenas consectetur, diam nec posuere aliquam, libero sapien aliquet lacus, tempus cursus odio dolor ac magna. Nam condimentum nulla et tortor ultrices tempor. Duis ac nisi mattis, vehicula augue id aliquet.</p>
                                             </div>
                                        </div>
                                        <form action="https://formspree.io/f/myyleorq" method="POST" id="dreamit-form">
                                             <div class="row">
                                                  <div class="col-lg-12 col-md-6">
                                                       <div class="form_box">
                                                            <input type="text" name="Your name" placeholder="Your name"></input>
                                                       </div>
                                                  </div>
                                                  <div class="col-lg-12 col-md-6">
                                                       <div class="form_box">
                                                            <input type="text" name="your email" placeholder="Your Email"></input>
                                                       </div>
                                                  </div>
                                                  <div class="col-lg-12 col-md-12">
                                                       <div class="form_box">
                                                            <input type="text" name="Subject" placeholder="Subject"></input>
                                                       </div>
                                                  </div>
                                                  <div class="col-lg-12 col-md-12">
                                                       <div class="form_box">
                                                            <textarea name="massage" id="massage" cols="30" rows="10" placeholder="Your Massage"></textarea>
                                                       </div>
                                                       <div class="form-button">
                                                            <button type="submit">Send Message</button>
                                                       </div>
                                                  </div>
                                             </div>
                                        </form>
                                        <div id="status"></div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     );
}

export default Contact_detail;