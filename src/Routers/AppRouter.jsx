import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import UserHome from "../Pages/UserSide/UserHome";
import SignupPage from "../Pages/UserSide/SignupPage";
import About from "../Pages/UserSide/About";
import Navbar from "../Components/Common/Navbar";
import Footer from "../Components/Common/Footer";
import Causes from "../Pages/UserSide/Causes/Causes";
import VolunteerPage from "../Pages/Agent/Volunteer/VolunteerPage";
import BlogPage from '../Pages/UserSide/Blog/BlogPage';
import EventPage from '../Pages/UserSide/CharityEvent/EventPage';
import ContactUs from '../Pages/UserSide/ContactUs/ContactUs';

function MainContent() {
  const location = useLocation();
  const hideNavbarAndFooter = location.pathname === '/signup';

  return (
    <div>
      {!hideNavbarAndFooter && <Navbar />}
      
      <Routes>
        <Route path="/" element={<UserHome />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/volunteer" element={<VolunteerPage />} />
        <Route path="/causes" element={<Causes />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/events" element={<EventPage />} />
        <Route path="/contact" element={<ContactUs />} />



      </Routes>

      {!hideNavbarAndFooter && <Footer />}
    </div>
  );
}

function AppRouter() {
  return (
    <BrowserRouter>
      <MainContent />
    </BrowserRouter>
  );
}

export default AppRouter;
