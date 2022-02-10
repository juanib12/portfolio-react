import { Container, Divider } from "@mui/material";
import "./About.css";

const About = () => {
  return (
    <div className="container-about">
      <Container>
        <div className="center-about">
          <h5 className="title-about2">Sobre Mí</h5>
          <h1 className="title-about">Web Developer</h1>
          <p className="parrafo-about">
            soy un parrafosoy un parrafosoy un parrafosoy un parrafosoy un
            parrafosoy un parrafo soy un parrafosoy un parrafosoy un parrafosoy
            un parrafosoy un
          </p>
        </div>
        <div className="row">
          <div className="card">
            <div className="circle">
              <i class="bx bxs-briefcase center-item"></i>
            </div>
            <h2>1</h2>
            <p>Años de experiencia</p>
          </div>
          <div className="card-2">
            <div className="circle">
              <i class="bx bxs-check-square center-item"></i>
            </div>
            <h2>7+</h2>
            <p>Proyectos realizados</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
