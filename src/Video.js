import './App.css';
import { FaPlay } from "react-icons/fa";
function Video() {
     return (
    <section>
      {/* video */}
      <div class="luxury-video-section">
        <div class="bg-video-wrap">
          <video src="https://designsupply-web.com/samplecontent/vender/codepen/20181014.mp4" loop muted autoplay>
          </video>
          <div class="overlay">
            <div class="luxury-video">
              <div class="video-icon">
                <a href="https://www.youtube.com/watch?v=Wx48y_fOfiY"><i ><FaPlay ></FaPlay ></i></a>
              </div>
            </div>
          </div>
          <h4>MEETING & EVENTS</h4>
          <h1>A Warm, Exquisite, Practical And Urban Space.</h1>
          <div class="luxury-video-button">
            <a href="#">Book Now </a>
          </div>
        </div>
      </div>

    </section>
     );
   }
   
   export default Video;