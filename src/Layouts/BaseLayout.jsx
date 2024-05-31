// import React from 'react'
import { Outlet } from "react-router-dom";

import Navbar from "../Components/Common/Navbar";
import Footer from "../Components/Common/Footer";



 function BaseLayout() {
  return (
    //
    <> 
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}
export default BaseLayout;
