

import './App.css';


import Home from './Home';
import { Routes, Route } from "react-router-dom"
import Blog from './Blog';
import About_page from './About_page';
import Contact from './Contact';
import Rooms from './Rooms';
import Our_service from './Our_service';
import Rastaurant from './Rastaurant';


function App() {
  return (
    <>


    <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="Blog" element={ <Blog/> } />
        <Route path="About_page" element={ <About_page/> } />
        <Route path="Contact" element={ <Contact/> } />
        <Route path="Rooms" element={ <Rooms/> } />
        <Route path="Our_service" element={ <Our_service/> } />
        <Route path="Rastaurant" element={ <Rastaurant/> } />
      </Routes>
    </>
    );
}

export default App;
