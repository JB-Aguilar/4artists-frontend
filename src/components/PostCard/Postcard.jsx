/* eslint-disable react/prop-types */
//import PropTypes from 'prop-types'
//import { useNavigate } from 'react-router-dom';
import moment from "moment"
import { useEffect, useState } from "react";

function Postcard({post}) {
  const[timeAgo, settimeAgo] = useState("")

  useEffect(()=>{
    const updateTimeAgo = () => {
      const currentTimeAgo = moment(post.createdAt).fromNow()
      settimeAgo(currentTimeAgo)
    }

    updateTimeAgo()

    const interval = setInterval(updateTimeAgo, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [post.createdAt])

  return (
    <div className=" flex flex-col flex-shrink-0 antialiased  text-gray-800">
      <div className=" relative ml-auto w-full max-w-[50rem] mt-5 bg-blue-200 flex-col mr-auto bg-transparent bg-clip-border text-grey-700 shadow-md mb-5">
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
              <div className="5 flex items-center pr-5 gap-0">
                {timeAgo}
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