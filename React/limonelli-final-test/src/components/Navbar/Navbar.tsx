import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { TabContainer } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function CustomNavbar() {
  return (
    <>
      <Navbar bg="dark" variant="dark" fixed='top'>
        <TabContainer>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="classes">Classes</Nav.Link>
            <Nav.Link href="monsters">Monsters</Nav.Link>
            <Nav.Link href="races">Races</Nav.Link>
          </Nav>
        </TabContainer>
      </Navbar>
    </>
  );
}
export default CustomNavbar;