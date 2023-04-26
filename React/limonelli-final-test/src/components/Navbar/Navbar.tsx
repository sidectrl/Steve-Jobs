import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { TabContainer } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.png';

function CustomNavbar() {
  return (
    <>
      <Navbar bg="dark" variant="dark" fixed='top'>
        <TabContainer>
        <img
        style={{width: '100px'}}
              src={logo}
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/classes">Classes</Nav.Link>
            <Nav.Link href="/monsters">Monsters</Nav.Link>
            <Nav.Link href="/races">Races</Nav.Link>
            <Nav.Link href="/traits">Traits</Nav.Link>
          </Nav>
        </TabContainer>
      </Navbar>
    </>
  );
}
export default CustomNavbar;