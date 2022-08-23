import Github from "../images/gh.png";
import IG from "../images/instagram.png";
import Linkedin from "../images/linkedin.png";
import Gmail from "../images/gmail.png";

const Contact = () => {


  const gmailAlert = () =>{
    alert("Mi email: bjuan.ignacio11@gmail.com")
  }

  return (
    <div id="contact" className="mb-56 relative top-[50px]">
      <div class="m-auto text-center md:w-8/12 lg:w-6/12 bg-sky-400 bg-opacity-10 p-4 rounded-[7px]">
        <h2 class="text-2xl text-white font-bold md:text-4xl">Contactame 📩</h2>
      </div>

      <div class="relative z-[1] container m-auto px-6 md:px-12 mt-24">
        <div class="m-auto text-center md:w-8/12 lg:w-6/12">
          <h2 class="text-2xl text-white font-bold md:text-4xl">
            Me encontrarás por <span class="text-sky-400">aquí!</span>
          </h2>
        </div>
        <div class="m-auto mt-16 ">
          <div class="flex flex-wrap justify-center gap-6 w-auto">
            <a href="https://github.com/juanib12" target="__blank">
              <div class="group py-2 px-4 border border-opacity-10 rounded-xl hover:bg-gray-800">
                <img
                  src={Github}
                  class="transition group-hover:contrast-100"
                  loading="lazy"
                  alt="logo airbnb"
                />
              </div>
            </a>
            <a href="https://www.instagram.com/bianco_juani/" target="__blank">
              <div class="group py-2 px-4 border border-opacity-10 rounded-xl hover:bg-gray-800">
                <img
                  src={IG}
                  class="transition group-hover:contrast-100"
                  loading="lazy"
                  alt="logo microsoft"
                />
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/juanignaciobianco/"
              target="__blank"
            >
              <div class="group py-2 px-4 border border-opacity-10 rounded-xl  hover:bg-gray-800">
                <img
                  src={Linkedin}
                  class=" transition group-hover:contrast-100"
                  loading="lazy"
                  alt="logo ge"
                />
              </div>
            </a>
            <div onClick={gmailAlert} class="group py-2 px-4 border border-opacity-10 rounded-xl  hover:bg-gray-800 cursor-pointer">
              <img
                src={Gmail}
                class=" transition group-hover:contrast-100"
                loading="lazy"
                alt="logo ge"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
