import { createBrowserRouter } from "react-router-dom";
import Aboutus from "../component/Home/Aboutus";
import Contact from "../component/Home/Contact";
import Home from "../component/Home/Home";
import Packege from "../component/Home/Packege";
import Login from "../component/Login/Login";
import Signup from "../component/Signup/DriverSignup";
import DashboardHome from "../Dashboard/DashboardHome";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import DriverSignup from "../component/Signup/DriverSignup";
import RiderSignup from "../component/Signup/RiderSignup";
import AmbassadorSignup from "../component/Signup/AmbassadorSignup";
import Payment from "../component/Signup/payment";
import PackagePost from "../Dashboard/PackagePost";
import AllPackeges from "../Dashboard/AllPackage";
import AllDriver from "../Dashboard/AllDrivers";
import AllRider from "../Dashboard/AllRider";
import AllAmbassador from "../Dashboard/AllAmbassador";

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
        path: '/driver-signup',
      element:<DriverSignup/>  
    },
    {
        path: '/rider-signup',
      element:<RiderSignup/>  
    },
    {
        path: '/ambassador-signup',
      element:<AmbassadorSignup/>  
    },
    {
        path: '/login',
      element:<Login/>  
    },
    {
        path: '/payment',
      element:<Payment/>  
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
      {
        path: "/dashboard/add-package",
        element: <PackagePost/>,
      },
      {
        path: "/dashboard/all-packages",
        element: <AllPackeges/>,
      },
      {
        path: "/dashboard/all-drivers",
        element: <AllDriver/>,
      },
      {
        path: "/dashboard/all-Riders",
        element: <AllRider/>,
      },
      {
        path: "/dashboard/all-ambassadors",
        element: <AllAmbassador/>,
      },
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