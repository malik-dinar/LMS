import { FaFacebookF ,FaInstagramSquare, FaGithub, FaLinkedinIn } from "react-icons/fa";

function Footer() {    
  return (
    <footer className="relative bg-gradient-to-b from-blue to-slate-500 pt-36 pb-6">
      <div
        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
      >
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="text-gray-300 fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl font-semibold text-white">Let's keep in touch!</h4>
            <h5 className="text-lg mt-0 mb-2 text-white">
              Find us on any of these platforms, we respond 1-2 business days.
            </h5>
            <div className="mt-6">
              <button
                className="bg-white text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
                href="m.facebook.com"
                onClick={()=>window.open('https://www.facebook.com', '_blank')}
              >
                <FaFacebookF/>
              </button>
              <button
                className="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
                onClick={()=>window.open('https://www.linkedin.com/in/malik-dinar-510795234/', '_blank')}
              >
                <FaLinkedinIn/>
              </button>
              <button
                className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
                onClick={()=>window.open('https://www.instagram.com/_mal_ik__/', '_blank')}
              >
                <FaInstagramSquare/>
              </button>
              <button
                className="bg-white text-gray-900 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
                onClick={()=>window.open('https://github.com/malik-dinar', '_blank')}
              >
                <FaGithub/>
              </button>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-white text-sm font-semibold mb-2">
                  Useful Links
                </span>
                <ul className="list-unstyled">
                  <li className="cursor-pointer">
                    <a
                      className="text-white hover:text-gray-900 font-semibold block pb-2 text-sm"
                    >
                      About Us
                    </a>
                  </li>
                  <li className="cursor-pointer">
                    <a
                      className="text-white hover:text-gray-900 font-semibold block pb-2 text-sm"
                    >
                      Blog
                    </a>
                  </li>
                  <li className="cursor-pointer">
                    <a
                      className="text-white hover:text-gray-900 font-semibold block pb-2 text-sm"
                    >
                      Github
                    </a>
                  </li>
                  <li className="cursor-pointer">
                    <a
                      className="text-white hover:text-gray-900 font-semibold block pb-2 text-sm"
                    >
                      Free Products
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-white text-sm font-semibold mb-2">
                  Other Resources
                </span>
                <ul className="list-unstyled">
                  <li className="cursor-pointer">
                    <a
                      className="text-white hover:text-gray-900 font-semibold block pb-2 text-sm"
                    >
                      MIT License
                    </a>
                  </li>
                  <li className="cursor-pointer">
                    <a
                      className="text-white hover:text-gray-900 font-semibold block pb-2 text-sm"
                    >
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li className="cursor-pointer">
                    <a
                      className="text-white hover:text-gray-900 font-semibold block pb-2 text-sm"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li className="cursor-pointer">
                    <a
                      className="text-white hover:text-gray-900 font-semibold block pb-2 text-sm"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-400" />
       
      </div>
    </footer>
  );
}

export default Footer;