import './App.css';
import { Container, Button } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
function Header() {
  return (
    <section>

      <header>
        <Container>
          <Navbar expand="lg" >
            <img src={require(`./image/logo.png`)}></img>
            <Navbar.Brand href="#home">

            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="m-auto">
                <Link to="/"> <Nav.Link href="#home" className='main-menu' >Home</Nav.Link></Link>
                <Link to="/About_page"> <Nav.Link href="#link" className='main-menu'>About</Nav.Link></Link>



                <Link to="/Rooms"><NavDropdown title="Rooms & suits" id="basic-nav-dropdown" className='main-menu'>
                  <Link to="/Rooms"> <NavDropdown.Item href="#action/3.1">Rooms 01</NavDropdown.Item></Link>
                  <Link to="/Rooms"><NavDropdown.Item href="#action/3.1">Rooms 02</NavDropdown.Item></Link>
                  <NavDropdown.Item href="#action/3.1">Single Room</NavDropdown.Item>
                </NavDropdown>
                </Link>
                <Link to="/Pages"><NavDropdown title="Pages" id="basic-nav-dropdown" className='main-menu'>
                  <Link to="/About_page"><NavDropdown.Item href="#action/3.1">about us </NavDropdown.Item></Link>
                  <Link to="/Our_service"> <NavDropdown.Item href="#action/3.1">Our services</NavDropdown.Item></Link>
                  <Link to="/Rooms"> <NavDropdown.Item href="#action/3.1">Rooms 01</NavDropdown.Item></Link>
                  <Link to="/Rooms"><NavDropdown.Item href="#action/3.1">Rooms 02</NavDropdown.Item></Link>
                  <Link to="/Rooms"> <NavDropdown.Item href="#action/3.1">Single Room</NavDropdown.Item></Link>
                  <Link to="/Rastaurant"><NavDropdown.Item href="#action/3.1">Restaurant</NavDropdown.Item></Link>
                  <NavDropdown.Item href="#action/3.1">SPA</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">SPA FAQ</NavDropdown.Item>


                </NavDropdown>
                </Link>
                <Link to="/Blog"><NavDropdown title="Blogs" id="basic-nav-dropdown" className='main-menu'>
                  <NavDropdown.Item href="#action/3.1">Blog Grid</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">Blog list</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">Blog 2 Column</NavDropdown.Item>

                </NavDropdown>
                </Link>
                <Link to="/Contact"><Nav.Link href="#link" className='main-menu'>Contact</Nav.Link></Link>
              </Nav>
            </Navbar.Collapse>
            <Nav.Link href="#link" className='main-menu  d-lg-block  d-none  px-3'><Button className='banner-btn' >get a quote</Button></Nav.Link>
          </Navbar>

        </Container>
      </header>
    </section>

  );
}

export default Header;