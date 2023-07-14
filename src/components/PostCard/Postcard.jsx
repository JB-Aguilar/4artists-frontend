/* eslint-disable react/prop-types */
//import PropTypes from 'prop-types'
//import { useNavigate } from 'react-router-dom';
import './Postcard.css'
import { useState } from "react";
import LastSeen from "../LastSeen/LastSeen";
import ImageCard from '../ImageCard/ImageCard';

function Postcard({post}) {
  const[like, setLike] = useState(false)
  const[share, setShare] = useState(false)

  const handleLike = () => {
    setLike(!like)
  }

  const handleShare = () => {
    setShare(!share)
  }

  return (
    <div className=" flex flex-col flex-shrink-0 antialiased  text-gray-300 ">
      <div className=" relative ml-auto w-full max-w-[50rem] mt-5 bg-[#2F3E52] flex-col mr-auto bg-transparent bg-clip-border text-grey-700 shadow-md mb-5 rounded-lg border border-gray-500 ">
        <div className="relative mx-0 mt-4 flex items-center gap-4 overflow-hidden rounded-xl bg-transparent bg-clip-border pt-0 pb-8 text-gray-700 shadow-none ">
          <img
            src="https://i.pinimg.com/736x/86/94/dc/8694dc58b64ff6409aef141d644dac87.jpg"
            className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center ml-4"
          />
          <div className="flex w-full flex-col gap-0.5 ">
            <div className="flex items-center justify-between">
              <h5 className="block font-sans text-xl font-semibold leading-snug tracking-normal ml-2 text-gray-300 hover:text-indigo-400 text-blue-gray-900 antialiased">
                {post.user.username}
              </h5>
              <div className="flex items-center pr-5 gap-0 text-gray-300">
                <LastSeen date={post.createdAt} />
              </div>
            </div>
          </div>
        </div>
        <div className="mb-6 pl-3 ml-20 pr-20">
          <p className=" block font-sans text-lg font-semibold leading-relaxed text-left antialiased">
            {post.text}
          </p>
          <div>{post.text != "image" ? "" : <ImageCard />}</div>
          <div className="flex flex-row-reverse gap-5 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`w-6 h-6 mt-4 ${
                like ? "fill-red-500 text-red-500" : " text-red-500"
              }`}
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
              className={`w-6 h-6 mt-4 ${share ? " text-green-500" : ""} `}
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