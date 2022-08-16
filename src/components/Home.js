import ImageTechfix from "../images/developer.png";
import Ikbal from "../images/Ikbal.png";

const Home = () => {
  return (
    <div className="w-full px-6 mt-[-40px] ">
      <div className="mt-8 relative rounded-lg bg-transparent container mx-auto flex flex-col items-center pt-12 sm:pt-24 pb-24 sm:pb-32 md:pb-48 lg:pb-56 xl:pb-64">
        <div className="w-11/12 sm:w-2/3 mb-5 sm:mb-2">
          <h1 className="text-2xl text-center text-white font-medium leading-tight">
            Hola!, soy
          </h1>
        </div>
        <div className="w-11/12 sm:w-2/3 mb-5 sm:mb-5">
          <h1 className="text-4xl text-center text-white font-bold leading-tight">
            Juan Bianco
          </h1>
        </div>
        <div className="w-11/12 sm:w-2/3 mb-5 sm:mb-10">
          <h1 className="text-lg text-center text-slate-400 font-normal leading-tight">
            Full Stack Developer 💻
          </h1>
        </div>
        <div className="flex justify-center items-center z-50">
          <a href="#about">
            <button className="hover:text-white hover:bg-transparent rounded-3xl lg:text-xl hover:border-white border bg-white transition duration-150 ease-in-out  text-[#13547a] px-4 sm:px-8 py-1 sm:py-3 text-sm">
              Sobre mí
            </button>
          </a>
          <a
            href="https://drive.google.com/file/d/1vHC4mm_HtAmk4N5x-RBBOa7nZtlX-HTH/view?usp=sharing"
            target="__blank"
          >
            <button className="hover:bg-white hover:text-[#13547a] lg:text-xl ml-3 sm:ml-6 bg-transparent transition duration-150 ease-in-out  hover:bg-indigo-700-800 rounded-3xl border border-white text-white px-4 sm:px-8 py-1 sm:py-3 text-sm">
              Descargar CV
            </button>
          </a>
        </div>
      </div>
      <div className="container flex justify-center relative top-[-200px]">
        <div className="relative w-[250px] bg-gradient-to-r from-[#48c6ef] to-[#6f86d6] rounded-t-[200px] rounded-b-[50px] shadow-sm">
          <img
            src={Ikbal}
            alt="Sample Page"
            role="img"
            className="animate-bounce"
          />
        </div>
      </div>

    </div>
  );
};

export default Home;
