import ListCourse from "./ListCourse";

function Home() {

  return (
    <main className="bg-indigo-50/60 sm:py-10 px-3 py-0 sm:px-10">
          <nav className="text-lg flex items-center justify-between content-center ">
            <div className=" font-semibold text-xl text-gray-800 flex space-x-4 items-center">
              <a>
                <span className="md:hidden">
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h7"
                    ></path>
                  </svg>
                </span>
              </a>
              <span class="text-3xl mt-3 font-bold bg-gradient-to-r from-gray-900 to-black text-white px-4 py-2 rounded-lg shadow-lg">
                Welcome......!
              </span>
            </div>
          </nav>

          <section>
            <div className="mt-6 grid grid-cols-1 xs:grid-cols-2 gap-y-6  gap-x-6 md:flex md:space-x-6 md:gap-x-0 ">
              <div className="mt-6 grid grid-cols-3 max-w-max gap-x-6">
                <div className="flex flex-col sm:w-40 w-20 text-gray-700 text-sm space-y-2">
                  <div className="bg-indigo-800/80 text-white  px-4 py-3 rounded-lg ">
                    <h1 class="text-1xl font-bold">{users} users</h1>
                  </div>
                </div>

                <div className="flex flex-col  sm:w-40 w-20 text-gray-600 text-sm space-y-2 font-semibold">
                  <div className="bg-indigo-800/80 text-white  px-4 py-3 rounded-lg ">
                    <h1 class="text-1xl font-bold">{tutors} tutors</h1>
                  </div>
                </div>

                <div className="flex flex-col sm:md:w-40 w-20 text-gray-600 text-sm space-y-2 font-semibold">
                  <div className="inline-flex relative">
                    <div className="bg-indigo-800/80 text-white  px-4 py-3 rounded-lg ">
                      <h1 className="text-1xl font-bold">$0 Total Revenue</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <ListCourse />
          {/* { <TutorManagementPage />   } */}
          <div>
          {/* <UserManagement /> */}
          </div>
        </main>
  );
}

export default Home;
