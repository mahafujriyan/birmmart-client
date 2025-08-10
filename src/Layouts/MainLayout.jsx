
import React from 'react';
import Navbar from '../Components/Shared/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Shared/Footer';

const MainLayout = () => {
    return (
        <div className=' 
  min-h-screen flex flex-col  container mx-auto'>
             <Navbar></Navbar>
            <div className="w-11/12 mx-auto flex-grow  ">
               
                <Outlet />
                 </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;