function ToFollow() {
  return (
    <div className="flex fixed z-5 right-0 top-0 mt-5 hidden lg:block ">
      <div className="max-w-sm bg-gray-800 overflow-hidden shadow-lg m-4 mr-20 rounded-lg border border-white">
        <div className="flex">
          <div className="flex-1 m-2">
            <h2 className="px-4 py-2 text-xl w-48 font-semibold text-gray-300">
              Who to discover
            </h2>
          </div>
        </div>

        <hr className="border-gray-300" />

        <div className="flex flex-shrink-0">
          <div className="flex-1 ">
            <div className="flex items-center w-48">
              <div>
                <img
                  className="inline-block h-10 w-auto rounded-full ml-4 mt-2"
                  src="https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png"
                  alt=""
                />
              </div>
              <div className="ml-3 mt-3">
                <p className="text-base leading-6 font-medium text-gray-300">
                  Sonali Hirave
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 px-4 py-2 m-2">
            <a href="" className=" float-right">
              <button className="bg-transparent hover:bg-indigo-600 text-green-500 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded-full">
                Follow
              </button>
            </a>
          </div>
        </div>
        <hr className="border-gray-300" />

        <div className="flex flex-shrink-0">
          <div className="flex-1 ">
            <div className="flex items-center w-48">
              <div>
                <img
                  className="inline-block h-10 w-auto rounded-full ml-4 mt-2"
                  src="https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png"
                  alt=""
                />
              </div>
              <div className="ml-3 mt-3">
                <p className="text-base leading-6 font-medium text-gray-300">
                  Sonali Hirave
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 px-4 py-2 m-2">
            <a href="" className=" float-right">
              <button className="bg-transparent hover:bg-indigo-600 text-green-500 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded-full">
                Follow
              </button>
            </a>
          </div>
        </div>

        <hr className="border-gray-300" />

        <div className="flex flex-shrink-0">
          <div className="flex-1 ">
            <div className="flex items-center w-48">
              <div>
                <img
                  className="inline-block h-10 w-auto rounded-full ml-4 mt-2"
                  src="https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png"
                  alt=""
                />
              </div>
              <div className="ml-3 mt-3">
                <p className="text-base leading-6 font-medium text-gray-300">
                  Sonali Hirave
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 px-4 py-2 m-2">
            <a href="" className=" float-right">
              <button className="bg-transparent hover:bg-indigo-600 text-green-500 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded-full">
                Follow
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToFollow;
