
import JS from "../images/javascript.png";
import html from "../images/html.png";
import css from "../images/css.png";
import node from "../images/node.png";
import mysql from "../images/mysql.png";
import gh from "../images/gh.png";
import tailwind from "../images/tailwind.png";
import react from "../images/reactlogo.png";
import mongo from "../images/mongodb.png";
import AboutImage from "../images/aboutme.png";

const About = () => {
  return (
    <div className="relative -top-[20px] bg-base-300 bg-opacity-40" id="about">
      <div class="py-16 bg-transparent">
        <div class="container px-6 text-gray-600 md:px-12 xl:px-6">
          <div class="m-auto text-center md:w-8/12 lg:w-6/12 bg-sky-400 bg-opacity-10 p-4 rounded-[7px]">
            <h2 class="text-2xl text-white font-bold md:text-4xl">Sobre mí 🧍‍♂️</h2>
          </div>
          <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12 top-[100px] relative mb-[100px]">
            <div class=" lg:w-[600px] relative left-[150px]">
              <img
                src={AboutImage}
                alt="image"
                loading="lazy"
                width="300px"
                className="drop-shadow-2xl celu:relative celu:ml-[-150px]"
              />
            </div>
            <div class="md:7/12 lg:w-6/12 bg-gray-800 p-12 rounded-[20px] border-none shadow-lg">
              <h2 class="text-2xl text-sky-400 font-bold md:text-4xl">
                ¿Quién soy?
              </h2>
              <p class="mt-6 text-gray-500">
                Mi nombre es Juan Ignacio Bianco, tengo 20 años y actualmente me encuentro en mi ultimo año
                en la Universidad Tecnológica Nacional, la carrera Tecnicatura Universitaria en Programación. Además
                estoy formandome de manera autodidacta, sobre todo lo relacionado al desarrollo web tanto frontend como backend y
                he realizado varios cursos sobre React.JS y Node.JS en la plataforma Udemy.
              </p>
              <p class="mt-4 text-gray-500">
                Además de estudiar e informarme sobre el mundo IT, me gusta
                escuchar y crear música mientras disfruto de un café ☕.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="relative py-20 flex flex-col items-center bg-cyan-900 overflow-hidden md:py-40">
        <div class="relative z-[1] container m-auto px-6 md:px-12">
          <div class="m-auto text-center md:w-8/12 lg:w-6/12">
            <h2 class="text-2xl text-white font-bold md:text-4xl">
              Herramientas y <span class="text-sky-400">tecnologías</span> que
              actualmente utilizo!
            </h2>
          </div>
          <div class="m-auto mt-16 ">
            <div class="flex flex-wrap justify-center gap-6 w-auto">
              <div class="group py-2 px-4 border border-opacity-10 rounded-xl hover:bg-gray-800">
                <img
                  src={JS}
                  class="transition group-hover:contrast-100"
                  loading="lazy"
                  alt="logo airbnb"
                />
              </div>
              <div class="group py-2 px-4 border border-opacity-10 rounded-xl hover:bg-gray-800">
                <img
                  src={html}
                  class="transition group-hover:contrast-100"
                  loading="lazy"
                  alt="logo microsoft"
                />
              </div>
              <div class="group py-2 px-4 border border-opacity-10 rounded-xl  hover:bg-gray-800">
                <img
                  src={css}
                  class=" transition group-hover:contrast-100"
                  loading="lazy"
                  alt="logo ge"
                />
              </div>
              <div class="group py-2 px-4 border border-opacity-10 rounded-xl hover:bg-gray-800">
                <img
                  src={node}
                  class=" transition group-hover:contrast-100"
                  loading="lazy"
                  alt="logo bissell"
                />
              </div>
              <div class="group py-2 px-4 border border-opacity-10 rounded-xl hover:bg-gray-800">
                <img
                  src={mysql}
                  class=" transition group-hover:contrast-100"
                  loading="lazy"
                  alt="logo bissell"
                />
              </div>
              <div class="group py-2 px-4 border border-opacity-10 rounded-xl hover:bg-gray-800">
                <img
                  src={gh}
                  class=" transition group-hover:contrast-100"
                  loading="lazy"
                  alt="logo automatic"
                />
              </div>
              <div class="group py-2 px-4 border border-opacity-10 rounded-xl hover:bg-gray-800">
                <img
                  src={tailwind}
                  class=" transition group-hover:contrast-100"
                  loading="lazy"
                  alt="logo automatic"
                />
              </div>
              <div class="group py-2 px-4 border border-opacity-10 rounded-xl  hover:bg-gray-800">
                <img
                  src={react}
                  class=" transition group-hover:contrast-100"
                  loading="lazy"
                  alt="logo automatic"
                />
              </div>
              <div class="group py-2 px-4 border border-opacity-10 rounded-xl  hover:bg-gray-800">
                <img
                  src={mongo}
                  class=" transition group-hover:contrast-100"
                  loading="lazy"
                  alt="logo automatic"
                />
              </div>
            </div>
          </div>
          <div class="m-auto text-center bg-gray-800 md:w-8/12 lg:w-6/12 p-4 rounded-[7px] relative top-[50px]">
            <p class="text-lg text-gray-300 italic">Además de estas tecnologías también he aprendido y utilizado
            <span className="text-sky-400"> C# - C++ - C - .NET Framework - .NET Core - SQL Server.</span>
            </p>
          </div>
        </div>

        <div
          aria-hidden="true"
          class="absolute h-full inset-0 flex items-center"
        >
          <div
            aria-hidden="true"
            class="bg-layers bg-scale w-56 h-56 m-auto blur-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full md:w-[30rem] md:h-[30rem] md:blur-3xl"
          ></div>
        </div>
        <div
          aria-hidden="true"
          class="absolute inset-0 w-full h-full bg-[#020314] opacity-90"
        ></div>
      </div>
    </div>
  );
};

export default About;
