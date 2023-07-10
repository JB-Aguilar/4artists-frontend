import { useState } from "react";
import { Link, useNavigate} from "react-router-dom"

import "./SignUp.css"

function SignUp() {
  const navigate = useNavigate()

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [repeatPassword, setRepeatPassword] = useState("")
  const [email, setEmail] = useState("")
  const [birth, setBirth] = useState("")
  const [showError, setShowError] = useState("")
  const [showError, setShowError] = useState(false);

  function handleUsername(e){
    setUsername(e.target.value)
  }

  function usernameVerification(e){
    return (username.length < 5)
  }

  function handlePassword(e){
    setPassword(e.target.value)
  }

  function passwordVerification(){
    return !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/.test(
      password
    );
  }

  function handleRepeatPassword(e){
    setRepeatPassword(e.target.value)
  }

  function repeatPasswordVerification(){
    return repeatPassword !== password
  }

  function handleEmail(e){
    setEmail(e.target.value)
  }

  function emailVerification(){
    var reg = /^([A-Za-z0-9-.])+@([A-Za-z0-9-.])+.([A-Za-z]{2,4})$/;
    return !(reg.test(email))
  }

  const calculateAge = (birthday) => {
    const today = new Date()
    const birthDate = new Date (birthday)
    let age = today.getFullYear() - birthDate.getFullYear()
    
    const monthDiff = today.getMonth() - birthDate.getMonth()
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate()))
    {age --}
    return age
  }
  
  function validateAge(){
    return calculateAge(birth) > 18
  }

  const SignUpService = async () => {
    const res = await SignUpAPI(username, email, password, birth)
    if (res === 'error'){
      setShowErrorMsg('Error! Email already exist')
      showError()
    }else if(!localStorage.getItem('token')) {
      setErrorMsg('Warning! Some fields are incorrect or empty')
      showerrorMsg()
    }else{
      navigate('/createProfile')
    }
  }

  const showErrorMsg = () => {
    setShowError(true)
    setTimeout(() => { setShowError(false)}, 4000)
  }

  const hideErrorMsg = () => {
    setShowError(false)
  }

  function submitForum(e){
    e.preventDefault()
    if(
      !usernameVerification() &&
      !passwordVerification() &&
      !emailVerification() &&
      !repeatPasswordVerification() &&
      validateAge()
    ) {
      SignUpService()
    }else{
      setShowErrorMsg('Warning! Some fields are incorrect or empty')
      showErrorMsg()
    }
  }


  return (
    <div className="py-6">
      <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
        <div
          className="hidden lg:block lg:w-1/2 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b33eac21-7a17-4e94-b06d-3e06eec2129f/dfs2i3j-a55da7aa-07e9-4ac0-82c7-fefae9719292.png/v1/fill/w_894,h_894,q_70,strp/ninja_cat_by_aicharactersart_dfs2i3j-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjA0OCIsInBhdGgiOiJcL2ZcL2IzM2VhYzIxLTdhMTctNGU5NC1iMDZkLTNlMDZlZWMyMTI5ZlwvZGZzMmkzai1hNTVkYTdhYS0wN2U5LTRhYzAtODJjNy1mZWZhZTk3MTkyOTIucG5nIiwid2lkdGgiOiI8PTIwNDgifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.P7c2VODFDbV2AKx8Dp5BHSBZrgWPscFwRLJJYUwMO0k')",
          }}
        ></div>
        <div className="w-full p-8 lg:w-1/2">
          <h2 className="text-2xl font-semibold text-gray-700 text-center">
            4Artists
          </h2>
          <p className="text-xl text-gray-600 text-center">Welcome back!</p>
          <a
            href="#"
            className="flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100"
          >
            <div className="px-4 py-3">
              <svg className="h-6 w-6" viewBox="0 0 40 40">
                <path
                  d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                  fill="#FFC107"
                />
                <path
                  d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                  fill="#FF3D00"
                />
                <path
                  d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                  fill="#4CAF50"
                />
                <path
                  d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                  fill="#1976D2"
                />
              </svg>
            </div>
            <h1 className="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">
              Sign up with Google
            </h1>
          </a>
          <div className="mt-4 flex items-center justify-between">
            <span className="border-b w-1/5 lg:w-1/4"></span>
            <a href="#" className="text-xs text-center text-gray-500 uppercase">
              or sign up with email
            </a>
            <span className="border-b w-1/5 lg:w-1/4"></span>
          </div>
          <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2 flex justify-between">
              Username
            </label>
            <input
              className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
              type="email"
            />
          </div>
          <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2 flex justify-between">
              Email Address
            </label>
            <input
              className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
              type="email"
            />
          </div>
          <div className="mt-4">
            <div className="flex justify-between">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <a href="#" className="text-xs text-gray-500"></a>
            </div>
            <input
              className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
              type="password"
            />
          </div>
          <div className="mt-4">
            <div className="flex justify-between">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Repeat Password
              </label>
              <a href="#" className="text-xs text-gray-500"></a>
            </div>
            <input
              className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
              type="password"
            />
          </div>
          <div className="mt-4">
            <div className="flex justify-between">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Date
              </label>
              <a href="#" className="text-xs text-gray-500"></a>
            </div>
            <input
              className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
              type="date"
            />
          </div>
          <div className="mt-8">
            <button className="bg-indigo-600 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">
              Sign Up
            </button>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <span className="border-b w-1/5 md:w-1/4"></span>
            <a href="#" className="text-xs text-gray-500 uppercase">
              do you have an account?
            </a>
            <span className="border-b w-1/5 md:w-1/4"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
