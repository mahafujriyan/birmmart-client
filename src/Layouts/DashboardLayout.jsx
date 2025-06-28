import React from 'react';
import { NavLink, Outlet } from 'react-router';
import Navbar from '../Components/Shared/Navbar';

const DashboardLayout = () => {
    return (
       
        <div>
          <Navbar></Navbar>
          <div className="flex">
      <aside className="w-64 min-h-screen  p-4">
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
      <main className="flex-1 p-6">
        <Outlet />
      </main>
        </div>
        </div>
    );
};

export default DashboardLayout;