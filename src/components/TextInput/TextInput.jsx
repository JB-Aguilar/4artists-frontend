import { useState } from "react";

// eslint-disable-next-line react/prop-types
function TextInput({onNewPost}) {
    const [text, setText] = useState("")
    const [image, setImage] = useState('')
     const [avatarPreview, setAvatarPreview] = useState('');

    const handlePost = async () => {
      if(text.trim() !== ""){
        try {
          onNewPost(text, image)
          setText("")
          setImage('')
          setAvatarPreview('')
        }catch(error){
            console.error(error)
        }
      }
    }

    const handleChange = (e) => {
      setText(e.target.value)
    }

    const handleImageChange = (e) => {
      const selectedImage = e.target.files[0];
      setImage(selectedImage);

      // Generate a temporary URL for the selected file
      const previewURL = URL.createObjectURL(selectedImage);
      setAvatarPreview(previewURL);
    }

  return (
    <form onSubmit={handlePost} encType="multipart/form-data">
      <div className=" flex flex-col bg-[#fcfcfc] max-w-[50rem] max-h-[10rem] shadow-md m-auto z-10 border-b">
        <div className="flex">
          <div className="m-2 w-10">
            <img
              className="inline-block h-10 w-10 rounded-full ml-3 mt-2 cursor-pointer"
              src="https://i.pinimg.com/736x/86/94/dc/8694dc58b64ff6409aef141d644dac87.jpg"
              alt=""
            />
          </div>
          <div className="flex-1 px-8 pt-2 mt-2 flex">
            <textarea
              className="bg-transparent placeholder-gray-500 text-gray-500 text-lg w-full pl-2 pt-1"
              rows="2"
              cols="50"
              placeholder="What's happening?"
              value={text}
              onChange={handleChange}
            ></textarea>
            {avatarPreview !== '' &&
              <img
                src={avatarPreview}
                alt="Avatar Preview"
                className="w-auto h-[60px] mx-auto"
              />
            }
          </div>
        </div>
        <div className="flex">
          <div className="w-10"></div>
          <div className="w-64 px-2">
            <div className="flex items-center">
              <div className="flex-1 text-center px-1 py-1 m-2">
                <a
                  href="#"
                  className="mt-1 group flex items-center text-gray-500 px-2 py-2 text-base leading-6 font-medium rounded-full hover:blue-800 hover:text-[#9146FF]"
                >
                  <label htmlFor="imageInput">
                    <svg
                      className="text-center h-7 w-6"
                      id="img"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                  </label>
                  <input
                    type="file"
                    id="imageInput"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageChange}
                  />
                </a>
              </div>
              <div className="flex-1 text-center py-2 m-2">
                <a
                  href="#"
                  className="mt-1 group flex items-center text-gray-500 px-2 py-2 text-base leading-6 font-medium rounded-full hover:blue-800 hover:text-[#9146FF]"
                >
                  <svg
                    className="text-center h-7 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                    <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </a>
              </div>

              <div className="flex-1 text-center py-2 m-2">
                <a
                  href="#"
                  className="mt-1 group flex items-center text-gray-500 px-2 py-2 text-base leading-6 font-medium rounded-full hover:blue-800 hover:text-indigo-600"
                >
                  <svg
                    className="text-center h-7 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                </a>
              </div>

              <div className="flex-1 text-center py-2 m-2">
                <a
                  href="#"
                  className="mt-1 group flex items-center text-gray-500 px-2 py-2 text-base leading-6 font-medium rounded-full hover:blue-800 hover:text-[#9146FF]"
                >
                  <svg
                    className="text-center h-7 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="flex-1 flex-row ">
            <button
              className="bg-[#9146FF] shadow-lg mt-5 hover:bg-[#a062fe] text-white font-bold py-2 px-8 rounded-md mr-8 float-right"
              type="submit"
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default TextInput;
