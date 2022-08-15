import Developer from "../images/developer.png";
import Customer from "../images/customer.png";
import JS from "../images/javascript.png";
import html from "../images/html.png";
import css from "../images/css.png";
import node from "../images/node.png";
import mysql from "../images/mysql.png";
import gh from "../images/gh.png";
import tailwind from "../images/tailwind.png";
import react from "../images/reactlogo.png";
import mongo from "../images/mongdb.png";

const About = () => {
  return (
    <div className="relative" id="about">
      <div class="py-16 bg-transparent">
        <div class="m-auto text-center md:w-8/12 lg:w-6/12">
          <h2 class="text-2xl text-white font-bold md:text-4xl">Sobre mí</h2>
        </div>
        <div class="container px-6 text-gray-600 md:px-12 xl:px-6">
          <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div class="md:5/12 lg:w-5/12">
              <img
                src={Developer}
                alt="image"
                loading="lazy"
                width=""
                height=""
              />
            </div>
            <div class="md:7/12 lg:w-6/12">
              <h2 class="text-2xl text-purple-900 font-bold md:text-4xl">
                ¿Quién soy?
              </h2>
              <p class="mt-6 text-gray-600">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
                omnis voluptatem accusantium nemo perspiciatis delectus atque
                autem! Voluptatum tenetur beatae unde aperiam, repellat expedita
                consequatur! Officiis id consequatur atque doloremque!
              </p>
              <p class="mt-4 text-gray-600">
                Nobis minus voluptatibus pariatur dignissimos libero quaerat
                iure expedita at? Asperiores nemo possimus nesciunt dicta veniam
                aspernatur quam mollitia.
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
            <div class="flex flex-wrap justify-center gap-6">
              <div class="group py-2 px-4 border border-opacity-10 rounded-xl bg-white bg-opacity-5 hover:bg-opacity-10">
                <img
                  src={JS}
                  class="contrast-50 transition group-hover:contrast-100"
                  loading="lazy"
                  alt="logo airbnb"
                />
              </div>
              <div class="group py-2 px-4 border border-opacity-10 rounded-xl bg-white bg-opacity-5 hover:bg-opacity-10">
                <img
                  src={html}
                  class="transition group-hover:contrast-100"
                  loading="lazy"
                  alt="logo microsoft"
                />
              </div>
              <div class="group py-2 px-4 border border-opacity-10 rounded-xl bg-white bg-opacity-5 hover:bg-opacity-10">
                <img
                  src={css}
                  class=" transition group-hover:contrast-100"
                  loading="lazy"
                  alt="logo ge"
                />
              </div>
              <div class="group py-2 px-4 border border-opacity-10 rounded-xl bg-white bg-opacity-5 hover:bg-opacity-10">
                <img
                  src={node}
                  class=" transition group-hover:contrast-100"
                  loading="lazy"
                  alt="logo bissell"
                />
              </div>
              <div class="group py-2 px-4 border border-opacity-10 rounded-xl bg-white bg-opacity-5 hover:bg-opacity-10">
                <img
                  src={mysql}
                  class=" transition group-hover:contrast-100"
                  loading="lazy"
                  alt="logo bissell"
                />
              </div>
              <div class="group py-2 px-4 border border-opacity-10 rounded-xl bg-white bg-opacity-5 hover:bg-opacity-10">
                <img
                  src={gh}
                  class=" transition group-hover:contrast-100"
                  loading="lazy"
                  alt="logo automatic"
                />
              </div>
              <div class="group py-2 px-4 border border-opacity-10 rounded-xl bg-white bg-opacity-5 hover:bg-opacity-10">
                <img
                  src={tailwind}
                  class=" transition group-hover:contrast-100"
                  loading="lazy"
                  alt="logo automatic"
                />
              </div>
              <div class="group py-2 px-4 border border-opacity-10 rounded-xl bg-white bg-opacity-5 hover:bg-opacity-10">
                <img
                  src={react}
                  class=" transition group-hover:contrast-100"
                  loading="lazy"
                  alt="logo automatic"
                />
              </div>
              <div class="group py-2 px-4 border border-opacity-10 rounded-xl bg-white bg-opacity-5 hover:bg-opacity-10">
                <img
                  src={mongo}
                  class=" transition group-hover:contrast-100"
                  loading="lazy"
                  alt="logo automatic"
                />
              </div>
            </div>
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
