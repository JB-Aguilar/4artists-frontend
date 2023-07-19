import {Navigate, createBrowserRouter} from "react-router-dom";

import App from "../App";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login"
import Home from "../pages/Home/Home"
import UserProfile from "../pages/UserProfile/UserProfile";

const isAuthenticated = () => !localStorage.getItem("token");

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Login /> },
      { path: "/signup", element: <SignUp /> },
      { path: "/home", element: <Home /> },
    ],
  },
  { path: "/profile",
    element: isAuthenticated() ? <Navigate to="/login" /> : <UserProfile />,
    children: [
      { path: "/profile/", element: <UserProfile />}
    ]
  }
]);