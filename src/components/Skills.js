import { Container } from "@mui/material";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="container-skills">
      <Container>
        <div className="center-skills">
          <h5 className="title-skills">Habilidades</h5>
        </div>
        <div className="div-skills">
          <h1>Front End</h1>
          <div className="row">
            <div className="card-skills">
              <i class="bx bxl-react item-react"></i>
              <h2>React.js</h2>
            </div>
            <div className="card-skills">
              <i class="bx bxl-html5 item-html"></i>
              <h2>HTML</h2>
            </div>
            <div className="card-skills">
              <i class="bx bxl-css3 item-css"></i>
              <h2>CSS</h2>
            </div>
            <div className="card-skills">
              <i class="bx bxs-file-js item-js"></i>
              <h2>JS</h2>
            </div>
          </div>
        </div>
        <div className="div-skills">
          <h1>Back End</h1>
          <div className="row">
            <div className="card-skills">
              <h1>C#</h1>
            </div>
            <div className="card-skills">
              <i class="bx bxl-nodejs item-node"></i>
              <h2>Node.js</h2>
            </div>
            <div className="card-skills">
              <h1>.NET</h1>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Skills;
