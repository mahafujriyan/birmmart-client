
import React from 'react';
import Navbar from '../Components/Shared/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Shared/Footer';

const MainLayout = () => {
    return (
        <div className=' 
  min-h-screen flex flex-col  container mx-auto'>
           
            <div className="flex-grow  ">
                 <Navbar></Navbar>
        <Outlet />
      </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;