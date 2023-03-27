import { useNavigate } from "react-router-dom";

function Navbar() {
  const auth = localStorage.getItem("user")
  const navigate = useNavigate()

  const logOut=()=>{
    localStorage.removeItem("user");
    localStorage.removeItem("auth");

    navigate("/user/home")
  }

  const Login=()=>{
    navigate("/user/login")
  }
  return (
    <>
      <header class="lg:px-16 px-6 bg-blue flex flex-wrap items-center lg:py-0 py-2">
        <div class="flex-1 flex justify-between items-center">
          <a href="#">
            <svg
              width="32"
              height="36"
              viewBox="0 0 32 36"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15.922 35.798c-.946 0-1.852-.228-2.549-.638l-10.825-6.379c-1.428-.843-2.549-2.82-2.549-4.501v-12.762c0-1.681 1.12-3.663 2.549-4.501l10.825-6.379c.696-.41 1.602-.638 2.549-.638.946 0 1.852.228 2.549.638l10.825 6.379c1.428.843 2.549 2.82 2.549 4.501v12.762c0 1.681-1.12 3.663-2.549 4.501l-10.825 6.379c-.696.41-1.602.638-2.549.638zm0-33.474c-.545 0-1.058.118-1.406.323l-10.825 6.383c-.737.433-1.406 1.617-1.406 2.488v12.762c0 .866.67 2.05 1.406 2.488l10.825 6.379c.348.205.862.323 1.406.323.545 0 1.058-.118 1.406-.323l10.825-6.383c.737-.433 1.406-1.617 1.406-2.488v-12.757c0-.866-.67-2.05-1.406-2.488l-10.825-6.379c-.348-.21-.862-.328-1.406-.328zM26.024 13.104l-7.205 13.258-3.053-5.777-3.071 5.777-7.187-13.258h4.343l2.803 5.189 3.107-5.832 3.089 5.832 2.821-5.189h4.352z"></path>
            </svg>
          </a>
        </div>

        <label for="menu-toggle" class="pointer-cursor lg:hidden block">
          <svg
            class="fill-current text-gray-900"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </label>
        <input class="hidden" type="checkbox" id="menu-toggle" />

        <div class="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
          <nav>
            <ul class="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0">
              <li>
                <a class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400 text-white flex items-center">
                  <svg class="h-8 w-8 text-white mr-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" />
                    <line x1="8" y1="9" x2="16" y2="9" />
                    <line x1="8" y1="13" x2="14" y2="13" />
                  </svg>
                  <span>messages</span>
                </a>
              </li>
              <li>
                <a
                  class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400  text-white"
                  href="#"
                >
                  notifications
                </a>
              </li>
              <li>
                <a
                  class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400  text-white"
                  href="#"
                >
                  Support
                </a>
              </li>
          {
            (auth) ? <li>
              <a
                class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400 lg:mb-0 mb-2  text-white"
                onClick={logOut}
              >
                Logout
              </a>
            </li> :
            <li>
              <a
                class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400 lg:mb-0 mb-2  text-white"
                onClick={Login}
              >
                Login
              </a>
            </li>
          }
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Navbar;
