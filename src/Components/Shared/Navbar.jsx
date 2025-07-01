import React, { useContext, useEffect } from 'react';
import { FaCartPlus, FaStore } from 'react-icons/fa';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';
import { CartContext } from '../../Context/CartContext';
import { MdDashboard } from 'react-icons/md';
import ToggleButton from './ToggleButton';

const Navbar = () => {
const {user,signOutUser,}=useContext(AuthContext)
const{cartCount,setUserEmail }=useContext(CartContext)
useEffect(()=>{
  if(user?.email){
    setUserEmail(user.email)
  }
},[user])
// handle singOut 
  const handleSingOut=()=>{
    signOutUser()
    .then((result) => {
      console.log("signOut user",result)
 
      }).catch((error) => {
      console.log(error)
      });

  }

     const links=<>
      <li><NavLink className='' to='/'>Home</NavLink></li>
      <li><NavLink to='/category'> Categories</NavLink></li>
  
      {/* for all user */}
    
        <>
         <li><NavLink to="/allProducts">All Products</NavLink></li>
        
        </>
      
         
        {/* for reteilar */}
           {
            user && <>
                <li><NavLink to="/addProducts/">Add Product</NavLink></li>
                <li><NavLink to="/myProducts">My Product</NavLink></li>
                
            </>
        }

        {
          user && 
          <>
           <li> <NavLink to='/cart' className="relative">
              <FaCartPlus size={24} />
              {cartCount > 0 && (
                <span className=" absolute -top-2  bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                  {cartCount}
                </span>
              )}
                  </NavLink></li>
          </>
        }  
       
    </>
    return (
      
          <div className="px-3  mt-2 rounded-xl sticky top-0 z-50 navbar bg-gradient-to-r from-[#7832e9] via-[#d272e6] to-[#cc78e6] shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {
            links
        }
      </ul>
    </div>
     <Link to='/'>
    <div className="flex items-center gap-2 text-primary text-2xl font-bold">
    
       <FaStore className="text-accent" />
      <span className="tracking-wide">
        <span className="text-accent">Brim</span>mart
      </span>
    </div>
     </Link>
     
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {links}
    </ul>
  </div>
        
       
        <div className="navbar-end">
  {user ? (
    <div className="flex items-center gap-4">
        {/* Dashboard Button */}
      <NavLink
        to="/dashboard"
        className="btn btn-outline btn-sm flex items-center gap-1 rounded-2xl" 
      >
        <MdDashboard  size={24}/>
        
      </NavLink>
      {/* User Avatar with Tooltip */}
      <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
      
        {user?.photoURL ? (
      <img src={user.photoURL} alt="Profile" className="w-10 h-10 rounded-full" />
    ) : (
      <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
        <span className="text-sm">N/A</span>
      </div>
    )}
      </div>
        {/* Logout Button */}
      <button onClick={handleSingOut} className="btn btn-outline btn-sm">
        Logout
      </button>
    </div>
  ) : (
    <>
      <NavLink to="/singIn" className="btn btn-sm btn-outline mr-2  font-bold">
        Login
      </NavLink>
      <NavLink to="/register" className="btn btn-outline btn-sm ">
        Register
      </NavLink>
    </>
    
  )}
   <ToggleButton></ToggleButton>
</div>
      </div>
        
    );
};

export default Navbar;