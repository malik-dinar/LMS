function HomeT() {
  return (
    <>
      <div className="bg-blue">
        <section className="flex flex-col md:flex-row h-85vh items-center overflow-y-hidden bg-blue">
          <div className="bg-blue w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 px-6 lg:px-16 xl:px-12 flex items-center justify-center">
            <div className="w-full h-100">
              <h1 className="text-head text-xl md:text-3xl font-bold leading-tight mt-12">
                The mediocre teacher tells. The good teacher explains. The
                superior teacher demonstrates. The great teacher inspires.
              </h1>
              <div className="mt-5">
                <h1 className="block text-black text-2xl ">
                  Education is not the filling of a pail, but the lighting of a
                  fire
                </h1>
              </div>
            </div>
          </div>
          <div className="mt-10 bg-blue">
            <img src="/teacher.png" alt="" className="" />
          </div>
        </section>

        <div className="bg-blue">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="shadow-xl rounded-lg overflow-hidden bg-gradient-to-r from-gray-900 to-violet lg:p-12 mt-12">
              <div className="flex justify-center">
                <button className="bg-gray-500 hover:bg-gray-400 text-white font-medium py-2 px-4 rounded">
                  Create Course
                </button>
              </div>
              <div className="mt-8">
                <h1 className="text-center tracking-wide text-xl font-bold text-white mb-4">
                  Come teach with us
                </h1>
                <p className="text-white leading-7 text-center">
                  Become an instructor and change lives — including your own
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeT;
