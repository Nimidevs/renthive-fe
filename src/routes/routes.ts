import { createBrowserRouter } from "react-router";
import App from "../App";
import Signin from "../pages/auth/Signin";
import Signup from "../pages/auth/Signup";

const routes = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
  {
    path: "auth",
    children: [
      {
        path: "signin",
        Component: Signin,
      },
      {
        path: "signup",
        Component: Signup,
      },
    ],
  },
]);
export default routes
