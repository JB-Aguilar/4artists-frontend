/* eslint-disable react/prop-types */
//import PropTypes from 'prop-types'
//import { useNavigate } from 'react-router-dom';
import "./Postcard.css";
import { useEffect, useState } from "react";
import LastSeen from "../LastSeen/LastSeen";
import ImageCard from "../ImageCard/ImageCard";
import { toggleLike } from "../../services/user.services";
import { GetProfileAPI } from "../../services/profile.services";

function Postcard({ post, likes, handleReload }) {
  const [user, setUser] = useState("");
  

  const getUser = async () => {
    const res = await GetProfileAPI();
    if (res) {
      setUser(res);
    }
  };

   const handleLike = async () => {
     const res = await toggleLike(user.id, post.id);
     handleReload()
   };

   const countLikes = () => {
    const postLike = {
      number: 0,
      liked: false
    }

    likes.forEach(like => {
      if(post.id === like.postId) {
        postLike.number++

        if(user.id === like.userId) {
          postLike.liked = true
        }
      }
    });

    return postLike
   }

   useEffect(() => {
     getUser();
   }, []);

  return (
    <div className=" flex flex-col flex-shrink-0 antialiased  text-gray-300">
      <div
        id="pater"
        className=" relative ml-auto w-full max-w-[50rem] flex-col mr-auto bg-transparent bg-clip-border text-grey-700 shadow-md  "
      >
        <div className="relative mx-0 mt-4 flex items-center gap-4 overflow-hidden rounded-xl bg-transparent bg-clip-border pt-0 pb-8 text-gray-700 shadow-none ">
          <img
            src="https://i.pinimg.com/736x/86/94/dc/8694dc58b64ff6409aef141d644dac87.jpg"
            className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center ml-4"
          />
          <div className="flex w-full flex-col gap-0.5 ">
            <div className="flex items-center justify-between">
              <h5 className="block font-sans text-xl font-semibold leading-snug tracking-normal ml-2 text-gray-700 hover:text-[#9146FF] text-blue-gray-900 antialiased">
                {post.user.username}
              </h5>
              <div className="flex items-center pr-5 gap-0 text-gray-500">
                <LastSeen date={post.createdAt} />
              </div>
            </div>
          </div>
        </div>
        <div className="mb-6 pl-3 ml-20 pr-20">
          <p className=" block font-sans text-lg font-semibold leading-relaxed text-left antialiased text-gray-500">
            {post.text}
          </p>
          {post.img && (
            <div>
              <ImageCard img={post.img} />
            </div>
          )}
          <div className="flex flex-row-reverse gap-5 ">
            <p className="w-6 h-6 mt-4 text-gray-500">{countLikes().number}</p>
            <div className="flex flex-row-reverse gap-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`w-6 h-6 mt-4 
                  ${
                    countLikes().liked
                      ? "fill-red-500 text-red-500"
                      : " text-red-500"
                  }
                `}
                onClick={() => {
                  handleLike();
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default Postcard;
