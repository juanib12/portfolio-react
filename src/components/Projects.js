import Animadle from "../images/animadle.png";
import ReactChiquito from "../images/reactchiquito.png";
import Mui from "../images/mui.png";
import Tood from '../images/tood.png'
import Firebase from '../images/firebase.png'
import Movie from '../images/movie.png'
import Styled from '../images/styled.png'
import Rick from '../images/rick.png'
import Techfix from '../images/techfixapp.png'
import Node from "../images/node.png";
import Mongo from '../images/mongodbicon.png'

const Projects = () => {
  return (
    <div className="container top-36 relative mb-36" id="projects">
      <div class="m-auto text-center md:w-8/12 lg:w-6/12 mb-20 bg-blue-400 bg-opacity-10 p-4 rounded-[7px]">
        <h2 class="text-2xl text-white font-bold md:text-4xl">Proyectos</h2>
      </div>
      <div className="py-16 bg-transparent relative top-[-50px]">
        <div className="container m-auto px-6 text-gray-500 md:px-12 xl:px-12">
          <div className="mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-3">
            <div class="card bg-base-100 shadow-xl image-full">
              <figure>
                <img src={Animadle} alt="Shoes" />
              </figure>
              <div class="card-body">
                <h2 class="card-title">ANIMADLE</h2>
                <p>
                  Un juego donde bla bla bla bla bla bla bla bla bla bla bla bla
                  bla bla bla bla bla
                </p>
                <p className="relative -top-16 w-40 max-h-8 pl-4 pt-1 rounded-lg text-white bg-black">Stack tecnológico</p>
                <div className="relative flex flex-row space-x-2 items-center">
                  <img
                    src={ReactChiquito}
                    width="60px"
                    className="relative -top-16"
                  />
                  <img src={Mui} width="60px" className="relative -top-16" />
                </div>

                <div class="card-actions justify-end">
                  <a href="https://animadle.vercel.app/" target="__blank">
                  <button class="btn btn-primary">Ver más</button>
                  </a>
                </div>
              </div>
            </div>
            <div class="card bg-base-100 shadow-xl image-full">
              <figure>
                <img src={Tood} alt="Shoes" />
              </figure>
              <div class="card-body">
                <h2 class="card-title">TOOD NOTES</h2>
                <p>
                  Un juego donde bla bla bla bla bla bla bla bla bla bla bla bla
                  bla bla bla bla bla
                </p>
                <p className="relative -top-16 w-40 max-h-8 pl-4 pt-1 rounded-lg text-white bg-black">Stack tecnológico</p>
                <div className="relative flex flex-row space-x-2 items-center">
                  <img
                    src={ReactChiquito}
                    width="60px"
                    className="relative -top-16"
                  />
                  <img src={Mui} width="60px" className="relative -top-16" />
                  <img src={Firebase} width="60px" className="relative -top-16" />
                </div>

                <div class="card-actions justify-end">
                  <a href="https://toodnotes.vercel.app/" target="__blank">
                  <button class="btn btn-primary">Ver más</button>
                  </a>
                </div>
              </div>
            </div>
            <div class="card bg-base-100 shadow-xl image-full">
              <figure>
                <img src={Animadle} alt="Shoes" />
              </figure>
              <div class="card-body">
                <h2 class="card-title">BITCOIN</h2>
                <p>
                  Un juego donde bla bla bla bla bla bla bla bla bla bla bla bla
                  bla bla bla bla bla
                </p>
                <p className="relative -top-16 w-40 max-h-8 pl-4 pt-1 rounded-lg text-white bg-black">Stack tecnológico</p>
                <div className="relative flex flex-row space-x-2 items-center">
                  <img
                    src={ReactChiquito}
                    width="60px"
                    className="relative -top-16"
                  />
                  <img src={Mui} width="60px" className="relative -top-16" />
                </div>

                <div class="card-actions justify-end">
                  <button class="btn btn-primary">Ver más</button>
                </div>
              </div>
            </div>
            <div class="card bg-base-100 shadow-xl image-full">
              <figure>
                <img src={Movie} alt="Shoes" />
              </figure>
              <div class="card-body">
                <h2 class="card-title">MOVIE APP</h2>
                <p>
                  Un juego donde bla bla bla bla bla bla bla bla bla bla bla bla
                  bla bla bla bla bla
                </p>
                <p className="relative -top-16 w-40 max-h-8 pl-4 pt-1 rounded-lg text-white bg-black">Stack tecnológico</p>
                <div className="relative flex flex-row space-x-2 items-center">
                  <img
                    src={ReactChiquito}
                    width="60px"
                    className="relative -top-16"
                  />
                  <img src={Mui} width="60px" className="relative -top-16" />
                </div>

                <div class="card-actions justify-end">
                  <button class="btn btn-primary">Ver más</button>
                </div>
              </div>
            </div>
            <div class="card bg-base-100 shadow-xl image-full">
              <figure>
                <img src={Rick} alt="Shoes" />
              </figure>
              <div class="card-body">
                <h2 class="card-title">RICK AND MORTY API</h2>
                <p>
                  Un juego donde bla bla bla bla bla bla bla bla bla bla bla bla
                  bla bla bla bla bla
                </p>
                <p className="relative -top-16 w-40 max-h-8 pl-4 pt-1 rounded-lg text-white bg-black">Stack tecnológico</p>
                <div className="relative flex flex-row space-x-2 items-center">
                  <img
                    src={ReactChiquito}
                    width="60px"
                    className="relative -top-16"
                  />
                  <img src={Mui} width="60px" className="relative -top-16" />
                  <img src={Styled} width="60px" className="relative -top-16" />
                </div>

                <div class="card-actions justify-end">
                  <button class="btn btn-primary">Ver más</button>
                </div>
              </div>
            </div>
            <div class="card bg-base-100 shadow-xl image-full h-[391.33px]">
              <figure>
                <img src={Techfix} alt="Shoes" />
              </figure>
              <div class="card-body">
                <h2 class="card-title">TECHFIX</h2>
                <p>
                  Un juego donde bla bla bla bla bla bla bla bla bla bla bla bla
                  bla bla bla bla bla
                </p>
                <p className="relative -top-16 w-40 max-h-8 pl-4 pt-1 rounded-lg text-white bg-black">Stack tecnológico</p>
                <div className="relative flex flex-row space-x-2 items-center">
                  <img
                    src={ReactChiquito}
                    width="60px"
                    className="relative -top-16"
                  />
                  <img src={Mui} width="60px" className="relative -top-16" />
                  <img src={Node} width="60px" className="relative -top-16" />
                  <img src={Mongo} width="60px" className="relative -top-16" />
                </div>

                <div class="card-actions justify-end">
                  <a href="https://techfix-demo.vercel.app/" target="__blank">
                  <button class="btn btn-primary">Ver más</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
