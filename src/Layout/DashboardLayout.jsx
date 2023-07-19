import React from "react";
import { Link, Navigate, Outlet } from "react-router-dom";



const DashboardLayout = () => {
    if (!localStorage.getItem("token")) {
        return <Navigate to="/login" replace={true} />;
    }
    return (
        <div>
            <div className="drawer drawer-mobile lg:drawer-open">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                    <label htmlFor="my-drawer" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    <Outlet/>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 gap-5 w-80 h-full bg-base-300 text-base-content font-bold">
                        <Link to="/">
                            <img
                                className="w-[120px] md:w-[200px] lg:w-[200px]"
                                src=""
                                alt=""
                            />
                        </Link>
                        <li>
                            <Link to="/">HOME</Link>
                        </li>
                        <li>
                            <Link to="/dashboard">DASHBOARD</Link>
                        </li>
                        <li>
                            <Link to="/dashboard/all-ambassadors">AMBASSADORS</Link>
                        </li>
                        <li>
                            <Link to="/dashboard/all-drivers">DRIVERS</Link>
                        </li>
                        <li>
                            <Link to="/dashboard/all-riders">RIDERS</Link>
                        </li>
                        
                        
                        
                        
                        <div className="collapse collapse-plus ">
                            <input type="checkbox" />
                            <div className="collapse-title ">PACKAGE SECTION</div>
                            <div className="collapse-content">
                                <li className="text-red-800">
                                    <Link to="/dashboard/add-package">ADD PACKAGE</Link>
                                </li>
                                <li className="text-red-800">
                                    <Link to="/dashboard/all-packages">ALL PACKAGE</Link>
                                </li>
                            </div>
                        </div>
                        {/* <Logout /> */}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;



// {/* <div className="drawer  ">
//     <input id="my-drawer" type="checkbox" className="drawer-toggle" />
//     <div className="drawer-content ">
//         <label
//             htmlFor="my-drawer"
//             className="btn btn-primary drawer-button lg:hidden "
//         >
//             Open drawer
//         </label>
//         <Outlet />
//     </div>
//     <div className="drawer-side">
//         <label htmlFor="my-drawer" className="drawer-overlay"></label>
//         <ul className="menu p-4 gap-5 w-80 bg-base-200 text-base-content font-bold">
//             <Link to="/">
//                 <img
//                     className="w-[120px] md:w-[200px] lg:w-[200px]"
//                     src=""
//                     alt=""
//                 />
//             </Link>
//             <li>
//                 <Link to="/">HOME</Link>
//             </li>
//             <li>
//                 <Link to="/dashboard">DASHBOARD</Link>
//             </li>

//             <div className="collapse collapse-plus ">
//                 <input type="checkbox" />
//                 <div className="collapse-title ">AMBASSADOR SECTION</div>
//                 <div className="collapse-content">
//                     <li className="text-red-800">
//                         <Link to="/dashboard/all-ambassador">All </Link>
//                     </li>
//                 </div>
//             </div>

//             <div className="collapse collapse-plus ">
//                 <input type="checkbox" />
//                 <div className="collapse-title ">PACKAGE SECTION</div>
//                 <div className="collapse-content">
//                     <li className="text-red-800">
//                         <Link to="/dashboard/add-package">ADD PACKAGE</Link>
//                     </li>
//                     <li className="text-red-800">
//                         <Link to="/dashboard/all-package">ALL PACKAGE</Link>
//                     </li>
//                 </div>
//             </div>
//             {/* <Logout /> */}
//         </ul>
//     </div>
// </div> */}