import { Nav, NavDropdown, Navbar} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import pages from '../pagesList.js'
import Resume from '../resume/resume.pdf'

export default function NavBar() {
  let returnedLinks = [];
  let link = '';
  let name = ''
  pages.forEach(element => {
    link = "/" + element.name.toLowerCase();
    if (link === '/home') {
      link = "/"
    }
    name = element.name
    if (name.toLowerCase() !== "resume") {
      returnedLinks.push(<Nav.Link href={link}>{element.name}</Nav.Link>)
    } 
    else {
      returnedLinks.push(<Nav.Link href={Resume}>{element.name}</Nav.Link>)
    } 
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