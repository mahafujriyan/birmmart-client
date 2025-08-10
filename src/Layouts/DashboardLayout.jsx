import React from 'react';
import { Link, NavLink, Outlet } from 'react-router';
import Navbar from '../Components/Shared/Navbar';
import { FaFastBackward } from 'react-icons/fa';

const DashboardLayout = () => {
    return (
       
        <div >
         
          <div className="flex">
      <aside className=" bg-gradient-to-r from-[#2e2e4b] via-[#4560aa] to-[#1b67c4] w-64 min-h-screen  p-4">
        <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
        <nav className="flex flex-col gap-2">
          <NavLink to="/dashboard" end   className={({ isActive }) =>
          `btn btn-sm ${isActive ? 'btn-primary' :    'btn-outline'}`
        }>Overview</NavLink>
          <NavLink to="/dashboard/all-items"   className={({ isActive }) =>
        `btn btn-sm ${isActive ? 'btn-primary' : 'btn-outline'}`
      }>All Product</NavLink>
          <NavLink to="/dashboard/add-item"   className={({ isActive }) =>
       `btn btn-sm ${isActive ? 'btn-primary' : 'btn-outline'}`
       }>Add Product</NavLink>
          <NavLink to="/dashboard/my-items"   className={({ isActive }) =>
      `btn btn-sm ${isActive ? 'btn-primary' : 'btn-outline'}`
      }>My Product</NavLink>
        </nav>
         
      </aside>
    
      <main className="bg-[#f4f7fc] dark:bg-[#0f172a]
 flex-1 p-6">
        <Outlet />
      </main>
      
        </div>
         <Link className='btn btn-primary rounded-2xl' to='/'><FaFastBackward /> Back to home</Link>
        </div>
    );
};

export default DashboardLayout;