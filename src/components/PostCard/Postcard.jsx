/* eslint-disable react/prop-types */
//import PropTypes from 'prop-types'
//import { useNavigate } from 'react-router-dom';
import moment from "moment"
import { useEffect, useState } from "react";

function Postcard({post}) {
  const[like, setLike] = useState(false)
  const[share, setShare] = useState(false)
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

  const handleLike = () => {
    setLike(!like)
  }

  const handleShare = () => {
    setShare(!share)
  }

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
              <div className="5 flex items-center pr-5 gap-0">{timeAgo}</div>
            </div>
          </div>
        </div>
        <div className="mb-6 pl-3 pr-3">
          <p className=" block font-sans text-base font-light leading-relaxed text-left antialiased">
            {post.text}
          </p>
          <div className="flex flex-row-reverse gap-5 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`w-6 h-6 mt-4 ${like ? "fill-red-500 text-red-500" : " text-red-500"}`}
            onClick={handleLike}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`w-6 h-6 mt-4 ${share ? " text-green-500" : ""}`}
            onClick={handleShare}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3"
            />
          </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Postcard