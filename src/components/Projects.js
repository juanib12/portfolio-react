import Animadle from "../images/animadle.png";

const Projects = () => {
  return (
    <div className="container top-36 relative mb-36" id="projects">
        <div class="m-auto text-center md:w-8/12 lg:w-6/12 mb-20">
          <h2 class="text-2xl text-white font-bold md:text-4xl">Proyectos</h2>
        </div>
      <div className="py-16 bg-transparent relative top-[-50px]">
        <div className="container m-auto px-6 text-gray-500 md:px-12 xl:px-12">
          <div className="mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-3">
            <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
              <div className="mb-12 space-y-4">
                <h3 className="text-2xl font-semibold text-black">ANIMADLE</h3>
                <p className="mb-6">
                  Un juego al mejor estilo wordle, donde deberás adivinar el
                  animal, debe contener 5 letras y no tener tildes.
                </p>
                <a
                  href="https://animadle.vercel.app/"
                  target="__blank"
                  className="block font-medium text-purple-600"
                >
                  Saber más
                </a>
              </div>
              <img
                src={Animadle}
                className="-mb-12 relative -top-6 rounded-xl"
                alt="animadle"
                loading="lazy"
                width="900"
                height="600"
              />
            </div>
            <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
              <div className="mb-12 space-y-4">
                <h3 className="text-2xl font-semibold text-black">Tood Notes</h3>
                <p className="mb-6">
                  Obcaecati, quam? Eligendi, nulla numquam natus laborum porro
                  at cum, consectetur ullam tempora ipsa iste officia sed
                  officiis! Incidunt ea animi officiis.
                </p>
                <a
                  href="https://animadle.vercel.app/"
                  target="__blank"
                  className="block font-medium text-purple-600"
                >
                  Know more
                </a>
              </div>
              <img
                src="images/ui-design.svg"
                className="w-2/3 ml-auto"
                alt="illustration"
                loading="lazy"
                width="900"
                height="600"
              />
            </div>
            <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
              <div className="mb-12 space-y-4">
                <h3 className="text-2xl font-semibold text-black">Convert Bitcoin</h3>
                <p className="mb-6">
                  Obcaecati, quam? Eligendi, nulla numquam natus laborum porro
                  at cum, consectetur ullam tempora ipsa iste officia sed
                  officiis! Incidunt ea animi officiis.
                </p>
                <a
                  href="https://animadle.vercel.app/"
                  target="__blank"
                  className="block font-medium text-purple-600"
                >
                  Know more
                </a>
              </div>
              <img
                src="images/ux-design.svg"
                className="w-2/3 ml-auto "
                alt="illustration"
                loading="lazy"
                width="900"
                height="600"
              />
            </div>
            <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
              <div className="mb-12 space-y-4">
                <h3 className="text-2xl font-semibold text-black">Movie App</h3>
                <p className="mb-6">
                  Obcaecati, quam? Eligendi, nulla numquam natus laborum porro
                  at cum, consectetur ullam tempora ipsa iste officia sed
                  officiis! Incidunt ea animi officiis.
                </p>
                <a
                  href="https://animadle.vercel.app/"
                  target="__blank"
                  className="block font-medium text-purple-600"
                >
                  Know more
                </a>
              </div>
              <img
                src="images/ux-design.svg"
                className="w-2/3 ml-auto "
                alt="illustration"
                loading="lazy"
                width="900"
                height="600"
              />
            </div>
            <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
              <div className="mb-12 space-y-4">
                <h3 className="text-2xl font-semibold text-black">Rick and Morty API</h3>
                <p className="mb-6">
                  Obcaecati, quam? Eligendi, nulla numquam natus laborum porro
                  at cum, consectetur ullam tempora ipsa iste officia sed
                  officiis! Incidunt ea animi officiis.
                </p>
                <a
                  href="https://animadle.vercel.app/"
                  target="__blank"
                  className="block font-medium text-purple-600"
                >
                  Know more
                </a>
              </div>
              <img
                src="images/ux-design.svg"
                className="w-2/3 ml-auto "
                alt="illustration"
                loading="lazy"
                width="900"
                height="600"
              />
            </div>
            <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
              <div className="mb-12 space-y-4">
                <h3 className="text-2xl font-semibold text-black">Techfix</h3>
                <p className="mb-6">
                  Obcaecati, quam? Eligendi, nulla numquam natus laborum porro
                  at cum, consectetur ullam tempora ipsa iste officia sed
                  officiis! Incidunt ea animi officiis.
                </p>
                <a
                  href="https://animadle.vercel.app/"
                  target="__blank"
                  className="block font-medium text-purple-600"
                >
                  Know more
                </a>
              </div>
              <img
                src="images/ux-design.svg"
                className="w-2/3 ml-auto "
                alt="illustration"
                loading="lazy"
                width="900"
                height="600"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
