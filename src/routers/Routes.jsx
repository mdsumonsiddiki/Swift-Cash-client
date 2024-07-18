import { createBrowserRouter, } from "react-router-dom";
import Root from "../layouts/Root";
import SingUp from "../pages/SingUp";
import SingIn from "../pages/SingIn";
import Account from "../pages/Account";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Account/>
      },
    ]
  },
  {
    path: 'singup',
    element: <SingUp/>
  },
  {
    path: 'singin',
    element: <SingIn/>
  },

]);

export default router;