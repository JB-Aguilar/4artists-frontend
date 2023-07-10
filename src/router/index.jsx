import {createBrowserRouter} from "react-router-dom";

import App from "../App";
import SignUp from "../pages/SignUp/SignUp";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "/signup", element: <SignUp /> },
        ]
    }
])