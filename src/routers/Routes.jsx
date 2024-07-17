import { createBrowserRouter, } from "react-router-dom";
import Root from "../layouts/Root";
import SingInUp from "../layouts/SingInUp";
import SingUp from "../pages/SingUp";
import SingIn from "../pages/SingIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/dashboard",
    element: <SingInUp/>,
    children: [
      {
        index: true,
        element: <SingIn/>
      },
      {
        path: 'singup',
        element: <SingUp/>
      },

    ]
  }

]);

export default router;