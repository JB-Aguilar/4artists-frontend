/* eslint-disable react/prop-types */
//import PropTypes from 'prop-types'
//import { useNavigate } from 'react-router-dom';

function Postcard({post}) {
console.log(post)

  return (
    <div className=" flex flex-col flex-shrink-0 antialiased bg-gray-50 text-gray-800">
      <div className=" border relative ml-auto w-full max-w-[40rem] flex-col rounded-xl mr-auto bg-transparent bg-clip-border text-grey-700 shadow-none mb-5">
        <div className="relative mx-0 mt-4 flex items-center gap-4 overflow-hidden rounded-xl bg-transparent bg-clip-border pt-0 pb-8 text-gray-700 shadow-none">
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center ml-2"
          />
          <div className="flex w-full flex-col gap-0.5">
            <div className="flex items-center justify-between">
              <h5 className="block font-sans text-xl font-semibold leading-snug tracking-normal hover:text-indigo-600 text-blue-gray-900 antialiased">
                {post.user.username}
              </h5>
              <div className="5 flex items-center gap-0">
              </div>
            </div>
          </div>
        </div>
        <div className="mb-6 pl-3 pr-3">
          <p className="block font-sans text-base font-light leading-relaxed text-left  antialiased">
            {post.text}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Postcard