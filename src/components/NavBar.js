import { Link } from "react-router-dom";
import "./NavBar.css";
import { NavbarBrand } from "reactstrap";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
import { Container, Button } from "@mui/material";
import Imagen from "../images/Web Developer_Monochromatic.svg";
import Imagen2 from "../images/Web Developer_Two Color.svg";
import Portfolio from "./Portfolio";
import { styled } from "@mui/material/styles";
import { orange } from "@mui/material/colors";

const ColorButton = styled(Button)(({ theme }) => ({
  backgroundColor: orange[700],
  '&:hover': {
    backgroundColor: orange[500],
  },
}));

const NavBar = () => {
  return (
    <div>
      <div className="container" id="home">
        <NavbarBrand className="logo" tag={Link} to="/">
          Juan Bianco
        </NavbarBrand>
        <nav className="navbar">
          <div className="center">
            <a className="navLinks" href="#home">
              Inicio
            </a>
            <a className="navLinks" href="#about">
              Sobre Mí
            </a>
            <a className="navLinks" href="#skills">
              Habilidades
            </a>
            <a className="navLinks" href="#portfolio">
              Portfolio
            </a>
            <a className="navButton" href="#contact">
              CONTACT
            </a>
          </div>
        </nav>
      </div>

      <div>
        <Container className="container-home">
          <div>
            <h5 className="title-name">Juan Ignacio Bianco</h5>
            <h1 className="title">Web Developer</h1>
            <p className="parrafo">
              soy un parrafosoy un parrafosoy un parrafosoy un parrafosoy un
              parrafosoy un parrafo soy un parrafosoy un parrafosoy un
              parrafosoy un parrafosoy un
            </p>
            <ColorButton variant="contained" className="btn-primary" href="#about">
              Comenzar
            </ColorButton>
          </div>
          <div className="max">
            <div className="rectangle">
              <div className="rectangle-img">
                <img className="img" src={Imagen} />
                <img className="img2" src={Imagen2} />
              </div>
            </div>
          </div>
        </Container>
      </div>

      <section id="about">
          <About />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="portfolio">
        <Portfolio />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default NavBar;
