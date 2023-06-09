import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logoNJ.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from '../assets/img/github-removebg-preview.png';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <br />
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img id="logoF" src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/nicolas-juarez95/" target="_blank"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/Nicojuarez95" target="_blank"><img src={navIcon4} alt="" /></a>
              <a href="https://www.facebook.com/NicoJuarezOk" target="_blank"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/nicojuarez95/" target="_blank"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Portafolio personal 2023</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
