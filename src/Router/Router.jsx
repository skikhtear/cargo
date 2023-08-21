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
import AddRider from "../Dashboard/AddRider";
import EditRider from "../Dashboard/EditRider";
import MapRider from "../Dashboard/MapRider";
import AllContact from "../Dashboard/AllContact";
import TermsAndCondition from "../component/Home/TermsAndCondition";
import CookiesPolicy from "../component/Home/CookiesPolicy";
import PrivacyPolicy from "../component/Home/PrivacyPolicy";
import MapSignup from "../component/Signup/MapSignup";

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
        path: '/rider-signup/:id',
        element: <MapSignup />, 
        loader: ({ params }) => fetch(`https://xoxrides-server.vercel.app/package/${params.id}`)

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
    },
    {
      path: '/cookies-policy',
      element: <CookiesPolicy /> 
    },
    {
      path: '/terms-and-condition',
      element:<TermsAndCondition/> 
    }
    ,
    {
      path: '/privacy-policy',
      element:<PrivacyPolicy/> 
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
        path: "/dashboard/all-contacts",
        element: <AllContact/>,
      },
      {
        path: "/dashboard/add-Riders",
        element: <AddRider/>,
      },
      // {
      //   path: "/dashboard/rider/:id",
      //   element: <EditRider />,
      //   loader: ({ params }) => fetch(`http://https://xoxrides-server.vercel.app//rider/${params.id}`)

      // },
      {
        path: "/dashboard/rider/:id",
        element: <MapRider />,
        loader: ({ params }) => fetch(`https://xoxrides-server.vercel.app/rider/${params.id}`)

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