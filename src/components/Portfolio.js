import { Container } from "@mui/material";
import "./Portfolio.css";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Search from "../images/image.png";
import Cart from "../images/cartimage.png";
import Bitcoin from "../images/bitcoin.png";
import Interes from "../images/interes.png";
import Poke from "../images/poke.png";

const Portfolio = () => {
  return (
    <div className="container-main">
      <Container>
        <div className="container-port">
          <h1 className="title-port">Portfolio</h1>
          <h1 className="title-main">Proyectos</h1>
          <Box marginLeft={25} marginTop={10} marginBottom={10}>
            <Grid container rowSpacing={3}>
              <Grid item xs={5}>
                <a>
                  <div className="card-search">
                    <img src={Search} />
                    <div className="center-sub">
                      <h5 className="subtitulo">React.js</h5>
                      <h2 className="titulos">Buscador de Imagenes</h2>
                    </div>
                  </div>
                </a>
              </Grid>
              <Grid item xs={5}>
                <a>
                  <div className="card-cart">
                    <img src={Cart} />
                    <div className="center-sub">
                      <h5 className="subtitulo">React.js</h5>
                      <h2 className="titulos">Carrito de Compras</h2>
                    </div>
                  </div>
                </a>
              </Grid>
              <Grid item xs={5}>
                <a
                  href="https://juanib12.github.io/money-dashboard/"
                  target="_blank"
                >
                  <div className="card-bitcoin">
                    <img src={Bitcoin} />
                    <div className="center-sub">
                      <h5 className="subtitulo">React.js</h5>
                      <h2 className="titulos">Conversor de Criptomonedas</h2>
                    </div>
                  </div>
                </a>
              </Grid>
              <Grid item xs={5}>
                <a href="https://juanib12.github.io/interescompuesto/" target="_blank">
                  <div className="card-interes">
                    <img src={Interes} />
                    <div className="center-sub">
                      <h5 className="subtitulo">React.js</h5>
                      <h2 className="titulos">Interes Compuesto</h2>
                    </div>
                  </div>
                </a>
              </Grid>
              <Grid item xs={5}>
                <a>
                  <div className="card-poke">
                    <img src={Poke} />
                    <div className="center-sub">
                      <h5 className="subtitulo">React.js</h5>
                      <h2 className="titulos">API Pokemon</h2>
                    </div>
                  </div>
                </a>
              </Grid>
            </Grid>
          </Box>
        </div>
      </Container>
    </div>
  );
};

export default Portfolio;
