import { createBrowserRouter } from "react-router-dom";
import Aboutus from "../component/Home/Aboutus";
import Contact from "../component/Home/Contact";
import Home from "../component/Home/Home";
import Packege from "../component/Home/Packege";
import Login from "../component/Login/Login";
import Signup from "../component/Signup/Signup";
import DashboardHome from "../Dashboard/DashboardHome";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";

const router = createBrowserRouter([{
    path: '/',
    element: <Main />,
    children: [{
        path: '/',
        element: <Home />,
    },
    {
        path: '/package',
      element:<Packege/>  
    },
    {
        path: '/about-us',
      element:<Aboutus/>  
    },
    {
        path: '/contact',
      element:<Contact/>  
    },
    {
        path: '/signup',
      element:<Signup/>  
    },
    {
        path: '/login',
      element:<Login/>  
    }
  ]
},
 {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard",
        element: <DashboardHome />,
      },
      // {
      //   path: "/dashboard/add-package",
      //   element: <AddPackage/>,
      // },
      // {
      //   path: "/dashboard/all-package",
      //   element: <AllPackage />,
      // },
      // {
      //   path: "/dashboard/edit-package/:id",
      //   element: <EditPackage />,
      // },
      
      
    ],
  },
])
export default router;