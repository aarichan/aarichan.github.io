/**
 * navbar.js
 * By: Aaric Han
 * 
 * Created: 04/26/21
 * Last Modified: 04/30/21
 */


import { Nav, Navbar} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import pages from '../pagesList.js'
import { scroller } from "react-scroll";

export default function NavBar() {
  let returnedLinks = [];
  let link = '';
  pages.forEach(element => {
    link = "/" + element.name.toLowerCase();
    if (link === '/home') {
      link = "/"
    }
      returnedLinks.push(
      <Nav.Link
        onClick={() => scroller.scrollTo(""+element.name, {
          smooth: true,
          offset: 0,
          duration: 800,
          isDynamic: true,
        })}
      >
        {element.name}
      </Nav.Link>)
  });

  return (
    <Navbar collapseOnSelect fixed="top" expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="/">Aaric Han</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ml-auto">
        {returnedLinks}
      </Nav>
    </Navbar.Collapse>
    </Navbar>
  )
}