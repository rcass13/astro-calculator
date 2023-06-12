import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../assets/images/logo.png"

function Header() {
  return (
    <Navbar bg="primary" expand="lg">
      <Container>
      <Navbar.Brand href="/">
          <img src={logo} alt="Logo" style={{ height: "50px", marginRight: "10px" }}/> Explorot
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="astroTarotCalc">Astrology Tarot Chart</Nav.Link>
            <Nav.Link href="personalityCard">Personality Card</Nav.Link>
            <Nav.Link href="cardMeanings">Card Meanings</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://github.com/rcass13">
                Creator's GitHub
              </NavDropdown.Item>
              <NavDropdown.Item href="https://rose-cassidy-react-portfolio.herokuapp.com/#home">
                Creator's Portfolio
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
