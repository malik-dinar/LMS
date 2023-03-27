import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <section className="flex flex-col md:flex-row h-85vh items-center overflow-y-hidden bg-blue">
        <div className="bg-blue w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">
          <div className="w-full h-100">
            <h1 className="text-head text-xl md:text-3xl font-bold leading-tight mt-12">
              The capacity to learn is a gift; the ability to learn is a skill;
              the willingness to learn is a choice.
            </h1>
            <div className="mt-5">
              <h1 className="block text-black text-2xl ">
                The harrder you work for something, the greater you'll feel when
                you achieve it
              </h1>
            </div>  
          </div>
        </div>
        <div className="mt-10 bg-blue">
          <img src="/Home.png" alt="" className="" />
        </div>
      </section>


       


      <div className="bg-blue overflow-x-hidden">
        <h2 className="block text-5xl ml-16 md:text-4xl mb-2 w-606.63 left-118 
         font-inter font-extrabold  leading-10 
         text-gray-100">What features do we have to offer ? </h2>
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap items-center justify-center">
              <div className="max-w-sm w-full sm:w-full lg:w-1/3 py-4 px-4 lg:px-6">
                <div className="shadow-xl rounded-lg overflow-hidden bg-gradient-to-r from-gray-900 to-violet">
                  <img
                    className="bg-cover bg-center h-20 p-4 mx-auto mt-8"
                    src="/feature2.png"
                    alt=""
                  />
                  <div className="p-4">
                    <h1 className="text-center tracking-wide text-sm font-bold text-white">
                    Test your knowledge after each lesson!
                    </h1>
                  </div>
                </div>
              </div>
              <div class="max-w-sm w-full sm:w-1/2 lg:w-1/3 py-8 px-3">
                <div class=" shadow-xl rounded-lg overflow-hidden bg-gradient-to-r from-gray-900 to-violet">
                  <img
                    class="bg-cover bg-center h-20 p-4 mx-auto mt-8 cursor-pointer"
                    src="/feature3.png"
                    alt=""
                    onClick={()=>navigate('/tutor/login')}
                  />
                  <div class="p-4">
                    <h1 class="text-center tracking-wide text-sm font-bold text-white">
                    Use our platform to share your knowledge
                    </h1>
                  </div>
                </div>
              </div>
              <div class="max-w-sm w-full sm:w-1/2 lg:w-1/3 py-8 px-3 ">
                <div class=" shadow-xl rounded-lg overflow-hidden bg-gradient-to-r from-gray-900 to-violet">
                  <img
                    class="bg-cover bg-center h-20 p-4 mx-auto mt-8"
                    src="/feature4.png"
                    alt=""
                  />
                  <div class="p-4">
                    <h1 class="text-center tracking-wide text-sm font-bold text-white">
                    Give us feedback and let's grow together
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>









      <div className="bg-blue overflow-x-hidden">
        <h2 className="block text-5xl ml-16 md:text-4xl mb-2 w-606.63 left-118 
         font-inter font-extrabold  leading-10 
         text-gray-100">Our Courses</h2>
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap items-center justify-center">
              <div className="max-w-sm w-full sm:w-full lg:w-1/3 py-4 px-4 lg:px-6">
                <div className=" shadow-xl rounded-lg overflow-hidden bg-gradient-to-r from-gray-900 to-violet">
                  <img
                    className="bg-cover bg-center h-20 p-4 mx-auto mt-8"
                    src="/course1.png"
                    alt=""
                  />
                  <div className="p-4">
                    <h1 className="text-center tracking-wide text-sm font-bold text-white">
                        Design
                    </h1>
                  </div>
                </div>
              </div>
              <div className="max-w-sm w-full sm:w-full lg:w-1/3 py-4 px-4 lg:px-6">
                <div className="shadow-xl rounded-lg overflow-hidden bg-gradient-to-r from-gray-900 to-violet">
                  <img
                    className="bg-cover bg-center h-20 p-4 mx-auto mt-8"
                    src="/course2.png"
                    alt=""
                  />
                  <div className="p-4">
                    <h1 className="text-center tracking-wide text-sm font-bold text-white">
                       Development
                    </h1>
                  </div>
                </div>
              </div>
              <div class="max-w-sm w-full sm:w-1/2 lg:w-1/3 py-8 px-3">
                <div class=" shadow-xl rounded-lg overflow-hidden bg-gradient-to-r from-gray-900 to-violet">
                  <img
                    class="bg-cover bg-center h-20 p-4 mx-auto mt-8"
                    src="/course3.png"
                    alt=""
                  />
                  <div class="p-4">
                    <h1 class="text-center tracking-wide text-sm font-bold text-white">
                        Marketing
                    </h1>
                  </div>
                </div>
              </div>
              <div class="max-w-sm w-full sm:w-1/2 lg:w-1/3 py-8 px-3 ">
                <div class=" shadow-xl rounded-lg overflow-hidden bg-gradient-to-r from-gray-900 to-violet">
                  <img
                    class="bg-cover bg-center h-20 p-4 mx-auto mt-8"
                    src="/course4.png"
                    alt=""
                  />
                  <div class="p-4">
                    <h1 class="text-center tracking-wide text-sm font-bold text-white">
                        IT and Software
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </>
  );
}

export default Home;
