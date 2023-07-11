import {createBrowserRouter} from "react-router-dom";

import App from "../App";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login"
//import Home from "../pages/Home/Home"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Login /> },
      { path: "/signup", element: <SignUp /> },
      //{ path: "/home", element: <Home /> },
    ],
  },
]);